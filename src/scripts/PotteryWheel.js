let potteryKey = 1
debugger
const potteryToMake = []
export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: potteryKey ++
    }
    potteryToMake.push(potteryObject)
    return potteryToMake
}