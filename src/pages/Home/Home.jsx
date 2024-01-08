import React from 'react'
import './home.css'
import { useForm } from 'react-hook-form';
import { message, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values);
        if (values?.name == "05012003" || values?.name == "0501" || values?.name == "050103") {
            message.success('Thành Công !');
            navigate("/hello")
        } else {
            message.warning("Có phải ngày sinh nhật của bạn mà !")
        }
    };


    return (
        <div>
            <div class="blurred-box">
                <div class="user-login-box">
                    <span class="user-icon"></span>
                    <div class="user-name">Ngày Sinh Nhật Bạn</div>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Ô sao không nhập!' }]}
                        >
                            <Input placeholder="Đừng nhập sai nha !" />
                        </Form.Item>
                    </Form>
                </div>

            </div>

        </div>
    )
}

export default Home