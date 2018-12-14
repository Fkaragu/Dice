$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        $(".person1").append(person1Input);
        $("#story").show();
        event.preventDefault();
    });
});
