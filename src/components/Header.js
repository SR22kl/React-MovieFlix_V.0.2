import React from 'react'
import '../style/Header.css'

const Header = () => {
    const gts = () => {
        window.location = '/'
    }
    return (
        <div onClick={gts}>
            <span className='header' onClick={() => window.scroll(0, 0)} >
                🎬 MoviesFlix
            </span>
        </div>
    )
}

export default Header