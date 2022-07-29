import ClientFooter from "../../components/Footer/client"
import ClientHeader from "../../components/Header/client"

const Detail = {
    render: () => {
        return (
            /*html*/`
                ${ClientHeader.render()}
                <div>
                    <h1 class="text-lg m-5 font-bold">iPhone 11 64GB I Chính hãng VN/A</h1>
                    <hr>
                    <div class="flex mt-10">
                    <div class="w-[600px] mx-20">
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="w-[300px]" alt="">
                    </div>
                    <div>
                        <label class="text-red-700 pr-4 text-lg">10.790.000 ₫</label><label class="text-gray-400 text-lg">18.000.000
                        ₫</label>
                        <p> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm
                        trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và
                        tinh tế.</p>
                    </div>
                    </div>
                    <div class="flex">
                    <div class="w-[450px] grid grid-cols-5 gap-2 mt-5 mx-10">
                        <div class="border border-red-400 rounded-lg">
                        <img src="./public/images/tinhnag.png" alt="" class="mx-7">
                        <p class="text-xs mx-3">Tính năng nổi bật</p>
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="./public/images/iPhone 11 64GB I Chính hãng VNA.png">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="./public/images/iPhone 11 64GB I Chính hãng VNA.png">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="./public/images/iPhone 11 64GB I Chính hãng VNA.png">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="./public/images/iPhone 11 64GB I Chính hãng VNA.png">
                        </div>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="bg-[#FF3945] border-none text-white p-2 px-10 rounded-md">Mua Ngay</button>
                        <button type="submit" class=" rounded-lg border border-red-400 p-3 ml-10"><img src="./public/images/giohang.png" alt=""></button>
                    </div>
                    </div>
                    <div class="mt-20">
                    <h1 class="ml-20 mt-10 text-lg ">SẢN PHẨM CÙNG LOẠI</h1>
                    <div class="grid grid-cols-5 gap-6 m-10">
                        <div class="border border-gray-200 rounded-lg">
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg"> 
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="./public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                    </div>
                    </div>
                    <div class="bg-[#F2F2F2] mx-10 rounded-lg">
                    <h1 class="text-center text-red-700 font-bold my-3">ĐẶC ĐIỂM NỔI BẬT</h1>
                    <p class="mx-10">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                    <p class="mx-10">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                    <p class="mx-10">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                    <p class="mx-10">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                    </div>
                    <div class="m-10">
                    <p>Mô tả dài</p>
                    </div>
                </div>
				${ClientFooter.render()}
            `
        )
    }
}

export default Detail