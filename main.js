let commentValue= document.getElementById("commentData");
let createComment= document.getElementById("createComment");

document.getElementById("comment").addEventListener("click", function(){
   let comments= document.createElement("p");
   comments.innerHTML=commentValue.value;
   createComment.appendChild(comments);
   commentValue.value="";

})