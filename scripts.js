/**
 * @author
 */

var video = '<iframe width="560" height="315" src="http://www.youtube.com/embed/xoQEjKlZ5lI?html5=1" frameborder="0" allowfullscreen></iframe>';

var moreInfo ={
	"cycloneInfo" : "This is more info about the cyclone.",
	"wonderwheelInfo" : "This is more info about the wonderwheel.",
	"parachuteInfo" : "This is more info about the parachute.",
}

$(document).ready(function() {
	setNav();
});

function setNav(){
	$(".btn-success").on("click", function(e){
	console.log(e.target.id);
	var myID = e.target.id;
	var propname = myID+"Info";
	$("#"+myID+"Div").append(moreInfo[propname]);
	console.log(e.target.parentNode);
	
	//$(e.target.parentNode).append(moreInfo[propname])
	
	
})
};
