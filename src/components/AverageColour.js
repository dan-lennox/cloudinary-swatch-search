import React, { Component } from 'react';

class AverageColour extends Component {

  /**
   * Credit: http://matkl.github.io/average-color/
   *
   * @return {{r: number, g: number, b: number}}
   */
  calculateAverageColour() {
    const img =  this.props.image;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width = img.naturalWidth;
    const height = canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let r = 0;
    let g = 0;
    let b = 0;


    for (let i = 0, l = data.length; i < l; i += 4) {
      r += data[i];
      g += data[i+1];
      b += data[i+2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return { r: r, g: g, b: b };
  }

  renderAverageColour() {

    //this.renderAverageColour();
    const avgColour = this.calculateAverageColour();
    const rgbString = `rgb(${avgColour.r}, ${avgColour.g}, ${avgColour.b})`;

    return [
      <h5 key="1">Average Colour</h5>,
      <ul key="2">
        <li key="2" id="average-color" style={{ backgroundColor: rgbString }}></li>
        <li key="3">{ rgbString }</li>
      </ul>
    ];
  }


  render() {

    return (
      <div className=" average-colour-display">
        { this.props.image && this.renderAverageColour() }
      </div>
    );
  }
}

export default AverageColour;