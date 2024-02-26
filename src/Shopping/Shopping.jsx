import React, { useState } from 'react';
import buy from "./Buy.png"
const Shopping = () => {
    const [isHomeVisible, setIsHomeVisible] = useState(false);

    const toggleHomeVisibility = () => {
        setIsHomeVisible(!isHomeVisible);
    };

    return (
        <div className='container'>
            <h1 id='h1' ><img src={buy} alt="" onClick={toggleHomeVisibility }/></h1>
            <div className="home" >
                <div className="shop-homes" style={{ display: isHomeVisible ? 'block' : 'none' }}>
                    <h1>Shopping card</h1>
                    <article className='items'>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                        <article className='item'>
                            <img src="" alt="burger" />
                            <p>sakin</p>
                            <p>2342342</p>
                        </article>
                    </article>
                    <article className='btn-home'>
                         <button onClick={toggleHomeVisibility} >close</button>
                        <button>Shop now</button>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Shopping;
