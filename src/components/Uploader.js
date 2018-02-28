import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

class Uploader extends Component {

  state = { preview: null };

  handleDrop([{ preview }]) {
    this.setState({ preview });
  }

  renderPreview() {
    if (this.state.preview) {
      return (
        <img src={this.state.preview} alt="Preview" className="preview"/>
      );
    }

    return null;
  }

  render() {

    return (
      <section className="section">
        <p className="blue-text">Upload an image to retrieve images with a similar average color from Cloudinary.</p>
        <Dropzone
          className="dropzone"
          onDrop={this.handleDrop.bind(this)}
          multiple={false}
          accept="image/png, image/jpeg, image/jpg"
          rejectClassName="rejectedDrop"
          acceptClassName="acceptDrop"
        >
          Drag a swatch image here or click to upload.
        </Dropzone>
        { this.renderPreview() }
      </section>
    );
  }
}

// Using object destructuring.
// function mapStateToProps({ auth }) {
//   // Auth is already equal to { auth: auth }, so we can just return auth.
//   return { auth };
//   //return { auth: auth };
// }

// Regular version
// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

export default Uploader;

//export default connect(mapStateToProps)(Header);