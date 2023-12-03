function createStar() {
    var star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 10 + "s";
    document.getElementById("web_bg").appendChild(star);
  }
  
  for (var i = 0; i < 50; i++) {
    createStar();
  }