import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Welcom = () => {
    return (
        <div>
            <div class="birthdayCard">
                <div class="cardFront">
                    <div class="front-text">
                        <h3 class="happy">HAPPY</h3>
                        <h2 class="bday">BIRTHDAY</h2>
                        <h3 class="toyou">Gấu Trúc!</h3>
                    </div>
                    <div class="wrap-deco">
                        <div class="decorations"></div>
                        <div class="decorationsTwo"></div>
                    </div>
                    <div class="wrap-decoTwo">
                        <div class="decorations"></div>
                        <div class="decorationsThree"></div>
                    </div>
                    <div class="plate">
                        <div class="cake"></div>
                        <div class="flame"></div>
                    </div>
                </div>

                <div class="cardInside">
                    <div class="inside-text">
                        <h3 class="happy">HAPPY</h3>
                        <h2 class="bday">BIRTHDAY</h2>
                        <h3 class="toyou">Gấu Trúc</h3>
                    </div>
                    <div class="wishes">
                        <p>Xin Chào gấu trúc,</p>
                        <p>Happy birthday!! Chúc Lan có một sinh nhật thật vui vẻ và hạnh phúc.Tuổi mới chúc Lan có thật nhiều niềm vui và thuận gió hoà mưa công việc của mình nhé.Một lần nữa chúc Lan sinh nhật vui vẻ nha.</p>
                        <p class="name">Hiếu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcom