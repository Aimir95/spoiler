$(document).ready(function() {
    $('.block__title').click(function() {
        var textBlock = $(this).next('.block__text');
        textBlock.slideToggle(300); // Анимация открытия/закрытия
        $(this).toggleClass('active'); // Добавление/удаление класса active
    });
});
