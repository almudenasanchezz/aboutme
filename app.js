let elementosAcordeon = document.getElementsByClassName("accordion");

for (let i = 0; i< elementosAcordeon.length; i++){
    elementosAcordeon[1].addEventListener("click",function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
}