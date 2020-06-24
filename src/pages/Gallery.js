import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

const Gallery = () => {
    return (
        <div className='gallery'>
            <ScrollHorizontal>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_01.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_02.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_03.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_04.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_01.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_02.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_03.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
                <div className='gallery__item'>
                    <img src={require('../assets/images/gallery/image_04.png')} alt=""/>
                    <div className="gallery__title">@MINNIE_VINNI</div>
                </div>
            </ScrollHorizontal>
        </div>
    )
}

export default Gallery
