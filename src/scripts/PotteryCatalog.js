const forSale = []

export const toSellOrNotToSell = (piece) => {
    if(piece.cracked === false && piece.weight >= 6){
        piece.price = 40
        forSale.push(piece)
        return piece
    } else if (piece.cracked === false && piece.weight < 6){
        piece.price = 20
        forSale.push(piece)
        return piece
    } return piece
}

export const usePottery = () => {
    const copiedArray = forSale.slice()
    return copiedArray
}

