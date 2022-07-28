import './style.css'
import Navigo from 'navigo'
import HomePage from './pages/home'
const router = new Navigo('/', {linksSelector: "a"})

const print = async (component)=>{
    document.getElementById('app').innerHTML = await component.render()
}
router.on({
    "/":()=>{
        print(HomePage)
    }
})
router.resolve()
