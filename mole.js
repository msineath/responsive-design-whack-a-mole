// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	// setInterval(() => {
	//     for(let moleHead of moleHeads) {
	//         moleHead.classList.toggle('wgs__mole-head--hidden');
	//     }
	// }, 1000);
	const moleHeads = document.querySelectorAll(".wgs__mole-head");
    let score = 0;
    let counter = 0;

    let div = document.createElement('div');
            div.innerHTML = `Turn: ${counter}`;
            let pf = document.querySelector(".pf");
            pf.appendChild(div);

    let div2 = document.createElement('div');
    div2.innerHTML = `Score: ${score}`;
    pf.appendChild(div2);

	function popUpRandomMole() {
		let current = selector();
        if(counter === 30) {
            let title = document.createElement('h1');
            title.innerHTML = "You won!";
            pf.appendChild(title);
            return;
        }
		// console.log(current)
		current.classList.remove("wgs__mole-head--hidden");
        counter++;
        div.innerHTML = `Turn: ${counter}`;
		setTimeout(hideMole, 3000, current);
	}

	function selector() {
		let randomNum = Math.floor(Math.random() * moleHeads.length);
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
            score++;
            div2.innerHTML = `Score: ${score}`;
		})
	);
});
