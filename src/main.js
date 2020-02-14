import $ from 'jquery';
import 'boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
  $(".doctor-finder").submit(function (event) {
    event.preventDefault();

    const first = $("first-name-doc").val();
    const last = $("last-name-doc").val();
    const symptom = $("symptom").val();
  });
});