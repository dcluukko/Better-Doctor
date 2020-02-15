import { DoctorFinder } from './doctor-search';
import $ from 'jquery';
// import 'boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function parseDoctors(body) {
  body.forEach(function (doctor) {
    const name = doctor.data[0].practices[0].name;
    const street = doctor;
  });
}

$(document).ready(function () {
  const symptoms = new SymptomFinder()
  let promise = symptoms.findSymptom()
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
    promise.then(function (response) {
      $(".find-by-doc-name")[0].reset();
      parseDate(response);
    }, function (error) {
      errorMessage(error)
    })
  });

  $(".ymptom-search")
});