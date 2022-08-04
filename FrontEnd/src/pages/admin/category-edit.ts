import { get, update } from "../../api/category";
import AdminHeader from "../../components/Header/admin";
import Sidebar from "../../components/Sidebar/admin";
import Category from "../../model/category";

const EditCategoryPage = {
    render: async (id) => {
        const category = await get(id);
        const categorys: Category[] = category.data
        console.log(category);

        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow">
                <h3 class="font-bold text-2xl">Cập nhật sản phẩm</h3>
                <div class="col-span-2">
                    <div class="flex flex-col mt-4">
                        <label for="">Tên sản phẩm:</label>
                        <input id="name" type="text" placeholder="Tên sản phẩm" value="${categorys.category.name}" class="w-full border rounded-sm h-10">
                    </div>
                    <button class="border rounded-md bg-blue-400 mt-3 text-white" id="edit-category-btn">Cập nhật</button>
                </div>
                
                </div>
            </div>
        </div>
        `
    },
    afterRender: async (id) => {
        const editProductBtn = document.querySelector('#edit-category-btn')
        editProductBtn?.addEventListener('click', async () => {
            const category = {
                id: id,
                name: document.querySelector('#name')?.value
            }
            try {
                const data = await update(category)
                alert('Cập nhật thành công')
                location.href = "/category"
            } catch (err) {
                console.log(err)
            }
        })
    }
}

export default EditCategoryPage