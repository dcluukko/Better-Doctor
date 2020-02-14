import $ from 'jquery';
// import 'boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorFinder } from './doctor-search';

$(document).ready(function () {
  const symptoms = new SymptomFinder()
  let prominse = symptoms.findSymptom()
  promise.then(function (response) {
    parseSymptomDate(response)
    const finder = new DoctorFinder();
  })
  $(".doctor-finder").submit(function (event) {
    event.preventDefault();

    const first = $("first-name-doc").val();
    const last = $("last-name-doc").val();
    $(".output").empty();

    let promise = finder.findDoctor(first, last);
  });
});