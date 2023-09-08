import { FishList } from './FishList.js'
import { getFish } from './database.js'
const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}
// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".card_parent")


parentHTMLElement.innerHTML = FishList()