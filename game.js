var health = 100

function slap() {
    health = (health- 1)
    // alert(health)
    return health
    // update() 
}
function update() {
    const healthElem = document.getElementById("health")
    healthElem?.innerHTML = `
        <span>Health:<span id="health">${healthElem}</span></span>
    `
}update()