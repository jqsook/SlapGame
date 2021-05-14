var target = {
health: 100,
name:'',
hit: 0,
imgHtml: [],
items:[]
}
var items = {
	fire: {name: 'Fire', modifier: 2, description: 'IT BURNS!'},
    brick: { name: 'brick', modifier: 5, description: 'OUCH' },
    hatchet:{name: 'hatchet', modifier: 25, description: 'CHOP CHOP'}
}
let imgHtml = {
    alien: {
        aLose: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgjPtD8kA0jL6H3rO-6X4w31Nb0jNcSOhsA&usqp=CAU',
    
        aWeak: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFfyLC1D5HzWFFIh8rglIReKdKvOqoIxsMg&usqp=CAU'
    },
    weapon: {
        fire: 'http://assets.stickpng.com/images/58469c62cef1014c0b5e47f6.png',
        
        imgUrl: 'https://www.jing.fm/clipimg/detail/41-417390_axe-hatchet-lumber-cartoon-hatchet.png'
    }
}

function healthRange() {//Trying to set the min of 1 and max of 100
    let num = Math.min(Math.max(parseInt(num), 1), 100);
    num += health
    console.log(health)
    update()
    return health
}
    
function slap() {
    target.health--
    target.hit++
    update()
}

function update() {
    // console.log(target.health)
    document.getElementById("health").innerHTML = `${target.health}`
    document.getElementById("hits").innerHTML = `${target.hit}`
    
}

function giveItem() {
    let template = ''
for (let key in items){
    let item = items[key]
    template += `
    <div class="d-flex justify-content-around">
                <button onclick="slap()">Slap</button>
                <button onclick="punch()">Punch</button>
                <button onclick="giveFire()">FIRE!!</button>
                <button onclick="hatchet()">HATCHET</button>
                </div>
    `
}
    document.getElementById('items').innerHTML = template
}

function punch() {
    // console.log("You got punch", punch)
    target.health -= 5 + addMods()  
    target.hit++
    update()
}

function giveFire() {
    // console.log("You got fire", giveFire)
    target.health -= 10 + addMods()  
    target.hit++
    update()
}

function hatchet() {
    // console.log("You got hatchet", hatchet)
    target.health -= target.items.push(items.hatchet)
    target.hit++
    update()
}

function addMods(){   //target.items[fire.modifier] this is the target path to get the modifier
    let modTotal = 0
    for (let i = 0; i < target.items.length; i++){
        modTotal += target.items[i].modifier
    }
    return modTotal
}

// function healthRange() { //Trying to set the range for the health
//     var n = health
//     n = Number(n);
//     n = Math.min(100, Math.max(0, n));
//     console.log(n)
//     return n += health
// }