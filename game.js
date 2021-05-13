var health = 100

function slap() {
    health = (health- 1)
    console.log(health) //This works in console.
    return health
    // update() 
}
function update() {
    let template = ''
    template +=
    const healthElem = document.getElementById("health")
    healthElem?.innerHTML = `
        <span>Health:<span id="health">${healthElem}</span></span>
    `
}