document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function darkMode()
{
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    if(rs.getPropertyValue('--color-darkMode') == "black")
    {
      r.style.setProperty('--color-darkMode','white');
      r.style.setProperty('--background-darkMode','black');
      r.style.setProperty('--color-hover-darkMode','black');
      r.style.setProperty('--background-hover-darkMode','white');
      document.getElementById("darkMode").classList.add("fa-regular");
      document.getElementById("darkMode").classList.remove("fa-solid");
    }
    else
    {
      r.style.setProperty('--color-darkMode','black');
      r.style.setProperty('--background-darkMode','white');
      r.style.setProperty('--color-hover-darkMode','white');
      r.style.setProperty('--background-hover-darkMode','black');
      document.getElementById("darkMode").classList.remove("fa-regular");
      document.getElementById("darkMode").classList.add("fa-solid");
    }
}

function toRectangle(event)
{
  let elements = document.getElementsByClassName("rectangle");
  if(event.target.tagName == "LI")
  {
    if(elements.length > 0)
    {
      removeRectangle(elements);
    }
    else
    {
      event.target.classList.toggle("rectangle");
    }
    
  }
  else if(event.target.tagName == "I" || event.target.tagName == "IMG")
  {
    if(elements.length > 0)
    {
      removeRectangle(elements);
    }
    else
    {
      event.target.parentElement.classList.toggle("rectangle");
    }
  }
  else
  {
    removeRectangle(elements);
  }
}

function removeRectangle(elements)
{
  for(let i=0;i<elements.length;i++) elements[i].classList.remove("rectangle");
}