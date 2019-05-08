
document.addEventListener("DOMContentLoaded", function(event) {
    var coll = document.getElementById("avanzado");
    
    coll.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
    
});


