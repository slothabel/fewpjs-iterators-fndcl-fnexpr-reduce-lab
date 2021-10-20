const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const myReducer = (runningTotal, currentValue) => runningTotal + currentValue

const totalBatteries = batteryBatches.reduce(myReducer, 0)