/*MENÚ RESPONSIVE*/
$(document).ready(function(){
    $('.btn').click(function(){
        $('.items').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});
/*FI MENÚ RESPONSIVE*/


/* CALENDARI */
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        showNonCurrentDates: false,
    });
    calendar.render();
    calendar.setOption('locale', 'ca');
});
/* FI CALENDARI */