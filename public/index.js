console.log('Javascript connected')

function completePageRendering() {
  // add active class
  $(".carousel-item").first().addClass("active");
  $(".project-title-list li").first().addClass("active");
  $(".project-title-list li").first().attr("aria-current", "true");

  // change according to slides carousel second indicator
  $(".carousel").on("slid.bs.carousel", function () {
    $(".project-title-list li").removeClass("active");
    $(".project-title-list li").removeAttr("aria-current");
    let slide = $(".carousel-indicators button.active").data("bs-slide-to");
    $(".project-title-list")
      .find("[data-bs-slide-to='" + slide + "']")
      .addClass("active");
    $(".project-title-list")
      .find("[data-bs-slide-to='" + slide + "']")
      .attr("aria-current", "true");

    console.log(slide);
  });
};

completePageRendering();
