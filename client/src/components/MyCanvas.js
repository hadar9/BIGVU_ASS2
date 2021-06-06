import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
function MyCanvas({ state: { color, imageurl, text } }) {
  const canvasRef = useRef(null);
  const ImagRef = useRef(null);

  const fillText = (ctx, words, x, y, canvaTextWidth, fontsize) => {
    let line = '';
    let word;
    let metrics;

    for (let i = 0; i < words.length; i++) {
      word = line + words[i] + ' ';
      metrics = ctx.measureText(word);

      if (metrics.width > canvaTextWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + ' ';
        y += fontsize;
      } else {
        line = word;
      }
    }
    ctx.fillText(line, x, y);

    return y;
  };

  useEffect(() => {
    let canva = canvasRef.current;
    const ctx = canva.getContext('2d');
    ctx.clearRect(0, 0, canva.width * (2 / 3), canva.height);
    if (imageurl) {
      let img = ImagRef.current;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canva.width * (2 / 3), canva.height);
      };
    }
  }, [imageurl]);

  useEffect(() => {
    let canva = canvasRef.current;
    const ctx = canva.getContext('2d');

    let canvaTextWidth = canva.width - canva.width * (2 / 3);
    let x = canva.width * (2 / 3);
    let y = 150;
    let fontSize = 50;

    ctx.clearRect(x, 0, canvaTextWidth, canva.height);

    if (text) {
      let words = text.split(' ');

      //check for the right font size
      if (color === 'white') {
        ctx.fillStyle = 'white';
      } else {
        ctx.fillStyle = '#6389df';
      }

      do {
        fontSize -= 4;
        ctx.font = `${fontSize}px Inter sans-serif`;

        y = 150;
        ctx.clearRect(x, 0, canvaTextWidth, canva.height);
        y = fillText(ctx, words, x, y, canvaTextWidth, fontSize);
      } while (y > 200);

      ctx.clearRect(x, 0, canvaTextWidth, canva.height);

      if (color === 'white') {
        ctx.fillStyle = '#605399';
      } else {
        ctx.fillStyle = 'white';
      }
      ctx.font = `${fontSize}px Inter sans-serif`;

      fillText(ctx, words, x, 150, canvaTextWidth, fontSize);
    }
  }, [text, color]);

  return (
    <>
      <Image ref={ImagRef} src={String(imageurl)} hidden />

      <canvas
        className='mycanvas'
        ref={canvasRef}
        style={{ backgroundColor: color }}
        width={640}
        height={360}
      >
        {' '}
      </canvas>
    </>
  );
}
MyCanvas.propTypes = {
  state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, {})(MyCanvas);
