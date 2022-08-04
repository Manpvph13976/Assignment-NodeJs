import './style.css'
import Navigo from 'navigo'
import HomePage from './pages/home'
import Detail from './pages/client/detail'
import Signup from './pages/client/signup'
import Signin from './pages/client/signin'
import AdminPage from './pages/admin'
import AddProductPage from './pages/admin/add'
import EditProductPage from './pages/admin/edit'
import CategoryPage from './pages/admin/category'
import AddCategoryPage from './pages/admin/category-add'
import EditCategoryPage from './pages/admin/category-edit'
const router = new Navigo('/', { linksSelector: "a" })

const print = async (component, id) => {
    document.getElementById('app').innerHTML = await component.render(id)
    if (component.afterRender) {
        component.afterRender(id)
    }
}
router.on({
    "/": () => {
        print(HomePage)
    },
    "/detail/:id": (data) => {
        const id = data.data.id
        print(Detail,id)
    },
    "/signup": () => {
        print(Signup)
    },
    "/signin": () => {
        print(Signin)
    },
    "/admin": () => {
        print(AdminPage)
    },
    "/admin/edit/:id": (data) => {
        const id = data.data.id
        print(EditProductPage, id)
    },
    "/admin/add": () => {
        print(AddProductPage)
    },
    "/category": () => {
        print(CategoryPage)
    },
    "/category/edit/:id": (data) => {
        const id = data.data.id
        print(EditCategoryPage, id)
    },
    "/category/add": () => {
        print(AddCategoryPage)
    }
})
router.resolve()
