var content = document.getElementById("content");
var button = document.getElementById("show-more");

if(content.classList.contains('hidden')){
    content.className = '';
} else {
  content.className = 'hidden'; 
}; 
