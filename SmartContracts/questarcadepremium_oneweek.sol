// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PremiumMembership {
    address payable public owner;
    address public premiumAddress;
    uint256 public paymentTimestamp;
    uint256 public constant WEEK_DURATION = 1 weeks;

    constructor() {
        owner = payable(msg.sender);
        premiumAddress = 0xEc5487A41c1128401Be766e44A5E88fD3358cc6c;
    }

    // Function to purchase premium membership
    function purchasePremium() external payable {
        require(msg.value > 0, "Invalid payment amount");
        paymentTimestamp = block.timestamp;
        owner.transfer(msg.value);
    }

    // Function to check if premium membership is active for 1 week
    function isPremiumActive() external view returns (bool) {
        return (block.timestamp <= paymentTimestamp + WEEK_DURATION);
    }
}
