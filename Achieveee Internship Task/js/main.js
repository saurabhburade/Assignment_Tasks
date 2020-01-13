$('.menuBtn').click(() => {
    $(".menuitems").toggle('3000')
})

if ($(window).width() <= 700) {
    $(".menuitems").hide()
}