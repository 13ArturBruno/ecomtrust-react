import React from 'react';
import { SideBar } from './SideBar';
import BasketCart from './BasketCart';
import ToolBar from './ToolBar';
import '../main.css'


const Layout = ({ children }) => {
    return (
        <div className="container">
            <ToolBar />
            <div className="view-container">
                <div className="body-container">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-6">
                        {children}
                    </div>
                    <div className="col-md-2">
                        <BasketCart />
                    </div>



                </div>
            </div>
        </div>
    )
};

export default Layout;