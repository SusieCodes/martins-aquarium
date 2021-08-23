// fishList renders individual fish objects as HTML
// To Do: Import `getFish` from the data module

import { getMostHolyFish, getSoldierFish, getUnworthyFish } from "./fishData2.js";
import { Fish } from "./fish2.js";

export const fishList = () => {
    const holyFish = getMostHolyFish(); //not holyFishes
    addFishToDom(holyFish);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
    const unworthyFish = getUnworthyFish();
    addFishToDom(unworthyFish);

}

const addFishToDom = (arrayOfFish) => {
    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of arrayOfFish) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }
    contentElement.innerHTML += `${fishHTMLRepresentation}` 
    // contentElement.innerHTML += fishHTMLRepresentation - this will also work  
}
