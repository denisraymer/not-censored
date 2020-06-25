import React from 'react';
import MarqueeText from 'react-marquee-text-component';

const Footer = () => {
    let text = 'ВНИМАНИЕ! САЙТ СОДЕРЖИТ НЕНОРМАТИВНУЮ ЛЕКСИКУ (И ПОСВЯЩЕН ЕЙ) • 18+ • ВНИМАНИЕ! САЙТ СОДЕРЖИТ НЕНОРМАТИВНУЮ ЛЕКСИКУ (И ПОСВЯЩЕН ЕЙ)';

    return (
        <div className='footer'>
            <div className='marquee-stroke'>
                <MarqueeText text={text} duration={40}/>
            </div>
        </div>
    )
}

export default Footer
