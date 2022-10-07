const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting)
			entry.target.classList.add('active');
		else
			entry.target.classList.remove('active');
	});
});

document.querySelectorAll('.project').forEach((el) => observer.observe(el));