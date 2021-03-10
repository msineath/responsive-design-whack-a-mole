// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

		const moleHeads = document.querySelectorAll('.wgs__mole-head');
    // setInterval(() => {
    //     for(let moleHead of moleHeads) {
    //         moleHead.classList.toggle('wgs__mole-head--hidden');
    //     }
    // }, 1000);

		function popUpRandomMole() {
			let randomNum = Math.floor(Math.random() * 7);
			let current = 	moleHeads[randomNum];
			current.classList.remove('wgs__mole-head-hidden');
			setTimeout(hideMole(current), 1000);
		}
		function hideMole(mole) {
			mole.classList.add('wgs__mole-head--hidden');
			setTimeout(popUpRandomMole, 1000);
		}

		setTimeout(popUpRandomMole, 0);
})
