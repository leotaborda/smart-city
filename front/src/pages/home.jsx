import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Content from "./homeContent";

const Home = () => {
    return (
        <>
            <Header />
            <div className="w-full flex flex-col">
                <div className="w-full bg-[#E4E4E5] flex justify-center p-4 pt-[56px]">
                </div>
                <div className="grid grid-cols-[auto,1fr] w-full">
                    <Navbar />
                    <div className="p-10 ml-0 custom:ml-[11%]">
                        <Content />
                    </div>
                </div> 
            </div>
            <Footer/>
        </>
    );
};


export default Home;