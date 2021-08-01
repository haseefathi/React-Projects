import React,  {useState} from 'react'

const Tour = ({id, image, info, name, price, deleteTour} ) => {

    const [readMore, setReadMore] = useState(false);

    return (
        <div className = "tour-card" style = {{backgroundImage: `url(${image})`}}>

            <div className = "tour-description">
                <div className = "tour-description-header">
                    <div style = {{backgroundImage: `url(${image})`}} className = 'product-description-heading'>
                        <h2>{name}</h2>
                    </div>
                    
                    <p className = "price">${price}</p>
                    
                    <div style = {{clear: 'both'}}></div>
                </div>

                <p className = "info" >{readMore ? info : `${info.substring(0,400)}...`} <button className="read-button" onClick = {() => setReadMore(!readMore)}> {readMore ? 'Show less' : 'Read more'}</button></p>

                <button className = "delete-button" onClick = {() => deleteTour(id)}>
                    Not Interested
                </button>
            </div>

        </div>
    )
}

export default Tour
