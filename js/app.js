var initialCats = [
    {
        name: "Locki",
        imgSrc: "img/cat-1.jpg",
        clickCount: 0,
        nicknames:["L", "Mr. L"]
    },
    {
        name: "Charlie",
        imgSrc: "img/cat-2.jpg",
        clickCount: 0,
        nicknames:["C", "Mr. C"]
    },
    {
        name: "Jessie",
        imgSrc: "img/cat-3.jpg",
        clickCount: 0,
        nicknames:["J", "Jess", "Mr. J"]
    },
    {
        name: "Grumpy",
        imgSrc: "img/cat-4.jpg",
        clickCount: 0,
        nicknames:["G", "Mr. G"]
    },
    {
        name: "Toby",
        imgSrc: "img/cat-5.jpg",
        clickCount: 0,
        nicknames:["T", "Toto", "Mr. T"]
    },
    {
        name: "Boo",
        imgSrc: "img/cat-6.jpg",
        clickCount: 0,
        nicknames:["b", "Mr. B"]
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = "Newborn";
        } else if (clicks < 50) {
            title = "Infant";
        } else if (clicks < 100) {
            title = "Child";
        } else if (clicks < 200) {
            title = "Teenage";
        } else if (clicks < 300) {
            title = "Infant";
        } else {
            title = "Ninja";
        }
        return title;
    }, this);

};

var ViewModel = function () {
    self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem));
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount( self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());
