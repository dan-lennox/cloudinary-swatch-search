import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import AverageColour from './AverageColour';

class Uploader extends Component {

  state = {
    preview: null,
    loadedImage: null
  };

  handleDrop([{ preview }]) {
    this.setState({ previewUrl: preview });
  }

  renderPreview() {
    if (this.state.previewUrl) {
      return (
        <img src={this.state.previewUrl} alt="Preview" id="preview" onLoad={this.previewImageLoaded.bind(this)} />
      );
    }

    return null;
  }

  previewImageLoaded() {
    this.setState({ loadedImage: document.getElementById('preview') });
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
        <section className="section colour-display">
          { this.renderPreview() }
          <AverageColour image={ this.state.loadedImage } />
        </section>
      </section>
    );
  }
}

export default Uploader;