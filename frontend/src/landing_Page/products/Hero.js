import React from 'react';

function Hero() {
    return (  
        <div  className='container mb-5 border-bottom'>
        <div className='row text-center mt-5 p-3'>
            <h2>Zerodha Products</h2>
            <h3 className='fs-4 mt-2 text-muted' >Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3  mb-5 text-muted'>Check out our <a style={{textDecoration:"none"}} href=''>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
        </div>
    );
}

export default Hero;