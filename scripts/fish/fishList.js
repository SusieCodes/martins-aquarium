// fishList renders individual fish objects as HTML

import { getMostHolyFish, getSoldierFish, getUnworthyFish } from "./fishData.js";
import { Fish } from "./Fish.js";

export const fishList = () => {
    const holyFish = getMostHolyFish();
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
