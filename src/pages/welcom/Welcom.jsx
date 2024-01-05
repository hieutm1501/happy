import React, { useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Welcome = () => {


    return (
        <div className='mt-[30px]'>
            <div class="card">
                <div class="back"></div>
                <div class="front">
                    <div class="imgset">
                        <img width="100%" src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png" />
                    </div>
                </div>
                <div class="text-container">
                    <p id="head">Happy Birthday!</p>
                    <h5>From Ashish to You</h5>
                    <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
                    <p>Hope your day goes great!</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
