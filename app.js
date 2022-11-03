const xMen=document.getElementById(`x-men`);

const centered=document.getElementsByClassName(`center`);

const batman=document.querySelector(`#batman`);

const h3s=document.querySelectorAll(`h3`);

const h1=document.querySelector(`h1`);

h1.innerText=`The Best Animated Superhero TV Shows Ever!`;

const honorableMentions=document.getElementById(`#honorable-mentions`);

// const honorableMentions=document.querySelector(`#honorable-mentions`);

honorableMentions.innerHTML=`<p>OTHER GREAT SHOWS</p>`

const aTag=document.querySelector(`a`);

// aTag.href="https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot";

aTag.innerHTML=`<a href="https://screenrant.com/best-animated-superhero-comic-book-shows-ever/">The Best Animated Superhero TV Shows Ever</a>`;

h1.classList.add(`background`,`text-color`);

h1.classList.remove(`background`);

const h4=document.createElement(`h4`);

h4.innerText=`Is Avatar. The Last Airbender A Superhero Show?`;

const body=document.querySelector(`body`);
body.prepend(h4);

const h5=document.createElement(`h5`);

h5.innerText="Heroes in a half shell Turtle Power!";

aTag.insertAdjacentElement(`afterend`,h5);

const superman=document.querySelector(`ul>li`);
super.remove();
// or
// document.querySelector(`ul>li`).remove();

// Bonus
const divs=document.querySelectorAll(`div`);

for (i=0;i<divs.length;1++){
    divs.classList.toggle(`background`);
}

// for(d of divs){
//     d.classList.toggle(`background`);
// }

const avengers=[
    "Forever",
    "Fight",
    "As",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];

/* for (i = 0; i < avengers.length; i++){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${avengers[i]} `;
    body.append(spanLoop);
} */

// OR

for (a of avengers){
    const spanLoop = document.createElement(`span`);
    spanLoop.innerText = `${a} `;
    body.append(spanLoop);
}