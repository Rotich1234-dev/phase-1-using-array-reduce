const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// to calculate the sum of all battery amounts
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBatteries);

