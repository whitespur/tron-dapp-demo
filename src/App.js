import React, {Component} from 'react';
import './App.css';
import * as DiceContract from './contracts/Dice'


class App extends Component {

    constructor(props) {
        super(props);

        window.tronWeb.setDefaultBlock('latest');

        this.state = {
            address : null,
            balance : null,
            contract : null,
        }
    }

    async componentDidMount() {



        let tronWeb = window.tronWeb;
        this.setState({address : tronWeb.defaultAddress.base58});

    }


    onClick = async () => {
        let tronWeb = window.tronWeb;
        const sendTransaction = await tronWeb.trx.sendTransaction("TYNyeyt4vxxeUdaPHKoR6jasx2JEMciZg5", 1000);
        console.log('- Transaction:\n' + JSON.stringify(sendTransaction, null, 2), '\n');
    };

    refreshBalance = async () => {
        let tronWeb = window.tronWeb;
        this.state.address && (this.setState({balance : await tronWeb.trx.getBalance(this.address)}));
    };

    async onCallContract () {
        let tronWeb = window.tronWeb;
        let address = tronWeb.address.fromHex(DiceContract.networks['*'].address);
        console.log(DiceContract.abi, DiceContract.networks['*'].address, address)
        let contract = tronWeb.contract(DiceContract.abi, address);
        console.log(contract)

        // 1. register event listener
        contract && contract.Log().watch((err, event) => {
            if(err)
                return console.error('Error with "Message" event:', err);

            console.group('New event received');
            console.log('- Contract Address:', event.contract);
            console.log('- Event Name:', event.name);
            console.log('- Transaction:', event.transaction);
            console.log('- Block number:', event.block);
            console.log('- Result:', event.result, '\n');
            console.groupEnd();
        });

        contract && contract.LogA().watch((err, event) => {
            if(err)
                return console.error('Error with "Message" event:', err);

            console.group('New event received');
            console.log('- Contract Address:', event.contract);
            console.log('- Event Name:', event.name);
            console.log('- Transaction:', event.transaction);
            console.log('- Block number:', event.block);
            console.log('- Result:', event.result, '\n');
            console.groupEnd();
        });

        contract && contract.RollResult().watch((err, event) => {
            if(err)
                return console.error('Error with "Message" event:', err);

            console.group('New event received');
            console.log('- Contract Address:', event.contract);
            console.log('- Event Name:', event.name);
            console.log('- Transaction:', event.transaction);
            console.log('- Block number:', event.block);
            console.log('- Result:', event.result, '\n');
            console.groupEnd();
        });



        // 2. send transaction
        contract.roll().send().then(output => {
            console.group('Contract "getLast" result');
            console.log('- Output:', output, '\n');
            console.groupEnd();
        });
    };

    render() {
        return (
            <div className="App">
                <div>
                    <p>current address</p>
                    <p>{this.state.address}</p>
                    <hr></hr>
                </div>
                    <p>current balance</p>
                    <p>{this.state.balance}</p>
                    <button onClick={this.refreshBalance}>Refresh balance</button>
                    <hr></hr>
                <div>
                    <button onClick={this.onClick}>send transaction</button>
                    <hr></hr>
                </div>
                <div>
                    <button onClick={() => this.onCallContract()}>call smart contract</button>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default App;
