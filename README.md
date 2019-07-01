# react-aws-s3-uploader

It provides an easy-to configure component to Uploading Photos to Amazon S3 from your React project.

Based on this documentation:
[Uploading Photos to Amazon S3 from a Browser"](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html)

![React](https://raw.githubusercontent.com/arepa-dev/reactAWSUploader/master/react-aws-s3-uploader.gif)


# Install

```npm
npm install react-aws-s3-uploader --save
```

Be sure to include the --save option to add this as a dependency in your application's package.json

# Usage

```js
import React, { Component } from 'react';
import S3Uploader from 'react-aws-s3-uploader'; // import the component

class App extends Component {

  state = {
    file: '',
  }

  handleFile = (file) => {
    this.setState({
      file
    });
  }

  render() {
    return (
      <S3Uploader
        albumBucketName="Bucket_Name" // Bucket Name
        IdentityPoolId="IdentityPool_Id" // Identity Pool Id
        handleFile={this.handleFile}
      />
    );
  }
}

export default App;
```

# Options

### buttonName
Name of button, default is "Upload File".

### bucketRegion
The bucket region of AWS.

### albumBucketName
Name of bucket where the files are stored.

### IdentityPoolId
Amazon Cognito identity pools provide temporary AWS credentials for users who are guests (unauthenticated) and for users who have been authenticated and received a token. An identity pool is a store of user identity data specific to your account. More info: [Using Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html)

### handleFile
funtion to return the url of the file stored in s3.

## Example:

```js
  <S3Uploader
    buttonName="Upload File"
    bucketRegion="us-east-1"
    albumBucketName="arepa"
    IdentityPoolId="us-east-1:2fc911ef-0679"
    handleFile={this.handleFile}
  />
```

# Demo
Check here: [react-aws-s3-uploader](https://arepa-dev.github.io/reactAWSUploader/)

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [react-mailchimp-form](https://github.com/gndx/react-aws-s3-uploader)

# License
React-mailchimp-form is released under the [MIT License](https://opensource.org/licenses/MIT).
