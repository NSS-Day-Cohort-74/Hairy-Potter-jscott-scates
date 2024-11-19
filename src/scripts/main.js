// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 1.5, 8)
let platter = makePottery('Platter', 8, 16)
let vase = makePottery('Vase', 1, 18)
let piggyBank = makePottery('Piggy Bank', 9, 20)
let plate = makePottery('Plate', .5, 1)

// Fire each piece of pottery in the kiln
debugger
mug = firePottery(mug, 3000)
platter = firePottery(platter, 2200)
vase = firePottery(vase, 2000)
piggyBank = firePottery(piggyBank, 2200)
plate = firePottery(plate, 2500)

//console.log(mug)
//console.log(piggyBank)
//console.log(plate)

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
platter = toSellOrNotToSell(platter)
vase = toSellOrNotToSell(vase)
piggyBank = toSellOrNotToSell(piggyBank)
plate = toSellOrNotToSell(plate)

//console.log(usePottery())

// Invoke the component function that renders the HTML list
 const potteryHTML = PotteryList(usePottery())
 let potteryInnerHTML = document.getElementsByClassName("potteryList")[0] //used index of [0] to access the element due to getElementsByClassName syntax. It needs to know what to target. 
potteryInnerHTML.innerHTML = potteryHTML

 /*if (potteryInnerHTML){
    potteryInnerHTML = potteryHTML;
 }else {
    console.error('Could not find element with the class "potteryList')
 }*/
