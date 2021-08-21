// Fish function that renders individual fish objects as HTML 

export const Location = (locObj) => {
    return `<article class="location-card">
                <ul>
                    <li class="location-details">Country${locObj.country}</li>
                    <li class="location-details">Climate${locObj.climate}</li>
                </ul>

            </article>`
}