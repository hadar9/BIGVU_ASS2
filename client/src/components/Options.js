import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Spinner,
  DropdownButton,
  Dropdown,
  Form,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { chooseImage } from '../actions/image';

function Options({ chooseImage }) {
  const [Data, setData] = useState({ loading: false, images: [] });

  const { loading, images } = Data;

  const chooseImg = (e) => {
    console.log(e);
    chooseImage(e);
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:5000/');
      setData({ loading: true, images: res.data });
    }
    getData();
  }, []);

  return (
    <div className='options'>
      {loading ? (
        <>
          <DropdownButton
            alignRight
            title='choose an image'
            id='dropdown-menu-align-right'
            onSelect={chooseImg}
          >
            {images.map((image) => (
              <Dropdown.Item key={image['name']} eventKey={image['value']}>
                {image['name']}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Form>
            <Row className='textform align-items-center'>
              <Col xs='auto'>
                <Form.Control
                  className='mb-2'
                  id='inlineFormInput'
                  placeholder='Enter text'
                />
              </Col>
              <Col xs='auto'>
                <Button type='submit' className='mb-2'>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        <Spinner animation='border' variant='info' />
      )}
    </div>
  );
}

Options.propTypes = {
  chooseImage: PropTypes.func.isRequired,
};

export default connect(null, { chooseImage })(Options);
