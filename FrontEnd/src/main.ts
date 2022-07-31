import './style.css'
import Navigo from 'navigo'
import HomePage from './pages/home'
import Detail from './pages/client/detail'
import Signup from './pages/client/signup'
import Signin from './pages/client/signin'
import AdminPage from './pages/admin'
const router = new Navigo('/', {linksSelector: "a"})

const print = async (component)=>{
    document.getElementById('app').innerHTML = await component.render()
}
router.on({
    "/":()=>{
        print(HomePage)
    },
    "/detail":()=>{
        print(Detail)
    },
    "/signup":()=>{
        print(Signup)
    },
    "/signin":()=>{
        print(Signin)
    },
    "/admin":()=>{
        print(AdminPage)
    }
})
router.resolve()
