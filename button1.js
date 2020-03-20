const content = document.getElementById("content");
const button = document.getElementById('show-more');

handleClick = () => {
    if(content.classList.contains('hidden')){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show Less";
    } else {
        //expand the box
        content.className = "hidden";
        button.innerHTML = "Show More";
    }
} 
