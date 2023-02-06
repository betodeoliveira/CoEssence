var dateclass = 'post-date_translate';

$(document).ready(function() {
  var wfdc = $('.' + dateclass);

  wfdc.each(function() {
    var wfdctxt = $(this).text();

    var monthsEn = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    var monthsDe = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag'
    ];

    for (var i = 0; i < monthsEn.length; i++) {
      wfdctxt = wfdctxt.replace(monthsEn[i], monthsDe[i]);
    }

    $(this).text(wfdctxt);
  });
});