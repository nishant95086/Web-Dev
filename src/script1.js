const box = document.querySelector(".box");

function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

box.addEventListener('mousemove', throttle((e) => {
    const card = document.createElement("div");
    card.classList.add('cards');
    document.body.appendChild(card);

    
    card.style.left = `${e.clientX - card.offsetWidth / 2}px`; // Centers the card at the mouse
    card.style.top = `${e.clientY - card.offsetHeight - 10}px`; // Position the card above the cursor

    
    const gou = document.createElement('img');
    gou.setAttribute("src", `${Math.floor(Math.random() * 8)}.jpeg`);
    card.appendChild(gou);

   
    gsap.to(gou, {
        y: '0',
        ease: "Power4.out", 
        duration: 0.2
    });

    gsap.to(gou, {
        y: '100%', 
        ease: "Power4.in", 
        duration: 0.2
    });

   
    setTimeout(() => {
        card.remove();
    }, 1000);
}, 150));
