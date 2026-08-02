/* ==========================================
   SARAH'S GRADUATION WEBSITE - VERSION 2.0
========================================== */

/* -------------------------
   COUNTDOWN
-------------------------- */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(){

const thanks=document.getElementById("thanks");

if(thanks){

thanks.style.display="block";

}

});

}
const eventDate = new Date("September 26, 2026 15:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("timer").innerHTML =
        "<h3>The celebration has begun! 🎉</h3>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();
setInterval(updateCountdown,1000);

/* -------------------------
   SMOOTH SCROLL
-------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* -------------------------
   FADE IN ON SCROLL
-------------------------- */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});

/* -------------------------
   FLOATING SPARKLES
-------------------------- */

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✦";

    sparkle.style.left = Math.random()*100 + "vw";

    sparkle.style.animationDuration =
        (6 + Math.random()*5) + "s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },10000);

}

setInterval(createSparkle,900);

/* -------------------------
   STICKY RSVP BUTTON
-------------------------- */



/* -------------------------
   SIMPLE CONFETTI
-------------------------- */


if(form){

form.addEventListener("submit",()=>{

for(let i=0;i<120;i++){

const confetti=document.createElement("span");

confetti.innerHTML="❀";

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.fontSize=(12+Math.random()*12)+"px";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=
`translateY(${window.innerHeight+150}px)
rotate(${Math.random()*720}deg)`;

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},4500);

}

});

}

/* -------------------------
   OPTIONAL:
   AUTO UPDATE COPYRIGHT
-------------------------- */

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML =
`Made with 🤍 for Sarah's Graduation Party • ${new Date().getFullYear()}`;

}