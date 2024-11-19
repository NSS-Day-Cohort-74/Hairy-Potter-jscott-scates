let potteryKey = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const potteryObject = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: potteryKey ++
    }
    return potteryObject
}