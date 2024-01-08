import React, { useEffect } from 'react';
import './index.css';
import { Button } from 'antd';
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
                    <p id="head">Happy Birthday Gấu Trúc!</p>
                    <p>Chúc Lan Có một ngày sinh nhật thật vui vẻ nha. Chúc Lan tuổi mới ngày càng xinh đẹp hơn, hạnh phúc bên gia đình và những người yêu thương nha 🎉🎉</p>
                    <p>Truong Minh Hieu</p>

                    <div className='text-center mt-[10px]'>
                        <div class="inline-flex">
                            <Link to={`/hello`}>
                                <button class="bg-[#e6f0e6] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                            </Link>
                            <Link to={`/end`}>
                                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
