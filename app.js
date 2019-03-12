let leftArrowBtn  = document.querySelector('.left-arrow');
let rightArrowBtn = document.querySelector('.right-arrow');
let playPauseBtn  = document.querySelector('.play-pause');
let x = 0, bool   = false, interval;



// Main Function

const rotate = () => {
	const cubes = document.querySelectorAll('.cube');
	Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);

};

const changPlayPauseIcon = () => {
	const i = document.querySelector('.play-pause i');
	const cls = i.classList[1];

	if(cls === 'fa-play') {
		i.classList.remove('fa-play');
		i.classList.add('fa-pause');
	} else {
		i.classList.remove('fa-pause');
		i.classList.add('fa-play');
	};

};

const playPause = () => {
	if(!bool) {
		interval = setInterval(() => {
			x -= 90;
			rotate();
		}, 3000);
		changPlayPauseIcon();
		bool = true;
	} else {
		clearInterval(interval);
		changPlayPauseIcon();
		bool = false;
	}
};


// Controller Function

leftArrowBtn.addEventListener('click', () => {
	x += 90;
 	rotate();

 	if(bool) {
 		playPause();
 	}
});


rightArrowBtn.addEventListener('click', () => {
	x -= 90;
	rotate();

	if(bool) {
 		playPause();
 	}
});


// Hover Effect Function

leftArrowBtn.addEventListener('mouseover', () => {
	x += 25;
 	rotate();
});

leftArrowBtn.addEventListener('mouseout', () => {
	x -= 25;
 	rotate();
});


rightArrowBtn.addEventListener('mouseover', () => {
	x -= 25;
 	rotate();
});

rightArrowBtn.addEventListener('mouseout', () => {
	x += 25;
 	rotate();
});



// Play Pause Function

playPauseBtn.addEventListener('click', () => {
	playPause();
});


