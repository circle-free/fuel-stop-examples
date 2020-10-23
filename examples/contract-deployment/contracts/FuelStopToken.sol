// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.7.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract FuelStopToken is ERC20 {
  // Create our own ERC20 token with name "FuelStopToken" and symbol "FS"
  constructor() public ERC20("FuelStopToken", "FS") {}
}
