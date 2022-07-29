import './style.css'
import Navigo from 'navigo'
import HomePage from './pages/home'
import Detail from './pages/client/detail'
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
    }
})
router.resolve()
