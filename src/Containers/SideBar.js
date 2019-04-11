import React from 'react';
import Search from './Search';
import Categories from './Categories';

export const SideBar = () => {
    return (
        <div className="side-menu">
            <Search />
            <Categories />
        </div>
    );
};