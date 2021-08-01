import loading_gif from './Eclipse-1s-200px.gif';

import React from 'react'

const Loading = () => {
    return (
        <div className = 'loader'>
            <img src={loading_gif} alt="loading" />
        </div>
    )
}

export default Loading;
