$(function () {
  smootscroll(1000);
});

function smootscroll(duration) {
  $("a[href^='#']").on("click", function (event) {
    var target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        duration
      );
    }
  });
}
