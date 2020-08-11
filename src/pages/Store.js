import React from 'react';
import ScrollHorizontal from 'react-scroll-horizontal';

const Store = () => {
    return (
        <div className='store'>
            <div className='sidebar'>
                <div className='sidebar-content'>
                    {/*<div className='sidebar-content__title'>*/}
                    {/*    ЛОНГСЛИВ <br/> ОХУЕНЧИК*/}
                    {/*</div>*/}
                    <div className='sidebar-content__size'>
                        <div className='sidebar-content__grid-size-title'>РАЗМЕР</div>
                        <ul className='sidebar-content__grid-size'>
                            <li className='sidebar-content__grid-size-item'>S</li>
                            <li className='sidebar-content__grid-size-item'>M</li>
                            <li className='sidebar-content__grid-size-item'>L</li>
                        </ul>
                    </div>
                    <button className='sidebar-content__order'>ПРЕДЗАКАЗ</button>
                </div>
            </div>
            <ScrollHorizontal>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_01.png')} alt=''/>
                    <div className='store__title'>БРЕЛОК ПИЗДЕЦ <br/> 2500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_02.png')} alt=''/>
                    <div className='store__title'>ЛОНГСЛИВ ОХУЕНЧИК <br/> 1800.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_03.png')} alt=''/>
                    <div className='store__title'>МАЙКА ОХУЕННО <br/> 2500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_04.png')} alt=''/>
                    <div className='store__title'>ЛОНГСЛИВ ЗАЕБАЛСЯ <br/> 1800.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_05.png')} alt=''/>
                    <div className='store__title'>ЦЕПЬ ЁБА <br/> 3000.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_06.png')} alt=''/>
                    <div className='store__title'>ШАРФ ОХУЕННО <br/> 2000.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_07.png')} alt=''/>
                    <div className='store__title'>ШАРФ ОХУИТЕЛЬНО <br/> 2000.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_08.png')} alt=''/>
                    <div className='store__title'>ПАТЧ ХУЙ <br/> 500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_09.png')} alt=''/>
                    <div className='store__title'>ПАТЧ БЛЯДЬ <br/> 500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_10.png')} alt=''/>
                    <div className='store__title'>ПИН ПИЗДА <br/> 500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_11.png')} alt=''/>
                    <div className='store__title'>ПИН ПИЗДА <br/> 500.- Р</div>
                </div>
            </ScrollHorizontal>
        </div>
    )
}

export default Store
