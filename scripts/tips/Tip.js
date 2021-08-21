// tip function that renders individual tip objects as HTML 

export const Tip = (tipObj) => {
    return `<article class="tip-card">
    
    <h3 class="tip-name">${tipObj.topic}</h3>
    <p> ${tipObj.mytip} </p>
    
    </article>`
}