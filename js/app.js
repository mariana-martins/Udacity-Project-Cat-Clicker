var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Jessie");
    this.imgSrc = ko.observable("img/cat-1.jpg");
    this.nicknames = ko.observableArray(["J", "Jess", "Mr. J"]);

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
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().clickCount( this.currentCat().clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());