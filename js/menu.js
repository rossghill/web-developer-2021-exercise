const manageCollectionsItem = $(".manage-modal");
const manageCollectionsModal = $(".modal");
const headerSubmenu = $(".header__submenu");

// Open modal from menu item click
function openModal(menuItem, modal) {
    menuItem.click(function (e){
        if(modal.hasClass("visible")){
            modal.removeClass("visible");
        } else {
            modal.addClass("visible");
            $(".header__submenu").removeClass("visible");
        }
    })
}

openModal(manageCollectionsItem, manageCollectionsModal);

// Open/ close nav menu 
$(".header__menu__open").click(function (e) { 
    if(headerSubmenu.hasClass("visible")){
        headerSubmenu.removeClass("visible");
    } else {
        headerSubmenu.addClass("visible");
    }   
});