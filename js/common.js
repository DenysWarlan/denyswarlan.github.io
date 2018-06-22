(function ($) {
$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

});


$(document).ready(function () {
    $(function () {
        $('#form').on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                var url = "mail.php",
                    formMes = $('#btn');

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    beforeSend: function () {
                        formMes.next().text('Sending your letter...');
                    },
                    success: function (res) {
                        if (res == 0) {
                            formMes.next().text('Sent letter ');
                            formMes.next().addClass('success');
                            $('#form')[0].reset();
                            setTimeout(resetSpan, 5000);
                        } else {
                            formMes.next().text('Something was wrong.');
                            formMes.next().addClass('error');
                            setTimeout(resetSpan, 5000);
                        }
                    },
                    error: function () {
                        formMes.next().text('Something was wrong. Try later');
                        formMes.next().addClass('error');
                        setTimeout(resetSpan, 5000);

                    }
                });
                return false;
            }
        })
    });
});

function resetSpan() {
    $('.btn-form').next().text(' ');
}

})(jQuery);