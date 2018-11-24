import React, {Component} from 'react';
import './App.css';
import * as DiceContract from './contracts/Dice'
import TronWeb from 'tronweb';

const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = '7c3f3b3826eede41c420fe02a41f1fc0ef4465fb1a6af4591f28382fdc81deae';



class App extends Component {

    constructor(props) {
        super(props);
        this.tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            privateKey
        );

        this.tronWeb.setDefaultBlock('latest');

        this.state = {
            address : null,
            balance : null,
            contract : null,
        }
    }

    async componentDidMount() {



        let tronWeb = this.tronWeb;
        this.setState({address : tronWeb.defaultAddress.base58});

    }


    onClick = async () => {
        let tronWeb = this.tronWeb;
        const sendTransaction = await tronWeb.trx.sendTransaction("TYNyeyt4vxxeUdaPHKoR6jasx2JEMciZg5", 1000);
        console.log('- Transaction:\n' + JSON.stringify(sendTransaction, null, 2), '\n');
    };

    refreshBalance = async () => {
        let tronWeb = this.tronWeb;
        this.state.address && (this.setState({balance : await tronWeb.trx.getBalance(this.address)}));
    };

    onCallContract = async () => {
        let tronWeb = this.tronWeb;
        let address = tronWeb.address.fromHex(DiceContract.networks['*'].address);
        console.log(DiceContract.abi, DiceContract.networks['*'].address, address)
        let contract = new tronWeb.contract(DiceContract.abi, address);

        console.log(contract)

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
                    <button onClick={this.onCallContract}>call smart contract</button>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default App;
