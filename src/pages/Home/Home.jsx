import React from 'react'
import './home.css'
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({});

    const submitform = async (values) => {
        if (values?.name == "05012003" || values?.name == "0501" || values?.name == "050103") {
            message.success('Thành Công !');
            navigate("/welcom")
        } else {
            message.warning("Ngày sinh nhật của bạn mà !")
        }
    }
    return (
        <div>
            <div class="blurred-box">
                <div class="user-login-box">
                    <span class="user-icon"></span>
                    <div class="user-name">Ngày Sinh Nhật Bạn</div>
                    <form action="" onSubmit={handleSubmit(submitform)}>
                        <input class="user-password" {...register("name")} type="text" />
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Home