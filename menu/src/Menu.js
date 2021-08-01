import React from 'react'

const Menu = ({items}) => {
    return (
        <div className = 'menu-items-grid'>

            {
                items.map((item) => {
                    const {id, title, price, img, desc} = item;
                    return (
                        <div key = {id} className = 'menu-item'>

                            <div className = 'image-div'>
                                <img src={img} alt="" />
                            </div>
                            
                            <div className="menu-item-details">
                                <div className="item-header">
                                    <h4>{title}</h4>
                                    <p className = 'price'>${price}</p>
                                </div>
                                <div style = {{clear: 'both'}}></div>
                                <p className = 'item-desc'>{desc}</p>
                            </div>
                            
                        </div>
                    );
                })
            }
            
        </div>
    )
}

export default Menu
