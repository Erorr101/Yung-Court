$(document).ready(function(){

$('ul li').click(function(){
    // This function will be called every time one of the tabs is clicked
    
    var clicked_href = $(this).children("a").attr("href");
    $("#").hide();
    $(clicked_href).show();
    
    

    
    var clicked_tab = $(this);
    
    
    // TODO Complete the next line to add the active class to the clicked tab: 
    clicked_tab.addClass('active');
    
    // TODO Complete the next line to remove the active class from the rest:
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
});

});

var sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('#page-wrapper');

sidebarBtn.addEventListener('click', function (event) {
		sidebarBtn.classList.toggle('active');
		sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', function (event) {

		if (sidebarBox.classList.contains('active')) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});

window.addEventListener('keydown', function (event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarBtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});
    
    
  function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}  
