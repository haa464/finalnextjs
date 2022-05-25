import Navbar from "./Navbar";

const Layout = ( { children }) => {
    return ( 
        <div className="content_navbar">
            <Navbar/>
            { children}
        </div>
     );
}
 
export default Layout;