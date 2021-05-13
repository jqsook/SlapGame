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
    karate:{name: 'high karate', modifier: 25, description: 'KNIFE HAND'}
}
var itmImg = {
	img: {twfiv: 'https://tvline.com/wp-content/uploads/2018/01/chappelles-show-best-sketches-rick-james.png?w=620', ten: 'https://www.soulhead.com/wp-content/uploads/2012/03/012.jpg', zero: 'https://okayplayer-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/dave-chappelle-prince-party-minneapolis--715x440.jpg'  },
    
}


function slap() {
    target.health--
    target.hit++
    update()
}
function update() {
    console.log(target.health)
    
    //The only time you need a template is for multiple items in an array that have to be sorted through and selected (for loop)
    document.getElementById("health").innerHTML = `${target.health}`
    document.getElementById("hits").innerHTML = `${target.hit}`
    
}
function addItem(itemName){
  // this finds the item out of the dictoinary and adds it to the cart
  let item = items[itemName]
  cart.push(item)
  draw()
}
function giveItem() {
    let template = ''
for (let key in items){
  let item = items[key]
  template += `
     <div id="items">
              <button class="" onclick="${brick()}">Give Rick a Brick</button>
              <button class="" onclick="${giveFire()}">Give Rick some Fire</button>
              <button class="" onclick="${karate()}">Give Rick some Karate Skills
              </button>
            </div>
    `
}
    document.getElementById('items').innerHTML = template
}

function kick(){
    target.health -= 10 + addMods()
    target.hit++
    update()
}
function punch() {
    target.health -= 5 + addMods()  //Only use the = sign one time on a line
    target.hit++
    update()
}
function giveFire() {
    target.health -= target.items.push(items.fire)
    target.hit++
    update()
}
function brick(){
    target.health -= target.items.push(items.brick)
    target.hit++
    update()
}
function karate(){
    target.health -= target.items.push(items.karate)
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

function noHealth() {
    if (target.health <= 25) {
        alert("Im RICK JAMES")
    } else if
        (target.health <= 10)
        alert("Come Party with the man")
    else {
        target.health <= 0
            alert("I took it too far Charlie Murphy")
    }
}
