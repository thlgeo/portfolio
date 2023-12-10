/////////// Pour le dark mode au chargement de la page
if(sessionStorage.getItem("darkMode") == null)
{
  sessionStorage.setItem("darkMode","light");
}
let theme = sessionStorage.getItem("darkMode");
let r = document.querySelector(':root');

if(theme == "dark")
{
  r.style.setProperty('--color-darkMode','white');
  r.style.setProperty('--background-darkMode','black');
  r.style.setProperty('--color-hover-darkMode','black');
  r.style.setProperty('--background-hover-darkMode','white');
  r.style.setProperty("--background-projet"," #242424");
  r.style.setProperty("--box-shadow","rgba(255,255,255,0.3)");
  document.getElementById("darkMode").classList.add("fa-sun");
  document.getElementById("darkMode").classList.remove("fa-moon");
}
else if(theme === "light")
{
  r.style.setProperty('--color-darkMode','black');
  r.style.setProperty('--background-darkMode','white');
  r.style.setProperty('--color-hover-darkMode','white');
  r.style.setProperty('--background-hover-darkMode','black');
  r.style.setProperty("--background-projet","lightgrey");
  r.style.setProperty("--box-shadow","rgba(0,0,0,0.3");
  document.getElementById("darkMode").classList.remove("fa-sun");
  document.getElementById("darkMode").classList.add("fa-moon");
}

/////// Parallax
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//////// pour le dark mode on click sur le bouton
function darkMode()
{
    let rs = getComputedStyle(r);
    if(sessionStorage.getItem("darkMode") === "light")
    {
      r.style.setProperty('--color-darkMode','white');
      r.style.setProperty('--background-darkMode','black');
      r.style.setProperty('--color-hover-darkMode','black');
      r.style.setProperty('--background-hover-darkMode','white');
      r.style.setProperty("--background-projet"," #242424");
      r.style.setProperty("--box-shadow","rgba(255,255,255,0.3)");
      document.getElementById("darkMode").classList.add("fa-sun");
      document.getElementById("darkMode").classList.remove("fa-moon");
      sessionStorage.setItem("darkMode","dark");
    }
    else if(sessionStorage.getItem("darkMode") === "dark")
    {
      r.style.setProperty('--color-darkMode','black');
      r.style.setProperty('--background-darkMode','white');
      r.style.setProperty('--color-hover-darkMode','white');
      r.style.setProperty('--background-hover-darkMode','black');
      r.style.setProperty("--background-projet","lightgrey");
      r.style.setProperty("--box-shadow"," black");
      document.getElementById("darkMode").classList.remove("fa-sun");
      document.getElementById("darkMode").classList.add("fa-moon");
      sessionStorage.setItem("darkMode","light");
    }
}

// effet titre
var texts = document.getElementsByClassName("chemin-site");
var text = texts[texts.length-1];
var splitText = text.innerText.split('');
// for(let i=0;i<texts.length;i++){
//   splitText = splitText.concat(texts[i].innerText.split(""));
//   // setInterval(function(){
//   //   AjoutDeLettre(i)
//   // }
//   //   , 100 );
// }
// let j=0;
// for(let i=0;i<splitText.length;i++)
// {
//   if(splitText[i] == "/")
//   {
//     if(i == 0 || splitText[i] == "/")
//     {
//       texts[j].innerText = "";
//     }
//     if(j < 1)
//     {
//       j++;
//     }
   
//   }
//   console.log(texts[j])
  
  
//   setTimeout(() => {AjoutDeLettre(i,j)}, i*100);
// }
text.innerText = "";

i = 0;
setInterval(function(){    AjoutDeLettre()}    , 100 );
function AjoutDeLettre(){
  if(i < splitText.length){
    text.innerHTML += splitText[i];
    i++;
  }
}



// function AjoutDeLettre(i,j){
//   if(i < splitText.length){
//     texts[j].innerText += splitText[i];
//     // j++;
//   }
// }

//////// Popup
function popup(event)
{
  let ele = event.target;
  if(ele.className != "projet")
  {
    ele = ele.parentElement;
    if(ele.className != "projet")
    {
      
      ele = ele.parentElement;
    }
  }
  switch (ele.id)
  {
    case "candy":
      document.getElementById("suite-candy").style.display = "flex";
      break;
    case "apple":
      document.getElementById("suite-apple").style.display = "flex";
      break;
    case "site-marchand":
      document.getElementById("suite-site-marchand").style.display = "flex";
      break;
    default:
      break;
  }
}


function popout(event) {
  let suite = document.getElementsByClassName("suite");
  if (event.target.className == "suite" || event.target.className == "close") {
    for(let i=0;i<suite.length;i++)
    {
      suite[i].style.display = "none";
    }
    document.getElementById("fleche").style.display = "flex";
  }
}

var slidesPerView = 7;
if(window.innerWidth <= 600)
{
  slidesPerView = 4;
}

const swiper = new Swiper('.sample-slider',{
  loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,          //add
    slidesPerView: slidesPerView,
});

window.addEventListener("scroll", e => {
  if(window.scrollY != 0)
  {
    document.getElementById("fleche-haut").style.display = "flex";
  }else{
    document.getElementById("fleche-haut").style.display = "none";
  }
})

let burger = document.getElementById("burger");

burger.addEventListener("click", e => {
  burger.classList.toggle('opened');
  burger.setAttribute('aria-expanded', burger.classList.contains('opened'));
  document.getElementById("nav-list").classList.toggle("active")
})