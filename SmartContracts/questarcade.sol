// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BTTTransactionChecker {
    address public constant BTTC_ADDRESS = 0xEc5487A41c1128401Be766e44A5E88fD3358cc6c;

    event BTTReceived(address indexed sender, uint256 amount);

    constructor() {
        // Additional initialization can be done here if needed
    }

    // Function to check if BTT has been received by the contract address
    function checkBTTReceived() external payable returns (bool) {
        if (msg.value > 0 && msg.sender == BTTC_ADDRESS) {
            emit BTTReceived(msg.sender, msg.value);
            return true;
        }
        return false;
    }
}
