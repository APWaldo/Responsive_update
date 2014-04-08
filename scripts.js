/**
 * @author
 */

var video = '<iframe width="560" height="315" src="http://www.youtube.com/embed/xoQEjKlZ5lI?html5=1" frameborder="0" allowfullscreen></iframe>';


$(document).ready(function() {
	setNav();
});

function setNav(){
	$(".cyclone").on("click", function(){
	$('#myModal').modal();
	$(".modal-body").html(video);
	$('#myModal').on('hidden.bs.modal', function () {
    $('#myModal iframe').removeAttr('src');
})
})};

