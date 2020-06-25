import React from "react";
import {Form} from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

const Editor = () => {
    const [fontWeight, setFontWeight] = React.useState(100);
    const [fontSize, setFontSize] = React.useState(90);
    const [text, setText] = React.useState('');
    // const [downloadUrl, setDownloadUrl] = React.useState('');

    React.useEffect(() => {
        // const canvas = document.getElementById('canvas')
        // canvas.clearRect(0, 0, canvas.width, canvas.height)
        // canvas.fillText(text, 10, 50)
        // canvas.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        // setDownloadUrl(canvas.toDataUrl())
    }, [text])

    React.useEffect(() => {
        // const canvas = document.getElementById('canvas')
        // canvas.clearRect(0, 0, canvas.width, canvas.height)
        // canvas.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        // canvas.fillText(text, 10, 50)
        // setDownloadUrl(canvas.toDataURL())
    }, [fontSize, fontWeight])

    const textStyle = {
        fontSize: `${fontSize}px`,
        fontVariationSettings: `'wdth' 400, 'wght' ${fontWeight}`
    }
    const matuck = ['все пошло по пизде', 'ебашим на стиле', 'А весна это заебись и круче, да - только наличные', 'Стиль – основа, без стиля, мама, пиздец Мой девиз — «По-любому заебись»', 'Вообще нахуя быть сложным, когда вокруг такая простота?', 'блядские проекты', 'основной распиздос случится с нами в будущем', 'пиздецово работать', 'хуевато жить', 'хуярим, девачки']

    const randomMatuck = () => {
        return matuck[Math.floor(Math.random() * Math.floor(9)) + 1]
    }

    const randomImages = Math.floor(Math.random() * Math.floor(3)) + 1

    return (
        <React.Fragment>
            <canvas id='canvas' width={1110} height={580} style={{display: 'none'}}/>
            <div className='sidebar'>
                <div className='sidebar-content'>
                    <div className='font-setting'>
                        <Form>
                            <Form.Group controlId="formFontWeightRange">
                                <Form.Control type="range"
                                              onChange={(e) => setFontSize(e.target.value)}
                                              defaultValue='100'
                                              step='1'
                                              min='20'
                                              max='160'/>
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
                            <button type='button'
                                    className='random'
                                    onClick={(e) => setText(randomMatuck)}
                                    style={{}}>
                                <img src={require(`../assets/images/dice/dice-0${randomImages}.png`)}
                                     alt="" width='60px' height='60px'/>
                            </button>
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
                    onChange={(e) => setText(e.target.value)}
                    style={textStyle}
                    value={text}/>
            </div>
        </React.Fragment>
    )
}

export default Editor
