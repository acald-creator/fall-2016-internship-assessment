import "jquery";
import "magnific-popup/dist/jquery.magnific-popup";

$(function() {
	$('.popup-modal').magnificPopup({
	  type: 'inline',
	  preloader: false,
	  focus: '#username',
	  modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function(e) {
	  e.preventDefault();
	  $.magnificPopup.close();
	});
  });