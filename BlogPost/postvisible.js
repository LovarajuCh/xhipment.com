$("a").on("click", function () {
    var id = $(this).attr("href");
    var level = $(this).data("level");
    $(".level-" + level).addClass("hidden");
    $(id).removeClass("hidden");
});
