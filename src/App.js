import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    async componentDidMount() {
        let tronWeb = window.tronWeb;
        // 3. get balance
        tronWeb.trx.getBalance(tronWeb.defaulAddress).then(balance => {
            console.log({balance});
        }).catch(err => console.error(err));


    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Learn React </a>
                </header>
            </div>
        );
    }
}

export default App;
