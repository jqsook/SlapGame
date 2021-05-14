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
// Notes-
// Need to figure out the going below zero on health and hits
// Cycle image based on health and user choice for weapon
// Progress bar (in Nav bar) operation based on health

    
function slap() {
    Math.min(Math.max(parseInt(target.health--), 1), 100);
    Math.min(Math.max(parseInt(target.hit++), 1), 100);
    // target.health--
    // target.hit++
    update()
}

function update() {
    // console.log(target.health)
    document.getElementById("health").innerHTML = `${target.health}`
    document.getElementById("hits").innerHTML = `${target.hit}`
    
}


// function giveItem() {
//     let template = ''
// for (let key in items){
//     let item = items[key]
//     template += `
//     <div class="d-flex justify-content-around">
//         <button class="btn-slap" onclick="slap()">Slap</button>
//         <button class="btn-warning" onclick="giveFire()">FIRE</button>
//         <button class="btn-htcht" onclick="hatchet()">Hatchet</button>
//     </div>
//     `
// }
//     document.getElementById('items').innerHTML = template
// }


function punch() {
    // console.log("You got punch", punch)
    Math.min(Math.max(parseInt(target.health -= 5 + addMods()), 1), 100);
    Math.min(Math.max(parseInt(target.hit++), 1), 100);
    // target.health -= 5 + addMods()  
    // target.hit++
    update()
}

function giveFire() {
    // console.log("You got fire", giveFire)
    Math.min(Math.max(parseInt(target.health -= 10 + addMods()), 1), 100);
    Math.min(Math.max(parseInt(target.hit++), 1), 100);
    // target.health -= 10 + addMods()  
    // target.hit++
    update()
}

function hatchet() {
    // console.log("You got hatchet", hatchet)
    Math.min(Math.max(parseInt(target.health -= target.items.push(items.hatchet)), 1), 100);
    Math.min(Math.max(parseInt(target.hit++), 1), 100);
    // target.health -= target.items.push(items.hatchet)
    // target.hit++
    update()
}

function addMods(){   //target.items[fire.modifier] this is the target path to get the modifier
    let modTotal = 0
    for (let i = 0; i < target.items.length; i++){
        modTotal += target.items[i].modifier
    }
    return modTotal
}

