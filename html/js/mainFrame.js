const canvas = document.getElementById("mainFrame");
const context = canvas.getContext("2d");
const img = new Image();
img.src = "img/SPB_map_1822.jpg";
img.onload = ()=> {
    context.drawImage(img, 0, 0, 100%, 100%);
}