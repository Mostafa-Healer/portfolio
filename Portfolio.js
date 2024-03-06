let section_Languages = document.getElementById("Languages") ;
let span = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if(window.scrollY >= section_Languages.offsetTop -200 ) {
        span.forEach( (span) => {
            span.style.width = span.dataset.width ;
        })
    }
};