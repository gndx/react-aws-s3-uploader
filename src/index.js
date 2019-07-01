import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AWS from 'aws-sdk';
import './S3Uploader.css';

class S3Uploader extends Component {
  state = {
    loader: false,
    file: '',
    message: '',
  };

  componentDidMount() {
    AWS.config.update({
      region: this.props.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.props.IdentityPoolId,
      }),
    });
  }

  onChangeFile = () => {
    this.setState({ loader: true, file: '' });
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: this.props.albumBucketName },
    });
    const { files } = document.getElementById('photoupload');
    if (!files.length) {
      return this.statusMessage('Please choose a file to upload first.');
    }
    const file = files[0];
    const fileName = file.name;
    s3.upload(
      {
        Key: fileName,
        Body: file,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) {
          this.statusMessage(err);
        } else {
          this.setState({ loader: false, file: data.Location });
          this.props.handleFile(data.Location);
        }
      }
    );
  };

  render() {
    const { file, message, loader } = this.state;
    const { buttonName } = this.props;
    return (
      <div className="S3Uploader">
        <div className="S3Uploader-content">
          <div className="S3Uploader-service">
            <button type="button">{buttonName}</button>
            <input
              type="file"
              name="myfile"
              id="photoupload"
              onChange={this.onChangeFile}
            />
          </div>
          <div className="S3Uploader-image">
            {loader ? <div className="Loader" /> : null}
            {file ? <img src={file} alt="fileUpload" /> : null}
          </div>
        </div>
        <div className="S3Uploader-message">
          <span>{message > 0 ? message : null}</span>
        </div>
      </div>
    );
  }
}

S3Uploader.defaultProps = {
  buttonName: 'Subir Imagen',
  bucketRegion: 'us-east-1',
};

S3Uploader.propTypes = {
  buttonName: PropTypes.string,
  bucketRegion: PropTypes.string,
  albumBucketName: PropTypes.string.isRequired,
  IdentityPoolId: PropTypes.string.isRequired,
  handleFile: PropTypes.func.isRequired,
};

export default S3Uploader;
