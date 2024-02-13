import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { categoryData } from "./assets/dummy-data";

function App() {
    return (
        <>
            <NavBar />
            <SideBar categories={categoryData}></SideBar>
        </>
    );
}

export default App;
