import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-8 flex justify-center">
                <img src="../../uploads/JanPerfume.png" alt="JanPerfume" className="rounded-lg shadow-lg w-1/4" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Giới thiệu về Jan Perfume</h1>
            <ul className="list-disc pl-5">
                <li>JanPerfume là địa chỉ tin cậy dành cho những người yêu nước hoa cao cấp. Chúng tôi tự hào mang đến cho khách hàng một sự lựa chọn đa dạng về hương thơm để phù hợp với mọi phong cách và dịp đặc biệt.</li>
                <li>Được thành lập từ năm 10-2023, JanPerfume đã cung cấp cho khách hàng những hương thơm sang trọng và lưu lại ấn tượng lâu dài. Đội ngũ của chúng tôi cam kết hỗ trợ bạn tìm kiếm hương thơm hoàn hảo để thể hiện cá tính của mình và khiến bạn cảm thấy tự tin và xinh đẹp.</li>
                <li>Tại JanPerfume, chúng tôi tin rằng nước hoa không chỉ là một hương thơm - đó là cá tính và phong cách sống. Đó là lý do tại sao chúng tôi xây dựng cẩn thận bộ sưu tập của mình để bao gồm một loạt các loại nước hoa và cologne từ các thương hiệu hàng đầu trên toàn thế giới.</li>
                <li>Dù bạn đang tìm kiếm một hương thơm đặc trưng hoặc muốn khám phá những mùi hương mới, JanPerfume luôn có sản phẩm phù hợp. Hãy ghé thăm chúng tôi ngay hôm nay và khám phá thế giới của nước hoa cao cấp.</li>
            </ul>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Thông tin liên hệ</h2>
                <ul className="list-disc pl-5">
                    <li className="hover:text-blue-500 transition duration-300 ease-in-out"> 
                        <strong>Tên cửa hàng:</strong> JanPerfume
                    </li>
                    <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                        <strong>Địa chỉ:</strong> 20 Đặng Thuỳ Trâm
                    </li>
                    <li className="hover:text-blue-500 transition duration-300 ease-in-out">
                        <strong>Email:</strong> nhatthienlephan@gmail.com
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default About;
