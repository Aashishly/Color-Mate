const container = document.querySelector(".container");
const msg = document.querySelector(".addPaletesMsg");
const webBtn = document.querySelector(".openweb-btn");
const generateBtn = document.getElementById("generateMoreBtn");

let ctr = 6;


const toWebsite = () => {
    var element = document.querySelector("#load-screen");
    element.remove();
    
}


const palette = () => {
    for(let i=0; i< 6; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = 
        `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`
        color.addEventListener("click", () => {
            copyColor(color, randomHex);
        });

        container.appendChild(color);
    }
}

const palettesBoxes = 6;
generatePalette = () => {
    msg.remove();
    ctr += 6;
    msg.classList.remove("remove");
    for(let i=0; i< palettesBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = 
        `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`
        color.addEventListener("click", () => {
            copyColor(color, randomHex);
        });
    
        container.appendChild(color);
    }

    if(ctr == 120){
        container.innerHTML = "";
        palette();

        ctr = 6;
    }
    

}


palette();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(()=> colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy color code"));
}

generateBtn.addEventListener("click", generatePalette);
document.body.addEventListener("keypress", generatePalette);
webBtn.addEventListener("click", toWebsite);