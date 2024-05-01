const web3 = new Web3('https://rpc.bttcscan.com');

if (web3.isConnected()) {
    console.log('Web3 is connected to BTTC blockchain');
} else {
    console.error('Web3 failed to connect to BTTC blockchain');
}

const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BTTReceived","type":"event"},{"inputs":[],"name":"BTTC_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkBTTReceived","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"}];

const contractAddress = '0xcf690ed00017ddb6fad794ac32fc1b9eabfbe9a3';
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function checkPremiumMembership(userAddress) {
    try {
        const isPremium = await contract.methods.checkBTTReceived().call({ from: userAddress });
        return isPremium;
    } catch (error) {
        console.error('Error checking premium membership:', error);
        return false;
    }
}

async function getUserAddress() {
    try {
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.error('Error getting user address:', error);
        return null;
    }
}

getUserAddress()
    .then(userAddress => {
        if (userAddress) {
            checkPremiumMembership(userAddress)
                .then(isPremium => {
                    if (isPremium) {
                        console.log('User is a premium member');
                    } else {
                        console.log('User is not a premium member');
                    }
                });
        } else {
            console.error('User address not found');
        }
    });
