// fishList renders individual fish objects as HTML
// To Do: Import `getFish` from the data module

import { getFish } from "./fishData.js";
import { Fish } from "./Fish.js";

export const fishList = () => {
    
    // Get a reference to the <section class="fishList"> element

    const contentElement = document.querySelector(".fishList");
    const allFishes = getFish();

    
    // Add to existing HTML in the content element

    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of allFishes) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
    }

    contentElement.innerHTML += `${fishHTMLRepresentation}`
}