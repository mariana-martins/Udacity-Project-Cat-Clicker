// Counter
function criaCounter(cat) {
    return function () {
        cat.counter++;

        $("#click-"+cat.name).text(cat.counter);

        var back = ["#e98000","#5b9c31","#e55fc1", "#1fffaf", "#ff6f61", "#7057df", "#f2b51a", "#fef65b"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $("#click-"+cat.name).css('color',rand);
    }
}

function mostraCat (myCat) {
    $('#big-cat').html("");
    var bigCat = "<img class='cat-big' src='" + myCat.img + "' id='big-" + myCat.name +"'>";
    $("#big-cat").append(bigCat);

    var kittenTitle = "<p class='cats-name'>" + myCat.name + "</p>";
    $("#big-cat").append(kittenTitle);

    $("#big-cat").append("<p id='click-"+ myCat.name +"' class='cat-counter'>"+myCat.counter+"</p>");

    $("#big-"+myCat.name).click(criaCounter(myCat));
}

var cats = {
  cat: [
      {
          name: "Locki",
          img:"img/cat-1.jpg",
          counter: 0
      },
      {
          name: "Charlie",
          img:"img/cat-2.jpg",
          counter: 0
      },
      {
          name: "Jessie",
          img:"img/cat-3.jpg",
          counter: 0
      },
      {
          name: "Grumpy",
          img:"img/cat-4.jpg",
          counter: 0
      },
      {
          name: "Toby",
          img:"img/cat-5.jpg",
          counter: 0
      },
      {
          name: "Boo",
          img:"img/cat-6.jpg",
          counter: 0
      }
  ],
  display: function() {
      cats.cat.forEach(function(myCat) {
          var kittenName = myCat.name;

          var kittenImage = "<img class='cat-small' src='" + myCat.img + "' id='" + kittenName +"'>";
          $("#cat-list").append(kittenImage);

          $("#"+kittenName).click(function () {
              mostraCat(myCat);
          });
      });

      mostraCat(cats.cat[0]);
  }
};

cats.display();
