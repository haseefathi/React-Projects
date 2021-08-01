import React from 'react'


const List = ({people}) => {

    return (
        <React.Fragment>
            {
                people.map((person) => {
                    const {name, id, age, image} = person;
                    return <article key = {id} className = 'person'>
                        <img src={image} alt={name} />
                        <h4>{name}</h4>
                        <p>{age} years</p>
                        <div style = {{clear: 'both'}}></div>
                    </article>
                })
            }
        </React.Fragment>
    )
}

export default List
