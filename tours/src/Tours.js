import React from 'react'
import Tour from './Tour'

const Tours = ({tours, deleteTour}) => {
    console.log('tours');
    console.log(tours);
    return (
        <>
            <h1>Our Tours</h1>

            <div>
                {tours.map((tour) => {
                    return <Tour key = {tour.id} {...tour} deleteTour = {deleteTour}/>
                })}
            </div>
        </>
    )
}

export default Tours
