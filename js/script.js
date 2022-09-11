function lastModified() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var date = new Date(document.lastModified);
    display_date = months[date.getMonth()] + ' ' + date.getFullYear();
	document.getElementById("date").innerHTML = display_date
}

$(document).ready(function(){
    lastModified();
})
