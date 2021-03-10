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
        current.classList.remove('wgs__mole-head--hidden');
        setTimeout( hideMole, 3000, current);
    }
    function hideMole(mole) {
            console.log(mole);
			mole.classList.add('wgs__mole-head--hidden');
			setTimeout(popUpRandomMole, 1000);
		}
        
        setTimeout(popUpRandomMole, 0);

    moleHeads.forEach(mole => mole.addEventListener('click', event => {
        event.target.classList.add("wgs__mole-head--hidden");
        event.target.classList.add("wgs__mole-head--whacked")
    }))
})
