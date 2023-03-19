console.log('Javascript connected')

$('.carousel').on('slid.bs.carousel', function() {
    $(".project-title-list li").removeClass("active");
    $(".project-title-list li").removeAttr("aria-current");
    indicators = $(".carousel-indicators button.active").data("bs-slide-to");
    a = $(".project-title-list").find("[data-bs-slide-to='" + indicators + "']").addClass("active");
    a = $(".project-title-list").find("[data-bs-slide-to='" + indicators + "']").attr("aria-current", "true");
    console.log(indicators);
});