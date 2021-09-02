// Open/ close nav menu 
$(".header__menu__submenu").click(function (e) { 
    if($(".header__submenu").hasClass("visible")){
        $(".header__submenu").removeClass("visible");
    } else {
        $(".header__submenu").addClass("visible");
    }   
});

// Open modal from menu item click
$(".manage-modal").click(function (e){
    if($(".modal").hasClass("visible")){
        $(".modal").removeClass("visible");
    } else {
        $(".modal").addClass("visible");
        $(".header__submenu").removeClass("visible");
    }
})