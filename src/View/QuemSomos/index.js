import React from 'react';

import HomeHeader from './home-header/header.js';
import HomeContent from './home-content/content.js';
import HomeFooter from './home-footer/footer.js';

import '../general_index.css';

function Home(){
    return (
        <>
            <HomeHeader/>
            <HomeContent/>
            <HomeFooter/>
        </>
    );
}

export default Home;