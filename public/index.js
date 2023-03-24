console.log('Javascript connected');

const arrowElement = '<span class="arrow"> &#10003;  <span>';

function completePageRendering() {
  // add active class
  $(".carousel-item").first().addClass("active");
  $(".project-title-list li").first().addClass("active");
  $(".project-title-list li").first().attr("aria-current", "true");
  $(".project-title-list li").first().prepend(arrowElement);

  // change according to slides carousel second indicator
  $(".carousel").on("slid.bs.carousel", function () {
    // deal with non-active class
    $(".project-title-list li").removeClass("active");
    $(".project-title-list li").removeAttr("aria-current");
    $(".project-title-list li").find(".arrow").remove();

    // find active class
    let slide = $(".carousel-indicators button.active").data("bs-slide-to");
    $(".project-title-list")
      .find("[data-bs-slide-to='" + slide + "']")
      .addClass("active");
    $(".project-title-list")
      .find("[data-bs-slide-to='" + slide + "']")
      .attr("aria-current", "true");
      $(".project-title-list")
      .find("[data-bs-slide-to='" + slide + "']")
      .prepend(arrowElement);
  });
};

completePageRendering();
