var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.travel');
	img.style.display = 'none';
	document.querySelector('.skills').style.marginLeft = '50px';
}

// $(function () {
// 	$(window).scroll(function() {
// 	    $('#learn .section-title').each(function(){
// 	        var imagePos = $(this).offset().top;

// 	        var topOfWindow = $(window).scrollTop();
// 	        if (imagePos < topOfWindow+650) {
// 	            $(this).addClass("fadeInLeft");
// 	        }
// 	    });
// 	});