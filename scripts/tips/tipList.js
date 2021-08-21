import { getTips } from './TipData.js'
import { Tip } from './Tip.js'

// export const tipList = () => {
//     const contentElement = document.querySelector(".tipList")
//     const tips = getTips()
//     let tipHTML = "";
    
//     // Add to the existing HTML in the content element
//     for (const i of tips) {
//         tipHTML += Tip(i)
//     }
//     contentElement.innerHTML += `${tipHTML}`
// }

export const tipList = () => {
    
    // Get a reference to the <section class="tipList"> element

    const contentElement = document.querySelector(".tipList");
    const allTips = getTips();
    
    // Add to existing HTML in the content element

    let tipHTMLRepresentation = "";
    for (const oneThingFromTips of allTips) {
        tipHTMLRepresentation += Tip(oneThingFromTips);
    }

    contentElement.innerHTML += `${tipHTMLRepresentation}`
}