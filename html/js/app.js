// document.addEventListener('mousemove', e => {
// 	Object.assign(document.documentElement, {
// 		style: `
// 		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
// 		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
// 		`
// 	})
// })

let canvas = document.getElementById('mainFrame');
const ctx = canvas.getContext("2d");
const image = new Image();

let widthImg , heightImg ;

setPicture(2000,1000,'img/by_SPB_yellow_map_1882.png');
function setPicture(w,h,src){
    image.src = src;
    canvas.width = w;
    widthImg = w;
    canvas.height = h;
    heightImg = h;
    requestAnimationFrame(drawCanvas);
}

let matrix = [1, 0, 0, 1, 0, 0];
let scale = 1;
const pos = { x: 0, y: 0 };
let dirty = true;
const mouse = {x: 0, y: 0, oldX: 0, oldY: 0, dragging: false};

canvas.addEventListener("mousemove", mouseEvent, {passive: true});
canvas.addEventListener("mouseover", mouseEvent, {passive: true});
canvas.addEventListener("mousedown", mouseEvent, {passive: true});
canvas.addEventListener("mouseup", mouseEvent, {passive: true});
canvas.addEventListener("mouseout", mouseEvent, {passive: true});

function apply() {
    if (dirty)
        update();
    ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
}

function update() {
    dirty = false;
    matrix[3] = matrix[0] = scale;
    matrix[2] = matrix[1] = 0;
    matrix[4] = pos.x;
    matrix[5] = pos.y;
}


function pan(amount) {
    if (dirty)
        update();
    if(pos.x + amount.x > -widthImg/4 && pos.x + amount.x < widthImg/4){
        pos.x += amount.x;
    }
    if(pos.y + amount.y > -heightImg/4 && pos.y + amount.y < heightImg/4){
        pos.y += amount.y;
    }
    dirty = true;
}

function scaleAt(at, amount) {
    if (dirty)
        update();
    scale *= amount;
    pos.x = at.x - (at.x - pos.x) * amount;
    pos.y = at.y - (at.y - pos.y) * amount;
    dirty = true;
}

function drawCanvas() {
    if (dirty) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        apply();
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height, -canvas.width/4, -canvas.height/4, canvas.width, canvas.height);
    }
    requestAnimationFrame(drawCanvas);
}

function mouseEvent(e) {
    if (e.type === "mousedown")
        mouse.dragging = true;
    if (e.type === "mouseup" || e.type === "mouseout")
        mouse.dragging = false;
    mouse.oldX = mouse.x;
    mouse.oldY = mouse.y;
    mouse.x = e.offsetX;
    mouse.y = e.offsetY
    if (mouse.dragging)
        pan({x: mouse.x - mouse.oldX, y: mouse.y - mouse.oldY});
}