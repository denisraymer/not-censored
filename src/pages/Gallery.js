import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

const Gallery = () => {
    return (
        <div className='gallery'>
            <ScrollHorizontal>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_03.jpg')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_01.jpg')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_02.jpg')} alt=""/>
                    <div className="gallery__title">@KOLONOOK</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_08.jpg')} alt=""/>
                    <div className="gallery__title">@spwilli_</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_13.jpg')} alt=""/>
                    <div className="gallery__title">@spwilli_</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_10.jpg')} alt=""/>
                    <div className="gallery__title">@STEYCK_VLAD</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_11.jpg')} alt=""/>
                    <div className="gallery__title">@STEYCK_VLAD</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_12.jpg')} alt=""/>
                    <div className="gallery__title">@N.DOROGINA</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_06.jpg')} alt=""/>
                    <div className="gallery__title">@kristina_viriasova</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_14.jpg')} alt=""/>
                    <div className="gallery__title">@anvar.murazimov</div>
                </div>
            </ScrollHorizontal>
        </div>
    )
}

export default Gallery
