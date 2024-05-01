function sendBTTmonth() {
    if (typeof window.ethereum === 'undefined') {
        alert('MetaMask is not installed. Please install MetaMask to proceed.');
        return;
    }
    
    ethereum.request({ method: 'eth_requestAccounts' })
    .then(() => {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: ethereum.selectedAddress,
                to: '0xEc5487A41c1128401Be766e44A5E88fD3358cc6c',
                value: '1200000000000000000', 
                chainId: 1000, 
                gas: '0x30D40', 
            }]
        })
        .then((txHash) => {
            alert('Transaction sent! Transaction hash: ' + txHash);
        })
        .catch((error) => {
            alert('Error sending transaction: ' + error.message);
        });
    })
    .catch((error) => {
        alert('Error connecting to MetaMask: ' + error.message);
    });
}

document.getElementById('premiumModeMonth').addEventListener('click', sendBTTmonth);
