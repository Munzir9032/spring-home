import React from "react";
import Topbar from "./pages/navbar/Topbar";
import Header from "./pages/header/header"
import Highlights from "./pages/highlights/highlights";
import Item from "./pages/Olympiad/item";
import Register from "./pages/register/register";
import Company from "./pages/forCompany/company";
import Contact from "./pages/contact/contact";
function App() {
    return (
        <div className="App">
            <Topbar />
            <Header />
            <Highlights />
            <Item />
            <Register />
            <Company />
            <Contact />
        </div>
    );
}

export default App;
