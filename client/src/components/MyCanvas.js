import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function MyCanvas({ state: { color } }) {
  return (
    <Fragment className='mycanvas'>
      <canvas style={{ backgroundColor: color }} width={640} height={360}>
        {' '}
      </canvas>
    </Fragment>
  );
}
MyCanvas.propTypes = {
  state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, {})(MyCanvas);
