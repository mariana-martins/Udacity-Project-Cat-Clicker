
function criaCounter(init) {
    var count = init || 0;
    return function() {
        count++;
        $( "#click").text(count);


        $(document).ready(function () {
            var back = ["#e98000","#5b9c31","#e55fc1", "#1fffaf", "#ff6f61", "#7057df", "#f2b51a", "#fef65b"];
            var rand = back[Math.floor(Math.random() * back.length)];
            $('#click').css('color',rand);
        })
    }
}

$('#cat').click(criaCounter(0));



