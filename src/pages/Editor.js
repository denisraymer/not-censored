import React from 'react';
import {Form} from 'react-bootstrap';

const Editor = () => {
    const [fontWeight, setFontWeight] = React.useState(100);
    const [fontSize, setFontSize] = React.useState(90);
    const [text, setText] = React.useState('');
    const [downloadUrl, setDownloadUrl] = React.useState('');

    function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight) {
        let words = text.split(' ');
        let countWords = words.length;
        let line = '';
        for (let n = 0; n < countWords; n++) {
            let testLine = line + words[n] + ' ';
            let testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + ' ';
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        return context.fillText(line, marginLeft, marginTop);
    }

    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        wrapText(ctx, text, 10, 160, 1110, 120)
        ctx.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        setDownloadUrl(canvas.toDataURL())
    }, [text])

    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        wrapText(ctx, text, 10, 160, 1110, 120)
        ctx.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        setDownloadUrl(canvas.toDataURL())
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
                            <Form.Group controlId='formFontWeightRange'>
                                <Form.Control type='range'
                                              onChange={(e) => setFontSize(e.target.value)}
                                              defaultValue='100'
                                              step='1'
                                              min='20'
                                              max='160'/>
                                <Form.Label>Размер</Form.Label>
                            </Form.Group>
                            <Form.Group controlId='formFontSizeRange'>
                                <Form.Control type='range'
                                              onChange={(e) => setFontWeight(e.target.value)}
                                              defaultValue='100'
                                              step='1'
                                              min='100'
                                              max='900'/>
                                <Form.Label>Цензура</Form.Label>
                            </Form.Group>
                            <button type='button'
                                    className='random'
                                    onClick={() => setText(randomMatuck)}
                                    style={{}}>
                                <img src={require(`../assets/images/dice/dice-0${randomImages}.png`)}
                                     alt='' width='60px' height='60px'/>
                            </button>
                            {/*<a download href={downloadUrl} target='_blank' className='btn btn-dark'>*/}
                            {/*    Download*/}
                            {/*</a>*/}
                        </Form>
                    </div>
                    <a download href={downloadUrl} target='_blank' className='btn'>Сохранить</a>
                </div>
            </div>
            <div className='text-editor'>
                <textarea
                    placeholder='ЗДЕСЬ МОЖНО МАТЕРИТЬСЯ '
                    onChange={(e) => setText(e.target.value)}
                    style={textStyle}
                    value={text}/>
            </div>
        </React.Fragment>
    )
}

export default Editor
