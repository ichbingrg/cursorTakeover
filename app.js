let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".nav-links li");
let image = document.querySelector(".front-cover");

window.addEventListener("mousemove",cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY +"px";
    mouseCursor.style.left = e.pageX +"px" ;
}

navlinks.forEach(link=>{
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hover-link");
    }
    );
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hover-link");
    }
    );
})
