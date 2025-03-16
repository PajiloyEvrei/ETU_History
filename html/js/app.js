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
image.src = 'img/SPB_yellow_map_1882.png';
canvas.width = 2000;
canvas.height = 1000;
requestAnimationFrame(drawCanvas);

let matrix = [1, 0, 0, 1, 0, 0];
let scale = 1;
const pos = { x: 0, y: 0 };
let dirty = true;
const mouse = {x: 0, y: 0, oldX: 0, oldY: 0, dragging: false};

canvas.addEventListener("mousemove", mouseEvent, {passive: true});
canvas.addEventListener("mousedown", mouseEvent, {passive: true});
canvas.addEventListener("mouseup", mouseEvent, {passive: true});
canvas.addEventListener("mouseout", mouseEvent, {passive: true});
canvas.addEventListener("wheel", mouseWheelEvent, {passive: false});

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
    let c = document.getElementById("center").getBoundingClientRect();
    let power = 1;
    if(amount.x > c.left && pos.x > -200){
    	if(amount.x/c.left > 1.5){
    		pos.x -= amount.x/c.left * 3 * power;
    	}
    	else {
    		pos.x -= amount.x/c.left * 2 * power;
    	}
    }
    else if(amount.x  < c.left && pos.x < 200){
    	if(amount.x/c.left > 1.5){
    		pos.x += c.left/(amount.x + 50) * 3 * power;
    	}
    	else {
    		pos.x += c.left/(amount.x + 50) * power;
    	}
    }
    if(amount.y > c.top && pos.y > -200){
    	if(amount.y/c.top > 1.3){
    		pos.y -= amount.y/c.top * 3 * power;
    	}
    	else {
    		pos.y -= amount.y/c.top * 2 * power;
    	}
    }
    else if(amount.y  < c.top && pos.y < 200){
    	if(amount.y/c.top > 1.2){
    		pos.y += c.top/(amount.y + 50) * 3 * power;
    	}
    	else {
    		pos.y += c.top/(amount.y + 50) * 2 * power;
    	}
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
        ctx.drawImage(image, 0, 0, canvas.width + 500, canvas.height + 500, -250, -250, canvas.width + 1000, canvas.height + 1000);
    }
    requestAnimationFrame(drawCanvas);
}

function mouseEvent(e) {
    mouse.oldX = mouse.x;
    mouse.oldY = mouse.y;
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    pan({x: mouse.x , y: mouse.y });
}