// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	// setInterval(() => {
	//     for(let moleHead of moleHeads) {
	//         moleHead.classList.toggle('wgs__mole-head--hidden');
	//     }
	// }, 1000);
	const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");

	function popUpRandomMole() {
		let current = selector();
		// console.log(current)
		current.classList.remove("wgs__mole-head--hidden");
		setTimeout(hideMole, 3000, current);
	}

	function selector() {
		const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
		let randomNum = Math.floor(Math.random() * moleHeads.length);
		console.log(moleHeads, randomNum)
		return moleHeads[randomNum];
	}

	function hideMole(mole) {
		// console.log(mole);
		mole.classList.add("wgs__mole-head--hidden");
		setTimeout(popUpRandomMole, 1000);
	}

	setTimeout(popUpRandomMole, 0);

	moleHeads.forEach(mole =>
		mole.addEventListener("click", event => {
			event.target.classList.add("wgs__mole-head--hidden");
			event.target.classList.add("wgs__mole-head--whacked");
		})
	);
});
