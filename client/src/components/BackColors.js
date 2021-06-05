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
  }, []);
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand>
          <img
            alt=''
            src={img}
            width='100'
            height='30'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Nav className='mx-auto'>
          <Nav.Link
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
