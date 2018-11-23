import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var waitForGlobal = () =>{
    // 1. check variable
    if (window.tronWeb) {
        let tronWeb = window.tronWeb;
        ReactDOM.render(<App />, document.getElementById('root'));
        return;
        // // 2. check node connection
        // const nodes = await tronWeb.isConnected();
        // const connected = !Object.entries(nodes).map(([name, connected]) => {
        //     if (!connected) {
        //         console.error(`Error: ${name} is not connected`);
        //     }
        //     return connected;
        // }).includes(false);
        // if (connected){
        //     ReactDOM.render(<App />, document.getElementById('root'));
        // } else {
        //     console.error(`Error: TRON node is not connected`);
        //     console.error('wait for tronLink');
        //     setTimeout(async () => {
        //         await waitForGlobal();
        //     }, 100);
        // }

    } else {
        console.error('wait for tronLink');
        setTimeout(() => {
            waitForGlobal();
        }, 100);
    }
};

waitForGlobal();

