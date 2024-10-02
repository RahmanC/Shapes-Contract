// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;



contract AreaCalculator {
    function calculateTriangleArea(uint256 base, uint256 height) public pure returns (uint256) {
        return (base * height) / 2;
    }

    function calculateRectangleArea(uint256 length, uint256 width) public pure returns (uint256) {
        return length * width;
    }

    function calculateSquareArea(uint256 side) public pure returns (uint256) {
        return side * side;
    }
}