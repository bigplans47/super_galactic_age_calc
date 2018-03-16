import { Calculator } from './age_logic';
import $ from 'jquery';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var age1 = $('#age1').val();
    var output = new Calculator(age1);
    output.func_age_in_seconds()
    console.log(output);
    $('#solution').append("<li>"+"Your age in years is: " + output.age + ". Your age in seconds is: " + output.age_in_seconds  + "."+"</li>");
  });
});
