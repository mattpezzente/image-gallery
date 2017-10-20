let data;

(()=> {

	if (localStorage.getItem('pics') === null) {
		//fetchUnSplash()
		console.log('Yes Load')
	}
	else {
		console.log('No Load')
	}

	setTimeout(showImages, 2000)

})();

function fetchUnSplash() {
	const clientID = '41e3281f033234674af3526dd01467252ddb2f2d2b57bfb0f97c4a52a2af44f5'
	fetch(`https://api.unsplash.com/photos/?client_id=${clientID}`)
		.then(resp => resp.json())
		.then(resp => {
			fetchData = window.localStorage.setItem('pics', resp)
		})
}

function storeData() {
	
}

function showImages() {
	const images = document.querySelectorAll('.gallery li')
	let i = 0
	images.forEach(image => {
		i++
		setTimeout(() => {
			image.classList.add('li-show', 'li-hover')
			
		}, i*150)
	})
}