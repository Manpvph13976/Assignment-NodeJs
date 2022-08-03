import { getAll } from "../../api/product"
import AdminHeader from "../../components/Header/admin"
import Sidebar from "../../components/Sidebar/admin"
import Product from "../../model/product"

const AdminPage = {
    render: async () => {
        const res = await getAll()
        const data: Product[] = res.data
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div> 
            <div class="grow px-4">
                <div class="flex justify-between">
                    <div class="font-bold">
                    Sản phẩm chung
                    </div>
                    <a href="/admin/add">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <div class="">
                    <label class="font-bold">Bộ lọc:</label>
                    <div>
                        Danh mục sản phẩm:
                        <select class="border">
                            <option value="all" class="target" data-id="all">Tất cả</option>
                            <option value="iphone" class="target" data-id="iphone">Iphone</option>
                            <option value="samsung" class="target" data-id="samsung"> Samsung</option>
                            <option value="xiaomi" class="target" data-id="xiaomi">Xiaomi</option>
                            <option value="oppo" class="target" data-id="oppo">Oppo</option>
                        </select>
                    </div>
                </div>
                <table class="table-auto border mt-8">     
                    <thead>
                    <tr>
                        <th class="w-[5%] border">#</th>
                        <th class="w-[20%] border">Tên sản phẩm</th>
                        <th class="w-[10%] border">Giá</th>
                        <th class="w-[10%] border">Giá sale</th>
                        <th class="w-[15%] border">Ảnh</th>
                        <th class="w-[30%] border">Mô tả</th>
                        <th class="w-[5%] border text-center">Xóa</th>
                        <th class="w-[5%] border">Cập nhật</th>
                    </tr>
                    </thead>
                    <tbody>
                        ${data.map((item, index) => /*html*/`
                        <tr>
                            <td class="border text-center">${index + 1}</td>
                            <td class="border">${item.name}</td>
                            <td class="border">${item.originalPrice}</td>
                            <td class="border">${item.saleOffPrice}</td>
                            <td class="border"><img src="${item.image}"/></td>
                            <td class="border">${item.description}</td>
                            <td class="border">
                            <button class="btn btn-remove ml-4"><svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0.25C5.58579 0.25 5.25 0.585786 5.25 1V1.75H1C0.585786 1.75 0.25 2.08579 0.25 2.5C0.25 2.91421 0.585786 3.25 1 3.25H15C15.4142 3.25 15.75 2.91421 15.75 2.5C15.75 2.08579 15.4142 1.75 15 1.75H10.75V1C10.75 0.585786 10.4142 0.25 10 0.25H6Z" fill="black"/>
                            <path d="M6 8.64999C6.41421 8.64999 6.75 8.98578 6.75 9.39999L6.75 16.4C6.75 16.8142 6.41421 17.15 6 17.15C5.58579 17.15 5.25 16.8142 5.25 16.4L5.25 9.39999C5.25 8.98578 5.58579 8.64999 6 8.64999Z" fill="black"/>
                            <path d="M10.75 9.39999C10.75 8.98578 10.4142 8.64999 10 8.64999C9.58579 8.64999 9.25 8.98578 9.25 9.39999V16.4C9.25 16.8142 9.58579 17.15 10 17.15C10.4142 17.15 10.75 16.8142 10.75 16.4V9.39999Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99142 5.91718C2.03363 5.53735 2.35468 5.25 2.73684 5.25H13.2632C13.6453 5.25 13.9664 5.53735 14.0086 5.91718L14.2087 7.71852C14.5715 10.9838 14.5715 14.2793 14.2087 17.5446L14.189 17.722C14.045 19.0181 13.0404 20.0517 11.7489 20.2325C9.26176 20.5807 6.73823 20.5807 4.25108 20.2325C2.95954 20.0517 1.955 19.0181 1.81098 17.722L1.79128 17.5446C1.42846 14.2793 1.42846 10.9838 1.79128 7.71852L1.99142 5.91718ZM3.40812 6.75L3.2821 7.88417C2.93152 11.0394 2.93152 14.2238 3.2821 17.379L3.3018 17.5563C3.37011 18.171 3.84652 18.6612 4.45905 18.747C6.80822 19.0758 9.19177 19.0758 11.5409 18.747C12.1535 18.6612 12.6299 18.171 12.6982 17.5563L12.7179 17.379C13.0685 14.2238 13.0685 11.0394 12.7179 7.88417L12.5919 6.75H3.40812Z" fill="black"/>
                            </svg></button>
                            </td>
                            <td class="border">
                                <a href="/admin/edit/${item.id}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg></a>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>         
            </div>
        </div>
        `
    }

}

export default AdminPage