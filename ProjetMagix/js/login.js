let canvas = null
let ctx = null // Graphics de JAVA
let fond = new Image()
fond.src = "img/fondHQ.png"
// fond.src = "img/hqdefault.jpg"
// fond.src = "img/fondLogin.png"


let spriteList = []

window.addEventListener("load", () =>{
	canvas = document.querySelector("canvas")
    ctx = canvas.getContext("2d")
    let posFirst = new Position(0, window.innerHeight- 70)
    let posSecond = new Position(-300, window.innerHeight- 70)
    let border = new Border(-200, window.innerWidth + 200)

    spriteList.push(new Human(posFirst, border, "img/canvasTsuna.png"))
    spriteList.push(new Human(posSecond, border, "img/canvasXanxus.png"))

	tick()
})

const tick = () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.drawImage(fond, 0, 0,canvas.width, canvas.height)
    
    spriteList.forEach( element => element.tick());

	window.requestAnimationFrame(tick)
}