import React from 'react';
import {Form} from 'react-bootstrap';

const FontSetting = () => {
    return (
        <div className='font-setting'>
            <Form>
                <Form.Group controlId='formBasicSize'>
                    <Form.Control type='range'/>
                    <Form.Label>Size</Form.Label>
                </Form.Group>
                <Form.Group controlId='formRangeCensored'>
                    <Form.Control type='range'/>
                    <Form.Label>Censored</Form.Label>
                </Form.Group>
            </Form>
        </div>
    )
}

export default FontSetting
