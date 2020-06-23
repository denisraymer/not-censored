import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import {Form} from 'react-bootstrap';
import TextEditor from './components/TextEditor';

function App() {
    return (
        <div className='main'>
            <NavigationBar/>
            <div className='content'>
                <div className='sidebar'>
                    <div className='sidebar-content'>
                        <div className='font-setting'>
                            <Form>
                                <Form.Group controlId='formBasicSize'>
                                    <Form.Control type='range'/>
                                    <Form.Label>Размер</Form.Label>
                                </Form.Group>
                                <Form.Group controlId='formRangeCensored'>
                                    <Form.Control type='range'/>
                                    <Form.Label>Цензура</Form.Label>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='btn'>Сохранить</div>
                    </div>
                </div>
                <TextEditor />
                <div className='copyright'/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
