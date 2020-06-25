import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

const Gallery = () => {
    return (
        <div className='gallery'>
            <ScrollHorizontal>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_07.jpg')} alt=""/>
                    <div className="gallery__title">@kristina_viriasova feat @anvar.murazimov</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_06.jpg')} alt=""/>
                    <div className="gallery__title">@kristina_viriasova</div>
                </div>
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
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_05.jpg')} alt=""/>
                    <div className="gallery__title">@spwilli_</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_04.jpg')} alt=""/>
                    <div className="gallery__title">@anvar.murazimov</div>
                </div>
            </ScrollHorizontal>
        </div>
    )
}

export default Gallery
