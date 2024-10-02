// SPDX-License-Identifier: UNLICENSED
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AreaCalculator", function () {
  let areaCalculator: any;

  beforeEach(async function () {
    const AreaCalculator = await ethers.getContractFactory("AreaCalculator");
    areaCalculator = await AreaCalculator.deploy();
    await areaCalculator.waitForDeployment();
  });

  describe("calculateTriangleArea", function () {
    it("should return the correct area of a triangle", async function () {
      const base = 10;
      const height = 5;
      const expectedArea = (base * height) / 2;

      const area = await areaCalculator.calculateTriangleArea(base, height);
      expect(area).to.equal(expectedArea);
    });

    it("should return 0 for triangle with base or height of 0", async function () {
      const area1 = await areaCalculator.calculateTriangleArea(0, 5);
      const area2 = await areaCalculator.calculateTriangleArea(10, 0);
      expect(area1).to.equal(0);
      expect(area2).to.equal(0);
    });
  });

  describe("calculateRectangleArea", function () {
    it("should return the correct area of a rectangle", async function () {
      const length = 10;
      const width = 5;
      const expectedArea = length * width;

      const area = await areaCalculator.calculateRectangleArea(length, width);
      expect(area).to.equal(expectedArea);
    });

    it("should return 0 for rectangle with length or width of 0", async function () {
      const area1 = await areaCalculator.calculateRectangleArea(0, 5);
      const area2 = await areaCalculator.calculateRectangleArea(10, 0);
      expect(area1).to.equal(0);
      expect(area2).to.equal(0);
    });
  });

  describe("calculateSquareArea", function () {
    it("should return the correct area of a square", async function () {
      const side = 4;
      const expectedArea = side * side;

      const area = await areaCalculator.calculateSquareArea(side);
      expect(area).to.equal(expectedArea);
    });

    it("should return 0 for square with side of 0", async function () {
      const area = await areaCalculator.calculateSquareArea(0);
      expect(area).to.equal(0);
    });
  });
});
