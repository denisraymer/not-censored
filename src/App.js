import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import {Form} from 'react-bootstrap';

function App() {
    const [fontWeight, setFontWeight] = React.useState(100);
    const [fontSize, setFontSize] = React.useState(100);
    const [text, setText] = React.useState('');
    const [downloadUrl, setDownloadUrl] = React.useState('');

    React.useEffect(() => {
        const canvas = document.getElementById('canvas')

        console.log(canvas.width, canvas.height)

        // canvas.clearRect(0, 0, canvas.width, canvas.height)
        // canvas.fillText(text, 10, 50)
        // canvas.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        // setDownloadUrl(canvas.toDataUrl())
    }, [text])

    React.useEffect(() => {
        const canvas = document.getElementById('canvas')
        // canvas.clearRect(0, 0, canvas.width, canvas.height)
        // canvas.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        // canvas.fillText(text, 10, 50)
        // setDownloadUrl(canvas.toDataURL())
    }, [fontSize, fontWeight])

    const textStyle = {
        fontSize: `${fontSize}px`,
        fontVariationSettings: `'wdth' 400, 'wght' ${fontWeight}`
    }

    return (
        <div className='main'>
            <NavigationBar/>
            <canvas id='canvas' width={1110} height={580} style={{display: 'none'}}/>
            <div className='content'>
                <div className='sidebar'>
                    <div className='sidebar-content'>
                        <div className='font-setting'>
                            <Form>
                                <Form.Group controlId="formFontWeightRange">
                                    <Form.Control type="range"
                                                  onChange={(e) => setFontSize(e.target.value)}
                                                  defaultValue='100'
                                                  step='1'
                                                  min='100'
                                                  max='150'/>
                                    <Form.Label>Размер</Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formFontSizeRange">
                                    <Form.Control type="range"
                                                  onChange={(e) => setFontWeight(e.target.value)}
                                                  defaultValue='100'
                                                  step='1'
                                                  min='100'
                                                  max='900'/>
                                    <Form.Label>Цензура</Form.Label>
                                </Form.Group>
                                {/*<a download href={downloadUrl} target="_blank" className='btn btn-dark'>*/}
                                {/*    Download*/}
                                {/*</a>*/}
                            </Form>
                        </div>
                        <div className='btn'>Сохранить</div>
                    </div>
                </div>
                <div className='text-editor'>
                    <textarea
                        placeholder="ЗДЕСЬ МОЖНО МАТЕРИТЬСЯ "
                        className='form-control'
                        onChange={(e) => setText(e.target.value)}
                        style={textStyle}
                        value={text}/>
                </div>
                <div className='copyright'/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
