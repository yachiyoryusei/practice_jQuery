'use strict';
$(function () {
    var num = 0;
    for (i = 0; i <= 10; i++) {
        num += i;
    }
    $('p').html('変数numの値は' + num + 'です');
});

