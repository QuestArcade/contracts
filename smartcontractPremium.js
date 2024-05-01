const Web3 = require('web3');
const web3 = new Web3('https://rpc.bttcscan.com');

const premiumMembershipABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "WEEK_DURATION",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isPremiumActive",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address payable", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paymentTimestamp",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "premiumAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "purchasePremium",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];


const weekContractAddress = '0x4b1cfae3f031e130149abe02f7a97Ae1808aA018';
const monthContractAddress = '0x5E6C61a227eF7aECD26D1E532141daF3e3a267B4'; 

const weekContract = new web3.eth.Contract(premiumMembershipABI, weekContractAddress);
const monthContract = new web3.eth.Contract(premiumMembershipABI, monthContractAddress);

async function checkPremiumWeek() {
    try {
        const result = await weekContract.methods.isPremiumActive().call();
        console.log('Premium membership status for 1 week:', result);
        redirectToConnectPage(result);
    } catch (error) {
        console.error('Error checking premium membership status for 1 week:', error);
    }
}


async function checkPremiumMonth() {
    try {
        const result = await monthContract.methods.isPremiumActive().call();
        console.log('Premium membership status for 1 month:', result);
        redirectToConnectPage(result);
    } catch (error) {
        console.error('Error checking premium membership status for 1 month:', error);
    }
}

checkPremiumWeek();
checkPremiumMonth();
