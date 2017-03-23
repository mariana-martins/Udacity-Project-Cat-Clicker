var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Jessie");
    this.imgSrc = ko.observable("img/cat-1.jpg");

    this.incrementCounter = function() {
        this.clickCount( this.clickCount() + 1);
    }
};

ko.applyBindings(new ViewModel());