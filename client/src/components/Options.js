import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { imageSliceActions } from '../reducers/imageReducer';
import { debounce } from 'loadsh';

export default function Options() {
  const [Data, setData] = useState({ loading: false, images: [] });
  const { loading, images } = Data;

  const dispatch = useDispatch();

  const chooseImg = (e) => {
    dispatch(imageSliceActions.chooseImage(e));
  };
  const changeTexts = debounce((text) => {
    dispatch(imageSliceActions.changeText(text));
  }, 500);

  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/');
    setData({ loading: true, images: res.data });
  }, []);

  return (
    <div className='options'>
      {loading ? (
        <>
          <DropdownButton
            style={{ textAlign: 'center', marginTop: '5%' }}
            title='choose an image'
            onSelect={chooseImg}
            variant='light'
          >
            {images.map((image) => (
              <Dropdown.Item key={image['name']} eventKey={image['value']}>
                {image['name']}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Form>
            <Form.Group className='text-center mt-5'>
              <Form.Label style={{ color: 'black', fontSize: '18px' }}>
                Add Text:
              </Form.Label>
              <Form.Control
                className='btn w-75 mx-auto'
                variant='light'
                id='inlineFormInput'
                placeholder='Enter text'
                onChange={(e) => changeTexts(e.target.value)}
              />
            </Form.Group>
          </Form>
        </>
      ) : (
        <Spinner className='spinner' animation='border' />
      )}
    </div>
  );
}
