import React, { useState } from 'react';
import { Button, message, Steps, theme, Input, Form } from 'antd';
import './index.css'

const EndPage = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    console.log("pageCrent:", current);
    const onFinish = (values) => {
        console.log(values);
        if (values?.name == "01102022" || values?.name == "0110" || values?.name == "011022") {
            message.success('Thành Công !');
            setCurrent(current + 1);
        } else {
            message.warning("Quên hay là nhập sai thế !")
        }
    };

    const steps = [
        {
            title: 'First',
            content: <div>
                <div className='mt-[50px]'>
                    <h1 className='text-[20px] text-white'>Hiếu rất vui vì Lan đã đến mục này nhé !! !</h1>
                    <h2 className='text-white'>Phần tiếp theo có sự bảo mật của cá nhân Hiếu và Lan nên cần phải nhập mật mã nhé Lan!</h2>
                    <h1 className=''>Lan nhập ngày mình bắt đầu quen nhé 😄😄</h1>
                    <Form
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Ô sao không nhập!' }]}
                        >
                            <Input placeholder="Eg:'15012003'..." />
                        </Form.Item>
                        <Form.Item>
                            <Button className='bg-blue-500' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>,
        },
        {
            title: 'Second',
            content: <div>
                <video className="h-[350px] w-full rounded-lg" controls>
                    <source src="https://res.cloudinary.com/dwp7umncy/video/upload/v1704686075/8818636650469763071_hp9zie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>,
        },

    ];

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {

        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <div>
            <div className=''>
                <Steps current={current} items={items} />
            </div>
            <div className=' flex justify-center w-[400px] h-[360px]'>
                <div className='w-full' style={contentStyle}>{steps[current].content}</div>
            </div>
            <div style={{ marginTop: 24 }}>

                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    )
}

export default EndPage