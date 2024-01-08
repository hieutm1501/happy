import React, { useEffect } from 'react';
import Odoo from '../../api';

const Test = () => {
    useEffect(() => {
        // Khởi tạo đối tượng Odoo
        const odoo = new Odoo({
            host: 'https://gerp-zalo-v12.phanmemdoanhnghiep.net',
            database: 'gerp-zalo-v12',
            username: 'thanhhai41280@gmail.com',
            password: '123',
        });

        // Thực hiện đăng nhập khi component được mount
        odoo.authenticate((error, result) => {
            if (error) {
                console.error('Authentication error:', error);
            } else {
                console.log('Authentication successful:', result);

                // Gọi các phương thức API khác ở đây
                // Ví dụ: Tìm kiếm dữ liệu trong model 'res.partner'
                odoo.category_list('your_model_name', { domain: [], offset: 0, limit: 10 }, (categoryError, categoryResult) => {
                    if (categoryError) {
                        console.error('Category list error:', categoryError);
                    } else {
                        console.log('Category list result:', categoryResult);
                    }
                });
            }
        });

        // Hãy nhớ xóa đối tượng Odoo khi component unmount (nếu cần)
        return () => {
            // Xử lý việc giải phóng tài nguyên, đóng kết nối, vv. (nếu cần)
        };
    }, []); // useEffect sẽ chỉ chạy một lần khi component được mount

    return (
        <div>
            {/* Nội dung của component */}
            test
        </div>
    );
};

export default Test;
