import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

const Store = () => {
    return (
        <div className='store'>
            <div className='sidebar'>
                <div className='sidebar-content'>
                    <div className="sidebar-content__title">
                        ЛОНГСЛИВ ОХУЕНЧИК
                    </div>
                    <div className="sidebar-content__size">
                        <ul className='sidebar-content__grid-size'>
                            <li className='sidebar-content__grid-size-item'>РАЗМЕР</li>
                            <li className='sidebar-content__grid-size-item'>S</li>
                            <li className='sidebar-content__grid-size-item'>M</li>
                            <li className='sidebar-content__grid-size-item'>L</li>
                        </ul>
                    </div>
                    <button className="sidebar-content__order">ПРЕДЗАКАЗ</button>
                </div>
            </div>
            <ScrollHorizontal>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_01.png')} alt=""/>
                    <div className="store__title">БРЕЛОК ПИЗДЕЦ <br/> 2500.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_02.png')} alt=""/>
                    <div className="store__title">ЛОНГСЛИВ ОХУЕНЧИК <br/> 1800.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_03.png')} alt=""/>
                    <div className="store__title">ЛОНГСЛИВ ОХУЕНЧИК <br/> 1800.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_04.png')} alt=""/>
                    <div className="store__title">ЛОНГСЛИВ ОХУЕНЧИК <br/> 1800.- Р</div>
                </div>
                <div className='store__item'>
                    <img src={require('../assets/images/store/image_05.png')} alt=""/>
                    <div className="store__title">ЛОНГСЛИВ ОХУЕНЧИК <br/> 1800.- Р</div>
                </div>
            </ScrollHorizontal>
        </div>
    )
}

export default Store
