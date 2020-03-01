import { DoctorFinder } from './doctor-search.js';
import { DoctorDataArray } from './doctor-data-array.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//show doctors s
function showDoctorInfo(doctors) {
  for (let i = 0; i < doctors.length; i++) {
    $(".output").append(
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title"> ${doctors[i].profile.first_name} ${doctors[i].profile.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> ${doctors[i].practices[0].visit_address.street} ${doctors[i].practices[0].visit_address.city}, ${doctors[i].practices[0].visit_address.state} ${doctors[i].practices[0].visit_address.zip}</h6>
      <p class="card-text">Phone Number: ${doctors[i].practices[0].phones[0].number}<br><p>Taking new patients? ${doctors[i].practices[0].accepts_new_patients}</p>
      <p>${doctors[i].practices[0].website ? "Website: " + doctors[i].practices[0].website : "There is no website available at this time."}</p>
      </div >
      </div > `
    )
  }
}

function parseData(response) {
  let body = response;
  const data = body.data;
  if (data.length === 0) {
    $("#nomatch").show();
  } else {
    $("#nomatch").hide();
    showDoctorInfo(data);
  }
}

function errorMessage(error) {
  $("#nomatch").show();
  $(".alert").html(`There was error processing your query: ${error.message} `)
}

$(document).ready(function () {
  const finder = new DoctorFinder();

  $(".find-doc-by-name").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    $(".output").empty();
    let promise = finder.findDoctorByName(name);
    promise.then(function (response) {
      $(".find-doc-by-name")[0].reset();
      parseData(response);
    }, function (error) {
      errorMessage(error)
    })
  });
});