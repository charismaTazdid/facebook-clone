import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './Home.css'

const Home = () => {
    return (
        <div className="app">
            <Header />

            <div className="app-body">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
};

export default Home;