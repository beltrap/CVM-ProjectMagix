let canvas = null
let ctx = null
let fond = new Image()
fond.src = "img/zone/lobby.png"


let spriteList = []

window.addEventListener("load", () =>{
	canvas = document.querySelector("#lobbyC")
    ctx = canvas.getContext("2d")
    spriteList.push(new Reborn(window.innerWidth/2 + 100, window.innerHeight*0.72))

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