import { DoctorFinder } from './doctor-search.js';
// import { DoctorDataArray } from 'src/doctor-data-array.js';
// import { Doctor } from './doctor-contact-info';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//show doctors 
function showDoctorInfo(doctors) {
  for (let i = 0; i < doctors.length; i++) {
    $(".output").append(
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title"> ${doctors[i].firstName} ${doctors[i].lastName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${doctors[i].spec}</h6
      <h6 class="card-subtitle mb-2 text-muted"> ${doctors[i].street} ${doctors[i].city}, ${doctors[i].state} ${doctors[i].zip}</h6>
      <p class="card-text">Phone Number: ${doctors[i].phoneNumber}<br><p>Taking new patients? ${doctors[i].newPatient}</p>
      </div>
      </div>`)
  }
}

function parseData(response) {
  let body = JSON.parse(response);
  const data = body.data;
  const doctorData = new DoctorData();
  doctorData.createAllDocs(data);
  const allDocs = doctorData.allDocs;
  if (allDocs.length === 0) {
    $("#no-doctors").show();
  } else {
    $("#no-doctors").hide();
    showDoctorInfo(allDocs)
  }
}

function parseSymptomData(response) {
  let body = JSON.parse(response);
  const allSymptoms = body.data;
  const allSymptomsArray = [];
  for (let i = 0; i < allSymptoms.length; i++) {
    allSymptomsArray.push(`<option value="${allSymptoms[i].name}">${allSymptoms[i].name}</option>`);
  }
  $("#keyword").html(allSymptomsArray.join(''));
}

function errorMessage(error) {
  $("#error").show();
  $(".error").html(`There was error processing your query: ${error.message}`)
}

$(document).ready(function () {

  $(".find-doc-by-name").submit(function (event) {
    event.preventDefault();
    const name = $("name").val();
    $(".output").empty();
    let promise = finder.findDoctorByName(name);
    promise.then(function (response) {
      $(".find-doc-by-name")[0].reset();
      parseData(response);
    }, function (error) {
      errorMessage(error)
    })
  });

  $(".symptom-search").submit(function (event) {
    event.preventDefault();
    const keyword = $("#symptom").val();
    $(".output").empty();
    let promise = finder.findDoctorByKeyword(keyword);
    promise.then(function (response) {
      $(".symptom-search")[0].reset();
      parseData(response);
    }, function (error) {
      errorMessage(error)
    })
  });
  const symptoms = new SymptomFinder()
  let promise = symptoms.findSymptom()
  promise.then(function (response) {
    parseSymptomData(response)
    const finder = new DoctorFinder();
  })
});