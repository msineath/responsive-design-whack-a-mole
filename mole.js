// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
	// setInterval(() => {
	//     for(let moleHead of moleHeads) {
	//         moleHead.classList.toggle('wgs__mole-head--hidden');
	//     }
	// }, 1000);
	const moleHeads = document.querySelectorAll(".wgs__mole-head");
    let score = 0;
    let counter = 30;
		let time = 3000;
    let div = document.createElement('div');
            div.innerHTML = `Turn: ${counter}`;
            let banner = document.querySelector("#banner");
            banner.appendChild(div);

    let div2 = document.createElement('div');
    div2.innerHTML = `Score: ${score}`;
    banner.appendChild(div2);

	function popUpRandomMole() {
		let current = selector();
        if(counter === 0) {
            let title = document.createElement('h1');
            title.innerHTML = "Game over";
            let pf = document.querySelector(".pf");
            pf.appendChild(title);
            return;
        }
		// console.log(current)
		current.classList.remove("wgs__mole-head--hidden");
        counter--;
        div.innerHTML = `Turn: ${counter}`;
		setTimeout(hideMole, time, current);
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
						if (time > 500) {
							time -= 500;
						} else if (time > 10){
							time -= 10;
						}
						console.log(time)
		})
	);
});
