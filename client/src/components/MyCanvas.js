import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
function MyCanvas({ state: { color, imageurl } }) {
  const canvasRef = useRef(null);
  const ImagRef = useRef(null);

  useEffect(() => {
    let canva = canvasRef.current;
    const ctx = canva.getContext('2d');
    ctx.clearRect(0, 0, canva.width, canva.height);
    if (imageurl) {
      let img = ImagRef.current;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canva.width * (2 / 3), canva.height);
      };
    }
  }, [imageurl]);

  return (
    <>
      <Image ref={ImagRef} src={String(imageurl)} hidden />

      <canvas
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
