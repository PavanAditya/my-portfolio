$(function () {
    $('.toggles button').click(function () {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#show-all').click(function () {
        $('.post').show(500);
    });
});

function clickButton() {
    let id = document.getElementById("select-button").value;
    console.log(id);
    document.getElementById(id).click();
}