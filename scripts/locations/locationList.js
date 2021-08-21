
import { getLocation } from "./locationData.js";
import { Location } from "./Location.js";

export const locationList = () => {
    
    // Get a reference to the <section class="locationList"> element

    const contentElement = document.querySelector(".locationList");
    const allLocation = getLocation();

    
    // Add to existing HTML in the content element

    let locationHTMLRepresentation = "";
    for (const oneThingFromLocations of allLocation) {
        locationHTMLRepresentation += Location(oneThingFromLocations);
    }

    contentElement.innerHTML += `${locationHTMLRepresentation}`
}