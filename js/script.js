
let aboutOffsetTop = $("#about").offset().top;


$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffsetTop - 600) {
        // document.getElementById("navb").classList.remove("bg-transparent");
        // document.getElementById("navb").classList.add("bg-light");
        $("#navb").css({ "backgroundColor": "white", "boxShadow": "3px 3px 3px #e6dada" });
        $(".navbar .navbar-brand").css("color", "#0078ff");
        $(".navbar .nav-link ").css("color", "#0078ff");
        $(".navbar-dark .navbar-nav .nav-link").css("color", "#0078ff");
    }
    else {
        // document.getElementById("navb").classList.add("bg-transparent");
        // document.getElementById("navb").classList.remove("bg-light");
        $("#navb").css({ "backgroundColor": "transparent", "boxShadow": "none" });
        $(".navbar .navbar-brand").css("color", "#fff");
        $(".navbar .nav-link").css("color", "#fff");
        $(".navbar-dark .navbar-nav .nav-link").css("color", "#fff");
    }

    if (wScroll > 400) {
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#btnUp").fadeOut(100);
    }

})

$("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 3000);
})


$("a").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffsetDown = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffsetDown - 80 }, 1700);
})



