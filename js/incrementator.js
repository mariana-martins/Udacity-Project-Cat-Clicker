function criaCounter(catName) {
    var count = 0;
    return function () {
        count++;

        $("#click-"+catName).text(count);

        var back = ["#e98000","#5b9c31","#e55fc1", "#1fffaf", "#ff6f61", "#7057df", "#f2b51a", "#fef65b"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $("#click-"+catName).css('color',rand);
    }
}

var cats = {
  cat: [
      {
          name: "Locki",
          img:"img/cat-1.jpg"
      },
      {
          name: "Charlie",
          img:"img/cat-2.jpg"
      }
  ],
  display: function() {
      for (kitten in cats.cat) {
          var kittenName = cats.cat[kitten].name;
          var kittenTitle = "<p class='cats-name'>" + kittenName  + "</p>";
          $("#desc").append(kittenTitle);

          var kittenImage = "<img class='cat-img' src='" + cats.cat[kitten].img + "' alt='Cat image' id='" + kittenName +"'>";
          $("#desc").append(kittenImage);

          $("#desc").append("<p id='click-"+ kittenName +"' class='cat-counter'></p>");

          $("#"+kittenName).click(criaCounter(kittenName));
      }
  }
};

cats.display();


