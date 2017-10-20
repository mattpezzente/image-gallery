(()=> {
	const globe = document.querySelector('.globe')
	fetchUnSplash()
	globe.addEventListener('click', clickGlobe)
})();

function clickGlobe() {
	this.style.animationPlayState = 'running'
	setTimeout( () => {
		this.style.animationPlayState = 'paused'
	}, 8000)
}

function fetchUnSplash() {
	const clientID = '41e3281f033234674af3526dd01467252ddb2f2d2b57bfb0f97c4a52a2af44f5'
	fetch(`https://api.unsplash.com/photos/?client_id=${clientID}`)
		.then(resp => resp.json())
		.then(resp => {
			console.log(resp)
			setTimeout(showImages(resp), 2000)
		})
}

function showImages(images) {
	const gallery = document.querySelector('.gallery')
	let i = 0
	images.forEach(image => {
		i++
		setTimeout(() => {
			let tempHTML = '<li class="li-show li-hover">'
			tempHTML += `<img alt="Unsplash image taken by ${image.user['name']}" src="${image.urls['small']}"
				srcset="${image.urls['full']} ${image.width}w, ${image.urls['regular']} 1080w, ${image.urls['small']} 400w, ${image.urls['thumb']} 200w"
				sizes="(min-width: 200px) 100vm, (min-width: 625px) 50vw, (min-width: 1000px) 33vw"

			/>`
			tempHTML += '<div class="img-desc">'
			tempHTML += `<h3 class="img-title">By: ${image.user['name']}</h3>`
			tempHTML += `<p class="img-likes">Likes: ${image.likes}</p>`
			tempHTML += '</div>'
			tempHTML += '</li>'

			gallery.insertAdjacentHTML('beforeend', tempHTML)
		}, i*150)
	})
}