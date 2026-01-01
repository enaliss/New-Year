document.addEventListener("DOMContentLoaded", () => {
    // Աստղերը հայտնվում են անմիջապես, կամ կարող եք թողնել ուշացումով
    createStars(); 
});

function createStars() {
    const container = document.getElementById("stars-container");
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        
        // Ամեն աստղ թող տարբեր արագությամբ թարթի
        star.style.animationDuration = (Math.random() * 1 + 0.5) + "s";

        container.appendChild(star);
    }
}