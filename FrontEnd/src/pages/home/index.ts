import ClientFooter from "../../components/Footer/client"
import ClientHeader from "../../components/Header/client"
import ClientSidebar from "../../components/Sidebar/client"


const HomePage = {
	render: () => {
		return (
            /*html*/`
                ${ClientHeader.render()}
				${ClientSidebar.render()}
				${ClientFooter.render()}
            `
		)
	}
}

export default HomePage