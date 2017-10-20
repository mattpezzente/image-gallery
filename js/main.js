let data;

(()=> {

	if (localStorage.getItem('pics') === null) {
		fetchUnSplash()
	}

	setTimeout(showImages, 2000)

})();

function fetchUnSplash() {
	const clientID = '41e3281f033234674af3526dd01467252ddb2f2d2b57bfb0f97c4a52a2af44f5'
	fetch(`https://api.unsplash.com/photos/?client_id=${clientID}`)
		.then(resp => resp.json())
		.then(resp => {
			fetchData = window.localStorage.setItem('pics', JSON.stringify(resp))
		})
}

function showImages() {
	const gallery = document.querySelector('.gallery')
	const localJSON = JSON.parse(localStorage.getItem('pics'))
	let i = 0
	localJSON.forEach(image => {
		i++
		setTimeout(() => {
			let tempHTML = '<li class="li-show li-hover">'
			tempHTML += `<img src="${image.urls['full']}">`
			tempHTML += '<div class="img-desc">'
			tempHTML += `<h3 class="img-title">Posted By: ${image.user['name']}</h3>`
			tempHTML += `<p class="img-likes">Likes: ${image.likes}</p>`
			tempHTML += '</div>'
			tempHTML += '</li>'

			gallery.insertAdjacentHTML('beforeend', tempHTML)
		}, i*150)
	})
}