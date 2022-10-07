// const anime = require('anime.js');
const shapes = [
	{
		shape: null,
		original: 'M0 250C0 111.929 111.929 0 250 0V0C388.071 0 500 111.929 500 250V250C500 388.071 388.071 500 250 500V500C111.929 500 0 388.071 0 250V250Z',
		morphed: 'M0 0H500V500H0V0Z',//'M500 250C500 500 500 500 250 500C-0.000106812 500 -0.00012207 500 -0.00012207 250C-0.00012207 0 -0.00012207 -7.23476e-10 250 0C500 7.23481e-10 500 0 500 250Z',
		morphTimeline: anime.timeline({
			duration: 2000,
			easing: "easeOutExpo"
		}),
		moveTimeline: anime.timeline({
			duration: 2000,
			easing: "easeOutExpo"
		}),
		scaleTimeline: anime.timeline({
			duration: 2000,
			easing: "easeOutExpo"
		}),
		rotation: 0
	}
];

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry, i) => {
		console.log(entry);
		if (entry.isIntersecting){
			entry.target.classList.add('active');
			shapes[0].morphTimeline.add({
				targets: shapes[0].shape,
				d: [{ value: shapes[i].morphed }]
			});
			shapes[0].moveTimeline.add({
				targets: shapes[0].shape.parentNode,
				left: '0',
				top: '10px',
				'margin-top': 0,
				'margin-left': 0,
			});
			shapes[0].scaleTimeline.add({
				targets: shapes[0].shape.parentNode,
				width: '80vw',
				height: 'calc(100vh - 20px)',
				delay: 500
			})
		} else {
			entry.target.classList.remove('active');
		}
	});
});


shapes[0].shape = document.getElementById('test');

console.log(shapes);

document.querySelectorAll('.scroll-animations').forEach((el) => observer.observe(el));