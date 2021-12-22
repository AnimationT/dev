var chanName;
var chanSubs;

$("#chan1Name").click(function() {
    chanName = window.prompt("What will be " + $("#chan1Name").html + "'s new channel name?");
    $("#chan1Name").text(chanName);
});