let canvas;
let ctx;
let image;

let widthImg , heightImg ;

let matrix;
let scale ;
let pos ;
let dirty;
let mouse;

function setPicture(w,h,src){
    canvas = document.getElementById('mainFrame');
    ctx = canvas.getContext("2d");
    image = new Image();

    matrix = [1, 0, 0, 1, 0, 0];
    scale = 1;
    pos = { x: 0, y: 0 };
    dirty = true;
    mouse = {x: 0, y: 0, oldX: 0, oldY: 0, dragging: false};


    canvas.addEventListener("mousemove", mouseEvent, {passive: true});
    canvas.addEventListener("mouseover", mouseEvent, {passive: true});
    canvas.addEventListener("mousedown", mouseEvent, {passive: true});
    canvas.addEventListener("mouseup", mouseEvent, {passive: true});
    canvas.addEventListener("mouseout", mouseEvent, {passive: true});

    image.src = src;
    canvas.width = innerWidth;
    widthImg = w;
    canvas.height = innerHeight-100;
    heightImg = h;
    requestAnimationFrame(drawCanvas);
}



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
        ctx.drawImage(image, 0, 0, widthImg, heightImg, 0, 0, canvas.width - 100, canvas.height);
        update();
    }
    requestAnimationFrame(drawCanvas);
}

function mouseEvent(e) {
    // if (e.type === "mousedown")
    //     mouse.dragging = true;
    // if (e.type === "mouseup" || e.type === "mouseout")
    //     mouse.dragging = false;
    // mouse.oldX = mouse.x;
    // mouse.oldY = mouse.y;
    // mouse.x = e.offsetX;
    // mouse.y = e.offsetY
    // if (mouse.dragging)
    //     pan({x: mouse.x - mouse.oldX, y: mouse.y - mouse.oldY});
}