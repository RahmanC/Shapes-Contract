import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AreaCalculatorModule = buildModule("AreaCalculatorModule", (m) => {
  const area = m.contract("AreaCalculator");

  return { area };
});

export default AreaCalculatorModule;
