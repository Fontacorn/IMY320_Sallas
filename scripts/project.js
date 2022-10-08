const scrolls = [...$('.project')];
let recentlyHidden = null;

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting){
				entry.target.classList.add('active');
				const animation = animations.get(entry.target);

				if (animation.progress != 100)
					animations.get(entry.target).play();

				if (scrolls.indexOf(entry.target) < scrolls.indexOf(recentlyHidden))
				{
					// animations.get(recentlyHidden).reverse();
					animations.get(recentlyHidden).play();
					console.log(animations.get(recentlyHidden));

				}
			} else {
				recentlyHidden = entry.target;
				entry.target.classList.remove('active');
			}
		});
	},
	{
		threshold: .9,
	}
);

scrolls.forEach((el) => observer.observe(el));

const animations = new Map();
$('svg').each((i, svg) => {
	animations.set(
		scrolls[i],
		anime({
			easing: "easeOutExpo",
			targets: $(svg).find('.original').get(0),
			autoplay: false,
			width: [0, '100px'],
		})
	);
});

for(const anime of animations.values())
{
	anime.finished.then(() => anime.reverse());
}