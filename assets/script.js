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
    

    // document.body.classList.toggle("darkModeBody");
    // var element = document.getElementsByTagName("a");
    // for(let i=0;i<element.length;i++)
    // {
    //     if(element[i].className != "active")
    //     {
    //         element[i].classList.toggle("darkModeA");
    //         if(element[i].className == "non darkModeA")
    //         {
    //             element[i].style.color = "white";
    //         }
    //         else
    //         {
    //             element[i].style.color = "black";
    //         }
    //     }
        
    // }
}