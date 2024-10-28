
let grid_size=16;

const grid = document.querySelector(".grid");

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const drawGrid = ()=> {
    grid.innerHTML='';
    for(let i = 1;i<=grid_size;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=1;j<=grid_size;j++){
            const box = document.createElement("div");
            box.classList.add("box"); 
            box.setAttribute("data-isChanged","false");
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
}

drawGrid();


const hoverHandle = (e)=> {
    const target = e.target;
    if(target.getAttribute("data-isChanged") === "false"){
        //generate random rgb color 
        const rgb = `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`;
        target.style.cssText = `background-color: ${rgb}; opacity:0.1;`;
        target.setAttribute("data-isChanged", "true");
    }else{
        target.style.opacity = (parseFloat(target.style.opacity) + 0.1) ;
    }
    
}
grid.addEventListener("mouseover", hoverHandle);


const button = document.querySelector(".btn");
button.addEventListener("click", ()=> {
    do{
        grid_size = prompt("Enter Grid Size upto 100");
    }while(grid_size>100 || grid_size<=0);
    drawGrid();
})



const clearButton = document.querySelector(".clr");
clearButton.addEventListener("click", drawGrid);
