

var model = {
    cats: [
        {
            name: "Locki",
            img: "img/cat-1.jpg",
            counter: 0
        },
        {
            name: "Charlie",
            img: "img/cat-2.jpg",
            counter: 0
        },
        {
            name: "Jessie",
            img: "img/cat-3.jpg",
            counter: 0
        },
        {
            name: "Grumpy",
            img: "img/cat-4.jpg",
            counter: 0
        },
        {
            name: "Toby",
            img: "img/cat-5.jpg",
            counter: 0
        },
        {
            name: "Boo",
            img: "img/cat-6.jpg",
            counter: 0
        }
    ],
    currentCat: {},

    init: function() {
        this.currentCat = this.cats[0];
    },

    getAllCats: function() {
        return this.cats;
    },

    getCurrentCat: function() {
        return this.currentCat;
    },

    changeCurrentCat: function(newCat) {
        this.currentCat = newCat;
    }
};

var octopus = {

    init: function() {
        model.init();
    },

    getAllCats: function() {
        return model.getAllCats();
    },

    getCurrentCat: function() {
        return model.getCurrentCat();
    },

    changeCurrentCat: function(newCat) {
        model.changeCurrentCat(newCat);
    },

    incrementCurrentCat:function() {
        model.getCurrentCat().counter++;
    }
};

var view = {

    init: function() {
        octopus.init();
        this.display();
    },

    display: function() {
        this.displayCatList();
        this.displayCat();
    },

    displayCatList: function () {
        var catList = $("#cat-list");
        octopus.getAllCats().forEach(function (myCat) {

            var kittenName = myCat.name;
            var kittenImage = myCat.img;

            var elememt = "<img class='cat-small' src='" + kittenImage + "' id='" + kittenName + "'>";
            catList.append(elememt);

            $("#" + kittenName).click(function () {
                octopus.changeCurrentCat(myCat);
                view.displayCat();
            });
        });
    },

    displayCat: function() {
        var currentCat = octopus.getCurrentCat();

        var kittenName = currentCat.name;
        var kittenImage = currentCat.img;
        var kittenCounter = currentCat.counter;

        var domElement = $('#big-cat');
        domElement.html("");

        var bigCatImage = "<img class='cat-big' src='" + kittenImage + "' id='big-" + kittenName + "'>";
        domElement.append(bigCatImage);

        var bigCatTitle = "<p class='cats-name'>" + kittenName + "</p>";
        domElement.append(bigCatTitle);

        var bigCatClick = "<p id='click-" + kittenName + "' class='cat-counter'>" + kittenCounter + "</p>";
        domElement.append(bigCatClick);

        $("#big-" + kittenName).click(function () {
            octopus.incrementCurrentCat();
            view.displayCatCounter();
        });
    },

    displayCatCounter: function() {
        var cat = octopus.getCurrentCat();

        var counterElement = $("#click-" + cat.name);
        counterElement.text(cat.counter);

        var back = ["#e98000", "#5b9c31", "#e55fc1", "#1fffaf", "#ff6f61", "#7057df", "#f2b51a", "#fef65b"];
        var rand = back[Math.floor(Math.random() * back.length)];
        counterElement.css('color', rand);
    }
};

view.init();
