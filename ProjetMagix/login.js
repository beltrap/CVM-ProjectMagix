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
    spriteList.push(new Human(window.innerWidth/2 - 100, window.innerHeight- 70))
	tick()
})

const tick = () =>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.drawImage(fond, 0, 0,canvas.width, canvas.height)
    

    for (let i = 0; i < spriteList.length; i++) {
        const element = spriteList[i];
        element.tick();
    
    }
	window.requestAnimationFrame(tick)
}