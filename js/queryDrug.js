$(".select img").toggle(
    function() {
        $(this).attr("src", "img/icon_selected.png")
    },
    function() {
        $(this).attr("src", "img/icon_unselected.png")
    })
