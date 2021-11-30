import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { imageSliceActions } from '../reducers/imageReducer';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BackColors() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imageSliceActions.chooseColor('white'));
  }, [dispatch]);
  return (
    <>
      <Navbar className='color-nav' variant='dark'>
        <Nav className='mx-auto'>
          <Nav.Link
            as={Link}
            className='mr-5'
            to='/white'
            onClick={(e) => dispatch(imageSliceActions.chooseColor('white'))}
          >
            White
          </Nav.Link>
          <Nav.Link
            as={Link}
            to='/blue'
            onClick={(e) => dispatch(imageSliceActions.chooseColor('#6389df'))}
          >
            Blue
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
