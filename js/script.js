window.onload = () => {
    let block = document.getElementById("block");

    // Pass in the id of an element
    let confetti = new Confetti('block');

    // Edit given parameters
    confetti.setCount(175);
    confetti.setSize(3.5);
    confetti.setPower(45);
    confetti.setFade(false);
    confetti.destroyTarget(false);

    block.addEventListener('click', () => {

        block.innerHTML = "te amo";
        block.style.fontSize = "3rem";

        setTimeout(() => {
            block.innerHTML = "?";
            block.style.fontSize = "6rem";
        }, "9000");
        
    })
}