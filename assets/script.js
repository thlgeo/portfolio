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
  document.getElementById("darkMode").classList.add("fa-sun");
  document.getElementById("darkMode").classList.remove("fa-moon");
}
else if(theme === "light")
{
  r.style.setProperty('--color-darkMode','black');
  r.style.setProperty('--background-darkMode','white');
  r.style.setProperty('--color-hover-darkMode','white');
  r.style.setProperty('--background-hover-darkMode','black');
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
      r.style.setProperty("--box-shadow"," white");
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

//////// Popup
function popup(event)
{
  let ele = event.target;
  if(ele.className != "projet")
  {
    ele = ele.parentElement;
  }
  switch (ele.id)
  {
    case "candy":
      document.getElementById("suite-candy").style.display = "flex";
      break;
    case "apple":
      document.getElementById("suite-apple").style.display = "flex";
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