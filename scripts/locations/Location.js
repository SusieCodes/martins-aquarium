// Location function that renders individual location objects as HTML 

export const Location = (locObj) => {
    return `<article class="location-card">

    <div><img class="location-image" src="images/${locObj.image}" />
    </div>
    
    <h3 class="location-name">${locObj.name}</h3>
    
    <ul>
        <li class="location-details">Country: ${locObj.country}</li>
        <li class="location-details">Climate: ${locObj.climate}</li>
    </ul>
    
    </article>`
}
