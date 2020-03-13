
window.addEventListener("load", () =>{
    setTimeout(state,1000)
})

const state = ()=> {
    let formData = new FormData()

    fetch("ajax-state.php", {
        method: "POST",
        credentials : "include", // autrement, les cookies ne sont pas envoyés
        body : formData
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById("terrain").innerHTML = ""

        let bordA = document.createElement("div")
        bordA.id = "bordA"
        bordA.innerHTML = document.getElementById("temBord").innerHTML;

        let terrain = document.createElement("div")
        
        setTimeout(state, 1000)
    });
}