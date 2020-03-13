
window.addEventListener("load", () =>{
    setTimeout(state,1000)
})

let focusJoueur = ""

const state = ()=> {
    let formData = new FormData()

    fetch("ajax-state.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        
        vue(response)
        setTimeout(state, 1000)
    });
}

const vue = response =>{
    if (typeof response !== "object"){
        console.log(response);
    }
    else{
        document.querySelector("#plateau").innerHTML = ""

        // partie bord adversaire
        let bordA = document.createElement("div")
        bordA.id = "bordAd"
        bordA.innerHTML = document.getElementById("temBord").innerHTML;
        let opponent = response.opponent
        let carte = ""
        for (let i= 0; i < opponent.handSize; i++){
            carte = document.createElement("div")
            carte.className = "carteBack"
            bordA.querySelector(".hand").appendChild(carte)
        }
        bordA.querySelector(".vie").innerHTML = opponent.hp

        bordA.querySelector(".vie").onclick = () =>{
            if(focusJoueur !== ""){
                attack(focusJoueur, 0)
            }
        }

        bordA.querySelector(".deck").innerHTML = opponent.remainingCardsCount


        // partie terrain
        let terrain = document.createElement("div")
        terrain.id = "terrain"

        let boardAd = document.createElement("div")
        boardAd.className = "bord"
        boardAd.innerHTML = document.getElementById("temBordT").innerHTML;
        boardAd.querySelector(".energie").innerHTML = opponent.mp

        for (let i=0; i < opponent.board.length; i++){
            carte = document.createElement("div")
            carte.className = "carte"

            let nomC = document.createElement("div")
            nomC.className = "nomCarte"
            let prixC = document.createElement("div")
            prixC.className = "prixCarte"
            let imgC = document.createElement("div")
            imgC.className = "imageCarte"
            let desC = document.createElement("div")
            desC.className = "descCarte"
            let attackC = document.createElement("div")
            attackC.className = "attackCarte"
            let vieC = document.createElement("div")
            vieC.className = "vieCarte"

            nomC.innerHTML = opponent.board[i].uid
            prixC.innerHTML = opponent.board[i].cost
            imgC.innerHTML = opponent.board[i].id
            desC.innerHTML = opponent.board[i].mechanics
            attackC.innerHTML = opponent.board[i].atk
            vieC.innerHTML = opponent.board[i].hp

            carte.appendChild(nomC)
            carte.appendChild(prixC)
            carte.appendChild(imgC)
            carte.appendChild(desC)
            carte.appendChild(attackC)
            carte.appendChild(vieC)

            carte.onclick = () =>{
                if (focusJoueur !== ""){
                    attack(focusJoueur, opponent.board[i].uid)
                }
            }
            boardAd.querySelector(".zone").appendChild(carte)
        }

        let board = document.createElement("div")
        board.innerHTML = document.getElementById("temBordT").innerHTML;
        board.className = "bord"
        board.querySelector(".energie").innerHTML = response.mp

        for (let i=0; i < response.board.length; i++){
            carte = document.createElement("div")
            carte.className = "carte"

            let nomC = document.createElement("div")
            nomC.className = "nomCarte"
            let prixC = document.createElement("div")
            prixC.className = "prixCarte"
            let imgC = document.createElement("div")
            imgC.className = "imageCarte"
            let desC = document.createElement("div")
            desC.className = "descCarte"
            let attackC = document.createElement("div")
            attackC.className = "attackCarte"
            let vieC = document.createElement("div")
            vieC.className = "vieCarte"

            nomC.innerHTML = response.board[i].uid
            prixC.innerHTML = response.board[i].cost
            imgC.innerHTML = response.board[i].id
            desC.innerHTML = response.board[i].mechanics
            attackC.innerHTML = response.board[i].atk
            vieC.innerHTML = response.board[i].hp

            carte.appendChild(nomC)
            carte.appendChild(prixC)
            carte.appendChild(imgC)
            carte.appendChild(desC)
            carte.appendChild(attackC)
            carte.appendChild(vieC)

            carte.onclick = (e)=>{
                focusJoueur = response.board[i].uid;
                e.stopPropagation()
            }

            board.querySelector(".zone").appendChild(carte)

        }

        terrain.appendChild(boardAd)
        terrain.appendChild(board)

        board.querySelector(".zone").onclick = () =>{
            
            if (focusJoueur !== ""){
                play(focusJoueur)
            }
        }


        // partie joueur
        let bordY = document.createElement("div")
        bordY.id = "bordY"
        bordY.innerHTML = document.getElementById("temBord").innerHTML;

    

        for (let i=0; i < response.hand.length; i++){

            carte = document.createElement("div")
            carte.className = "carte"

            let nomC = document.createElement("div")
            nomC.className = "nomCarte"
            let prixC = document.createElement("div")
            prixC.className = "prixCarte"
            let imgC = document.createElement("div")
            imgC.className = "imageCarte"
            let desC = document.createElement("div")
            desC.className = "descCarte"
            let attackC = document.createElement("div")
            attackC.className = "attackCarte"
            let vieC = document.createElement("div")
            vieC.className = "vieCarte"

            nomC.innerHTML = response.hand[i].uid
            prixC.innerHTML = response.hand[i].cost
            imgC.innerHTML = response.hand[i].id
            desC.innerHTML = response.hand[i].mechanics
            attackC.innerHTML = response.hand[i].atk
            vieC.innerHTML = response.hand[i].hp

            carte.appendChild(nomC)
            carte.appendChild(prixC)
            carte.appendChild(imgC)
            carte.appendChild(desC)
            carte.appendChild(attackC)
            carte.appendChild(vieC)
            carte.onclick = function (){
                focusJoueur = response.hand[i].uid;
            }
            bordY.querySelector(".hand").appendChild(carte)
        }
        bordY.querySelector(".vie").innerHTML = response.hp

        bordY.querySelector(".vie").onclick = ()=>{
            heroPower()
        }


        bordY.querySelector(".deck").innerHTML = response.remainingCardsCount

        bordY.querySelector(".deck").onclick = ()=>{
            end()
        }

        document.querySelector("#plateau").appendChild(bordA)
        document.querySelector("#plateau").appendChild(terrain)
        document.querySelector("#plateau").appendChild(bordY)

    }
}


const play = uid =>{
    let formData = new FormData()

    formData.append("type", "PLAY")
    formData.append("uid", uid)

    fetch("ajax-play.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        focusJoueur = ""
        vue(response)
        
    })
}

const heroPower = () =>{
    let formData = new FormData()

    formData.append("type", "HERO_POWER")

    fetch("ajax-play.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        focusJoueur = ""
        vue(response)
    })
}

const end = () =>{
    let formData = new FormData()

    formData.append("type", "END_TURN")

    fetch("ajax-play.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        // vue(response)
        focusJoueur = ""
    })

}

const attack = (uid, targetUid)=>{
    let formData = new FormData()

    formData.append("type", "ATTACK")
    formData.append("uid", uid)
    formData.append("targetuid", targetUid)

    fetch("ajax-play.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        focusJoueur = ""
        vue(response)
    })
}