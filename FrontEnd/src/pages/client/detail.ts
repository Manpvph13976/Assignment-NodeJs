import { get } from "../../api/product"
import ClientFooter from "../../components/Footer/client"
import ClientHeader from "../../components/Header/client"
import Product from "../../model/product"

const Detail = {
    render: async (id) => {
        const data = await get(id)
        const product: Product[] = data.data
        return (
            /*html*/`
                ${ClientHeader.render()}
                <div>
                    <h1 class="text-lg m-5 font-bold">${product.name}</h1>
                    <hr>
                    <div class="flex mt-10">
                    <div class="w-[600px] mx-20">
                        <img src="${product.image}" class="w-[300px]" alt="">
                    </div>
                    <div>
                        <label class="text-red-700 pr-4 text-lg">${product.saleOffPrice}₫</label><label class="text-gray-400 text-lg">${product.originalPrice}
                        ₫</label>
                        <p> Mô tả ngắn: ${product.shortDescription}</p>
                    </div>
                    </div>
                    <div class="flex">
                    <div class="w-[450px] grid grid-cols-5 gap-2 mt-5 mx-10">
                        <div class="border border-red-400 rounded-lg">
                        <img src="../public/images/tinhnag.png" alt="" class="mx-7">
                        <p class="text-xs mx-3">Tính năng nổi bật</p>
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                        <div class="border border-gray-300 rounded-lg">
                        <img class="w-2/3 mx-3" src="${product.image}">
                        </div>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="bg-[#FF3945] border-none text-white p-2 px-10 rounded-md">Mua Ngay</button>
                        <button type="submit" class=" rounded-lg border border-red-400 p-3 ml-10"><img src="../public/images/giohang.png" alt=""></button>
                    </div>
                    </div>
                    <div class="mt-20">
                    <h1 class="ml-20 mt-10 text-lg ">SẢN PHẨM CÙNG LOẠI</h1>
                    <div class="grid grid-cols-5 gap-6 m-10">
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg"> 
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                        <div class="border border-gray-200 rounded-lg">
                        <img src="../public/images/iPhone 11 64GB I Chính hãng VNA.png" class="mb-2" alt="">
                        <p class="mb-2">iPhone 11 64GB I Chính hãng VNA</p>
                        <label class="text-red-700 pr-4">10.790.000 ₫</label><label class="text-gray-400">18.000.000 ₫</label>
                        </div>
                    </div>
                    </div>
                    <div class="bg-[#F2F2F2] mx-10 rounded-lg">
                    <h1 class="text-center text-red-700 font-bold my-3">ĐẶC ĐIỂM NỔI BẬT</h1>
                    <p class="mx-10">${product.feature}</p>
                    </div>
                    <div class="m-10">
                    <p>${product.description}</p>
                    </div>
                </div>
				${ClientFooter.render()}
            `
        )
    }
}

export default Detail