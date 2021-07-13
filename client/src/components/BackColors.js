import React, { useEffect } from 'react';
import img from '../img/BIGVU-LOGO.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseColor } from '../actions/image';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BackColors({ chooseColor }) {
  useEffect(() => {
    chooseColor('white');
  }, [chooseColor]);
  return (
    <>
      <Navbar className='color-nav' variant='dark'>
        <Nav className='mx-auto'>
          <Nav.Link
            as={Link}
            className='mr-5'
            to='/white'
            onClick={(e) => chooseColor('white')}
          >
            White
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/blue'
            onClick={(e) => chooseColor('#6389df')}
          >
            Blue
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

BackColors.propTypes = {
  chooseColor: PropTypes.func.isRequired,
};

export default connect(null, { chooseColor })(BackColors);
