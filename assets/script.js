if(sessionStorage.getItem("darkMode") == null)
{
  alert(1);
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

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
} 

function darkMode()
{
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    if(sessionStorage.getItem("darkMode") === "light")
    {
      r.style.setProperty('--color-darkMode','white');
      r.style.setProperty('--background-darkMode','black');
      r.style.setProperty('--color-hover-darkMode','black');
      r.style.setProperty('--background-hover-darkMode','white');
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
      document.getElementById("darkMode").classList.remove("fa-sun");
      document.getElementById("darkMode").classList.add("fa-moon");
      sessionStorage.setItem("darkMode","light");
    }
}