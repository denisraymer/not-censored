import React from 'react';
import {Form} from 'react-bootstrap';

const Editor = () => {
    const [fontWeight, setFontWeight] = React.useState(100);
    const [fontSize, setFontSize] = React.useState(90);
    const [text, setText] = React.useState('');
    const [downloadUrl, setDownloadUrl] = React.useState('');
    const [modalClose, setModalClose] = React.useState(true);

    const wrapText = (context, text, marginLeft, marginTop, maxWidth, lineHeight) => {
        let words = text.split(' ');
        let countWords = words.length;
        let line = '';
        for (let n = 0; n < countWords; n++) {
            let testLine = line + words[n] + ' ';
            let testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                context.textAlign = 'center';
                line = words[n] + ' ';
                marginTop += lineHeight;
            } else {
                line = testLine;
            }
        }
        return context.fillText(line, marginLeft, marginTop);
    }

    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        wrapText(ctx, text, 240, 160, 1000, 120)
        ctx.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        setDownloadUrl(canvas.toDataURL())
    }, [text]);

    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        wrapText(ctx, text, 240, 160, 1000, 120)
        ctx.font = fontWeight + ' ' + fontSize + 'px CensoredExprmntlbetaGX'
        setDownloadUrl(canvas.toDataURL())
    }, [fontSize, fontWeight]);

    const textStyle = {
        fontSize: `${fontSize}px`,
        fontVariationSettings: `'wdth' 400, 'wght' ${fontWeight}`
    }

    const matuck = ['все пошло по пизде', 'ебашим на стиле', 'А весна это заебись и круче, да - только наличные', 'Стиль – основа, без стиля, мама, пиздец Мой девиз — «По-любому заебись»', 'Вообще нахуя быть сложным, когда вокруг такая простота?', 'блядские проекты', 'основной распиздос случится с нами в будущем', 'пиздецово работать', 'хуевато жить', 'хуярим, девачки']

    const randomMatuck = () => {
        return matuck[Math.floor(Math.random() * Math.floor(9)) + 1];
    }

    const randomImages = Math.floor(Math.random() * Math.floor(3)) + 1

    const contentSize = () => {
        let clientWidth = document.getElementById('root').clientWidth

        if (clientWidth < 990) {
            return modalClose
        }

        return !modalClose
    }

    return (
        <React.Fragment>
            <canvas id='canvas' width={1000} height={1000} style={{display: 'none'}}/>
            <div className='sidebar'>
                <div className='sidebar-content'>
                    <div className='font-setting'>
                        <Form>
                            <Form.Group controlId='formFontWeightRange'>
                                <Form.Control type='range'
                                              onChange={(e) => setFontSize(e.target.value)}
                                              className='slider'
                                              defaultValue='100'
                                              step='1'
                                              min='20'
                                              max='160'/>
                                <Form.Label>Размер</Form.Label>
                            </Form.Group>
                            <Form.Group controlId='formFontSizeRange'>
                                <Form.Control type='range'
                                              onChange={(e) => setFontWeight(e.target.value)}
                                              className='slider'
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
                        </Form>
                    </div>
                    <a download href={downloadUrl} onClick={() => setModalClose(!modalClose)} rel='noopener noreferrer'
                       className='btn'>Сохранить</a>
                </div>
            </div>
            <div className='text-editor'>
                <div className='modal-block' style={{display: contentSize() ? 'flex' : 'none'}}>
                    <div className='modal-block__btn' onClick={() => setModalClose(!modalClose)}>
                        <img src={require('../assets/images/close.svg')} alt='close'/>
                    </div>
                    <div className='modal-block__text'>
                        ЕСЛИ ВАМ НРАВИТСЯ, КАК ВЫГЛЯДИТ <br/>
                        ПОЛУЧИВШИЙСЯ ТЕКСТ — МОЖЕТЕ НЕ ТОЛЬКО <br/>
                        ОСТАВИТЬ ЕГО СЕБЕ, НО И ПОДЕЛИТЬСЯ <br/>
                        ИМ В СОЦ.СЕТЯХ —
                        <a href='https://www.instagram.com/minnie_vinni/' target='_blank'
                           className='modal-block__link'> НАМ </a>
                        БУДЕТ ПРИЯТНО!
                    </div>
                    <div className="mob-modal-block__text">
                        Привет!<br/>Это тестовая<br/>страница шрифта (NOT)CENSORED.<br/>Вы можете попробовать шрифт,
                        набрав любой текст, содержащий матерную лексику.<br/><br/>Полная версия сайта доступна для
                        десктопа
                    </div>
                </div>
                <textarea
                    placeholder='ЗДЕСЬ МОЖНО МАТЕРИТЬСЯ '
                    onChange={(e) => setText(e.target.value)}
                    style={textStyle}
                    value={text}/>
                <div className='copyright'/>
            </div>
        </React.Fragment>
    );
}

export default Editor
