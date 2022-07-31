import AdminHeader from "../../components/Header/admin"
import Sidebar from "../../components/Sidebar/admin"

const AddProductPage = {
    render:() => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h3 class="font-bold">Thêm mới sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                    </label>

                    <div class="mt-4">Thêm ảnh</div>
                    <img id="preview-image" />
                    </div>
                    <label for="">Mô tả ngắn</label>
                    <textarea class="w-full border" id="shortDescription" ></textarea>
                    <div class="error" id="shortDescriptionErr"></div>
                </div>
                <div class="col-span-2">
                    <div>Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                        <label for="">Tên sản phẩm:</label>
                        <input id="name" type="text" placeholder="Tên sản phẩm"  class="w-full border rounded-sm h-10">
                        <div class="error" id="nameErr"></div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="flex flex-col">
                            <label for="">Giá gốc:</label>
                            <input id="originalPrice" type="text" placeholder="Giá gốc"class="w-full border rounded-sm h-10">
                            <div class="error" id="originalPriceErr"></div>
                        </div>
                        <div class="flex flex-col">
                            <label for="">Giá khuyến mãi:</label>
                            <input type="text" id="saleOffPrice" placeholder="Giá khuyến mãi"  class="w-full border rounded-sm h-10">
                            <div class="error" id="saleOffPriceErr"></div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Danh mục:</label>
                        <select name="" id="category" class="w-full border rounded-sm h-10">
                            <option value="iphone">Iphone</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="oppo">Oppo</option>
                        </select>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Đặc điểm nổi bật</label>
                        <textarea class="w-full border" id="feature" ></textarea>
                        <div class="error" id="featureErr"></div>
                    </div>
                    <div class="flex flex-col mt-4">
                        <label for="">Mô tả dài</label>
                        <textarea class="w-full border" id="description" ></textarea>
                        <div class="error" id="descriptionErr"></div>
                    </div>
                    <button class="border rounded-md bg-blue-400 mt-3 text-white" id="add-product-btn" type="submit">Thêm mới</button>
                </div>
                
                </div>
            </div>
        </div>
        `
    }
}


export default AddProductPage