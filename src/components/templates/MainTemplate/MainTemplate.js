import Footer from "components/sections/Footer/Footer";
import Header from "components/sections/Header/Header";

const MainTemplate = (props) => {
    return (
        <div>
            <Header logo="Instagram App"/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default MainTemplate;