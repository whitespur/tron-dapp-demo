import React, {Component} from 'react';
import './App.css';


class App extends Component {

    componentDidMount() {
        console.log(111)
    }

    onClick = async () => {
        console.log(window.tronWeb)
        let tronWeb = window.tronWeb;
        const sendTransaction = await tronWeb.trx.sendTransaction("TYNyeyt4vxxeUdaPHKoR6jasx2JEMciZg5", 1000);
        console.group('Unsigned send TRX transaction');
        console.log('- Recipient: TGEJj8eus46QMHPgWQe1FJ2ymBXRm96fn1');
        console.log('- Transaction:\n' + JSON.stringify(sendTransaction, null, 2), '\n');
        console.groupEnd();
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.onClick}>send transaction</button>
                <button onClick={this.onClick}>send transaction</button>
                <button onClick={this.onClick}>send transaction</button>
                <button onClick={this.onClick}>send transaction</button>
                <button onClick={this.onClick}>send transaction</button>
                <button onClick={this.onClick}>send transaction</button>
                <div>
                    <img src='/logo.jpg' className="App-logo" alt="logo"/>
                </div>
            </div>
        );
    }
}

export default App;
