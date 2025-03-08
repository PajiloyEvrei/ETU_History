document.addEventListener('mousemove', e => {
	document.querySelector(".layer-2").style.transform = 'rotate(' + (e.clientX / 360) + 'deg)';
})

