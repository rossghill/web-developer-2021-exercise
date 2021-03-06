const loadContent = function() {
    const calculateTotal = function(){
        const total = Number("3");
        return total;
    };
    let content = "<div class='results'><span>";
    const loaded  = 3;
    const total = calculateTotal();
    for (let i = 0; i < loaded; i++){
        content += "<h2>Test " + i + "</h2>";
    }
    const results = loaded == total ? "<h3>Loaded all items.</h3>" : "<h3>Failed to load all items.</h3>";
    content += results + "<span></div>";
    return content;
};

// Handle modal functionality 
function modalActions(modal, processFunc){
    // Handle modal close button 
    $(".modal__header__close").click(function (e){
        if(manageCollectionsModal.hasClass("visible")){
            manageCollectionsModal.removeClass("visible");
            $(".modal__button").addClass("visible");
            $(".results").addClass("hidden");
        } else {
            manageCollectionsModal.addClass("visible");
        }
    });
    // Handle modal process button click 
    $(".modal__button").click(function(e){
        if($(".modal__button").hasClass("visible")){
            $(".modal__button").removeClass("visible");
            $(".loader").addClass("visible");
            setTimeout(() => {
                $(".loader").removeClass("visible");
                $(".modal__header").after(loadContent());
            }, 2000);
        }
    })
}

modalActions(manageCollectionsModal, loadContent);