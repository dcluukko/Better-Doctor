export class DoctorFinder {
  findDoctor(firstName, lastName) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=or-porland&skip=0&limit=10&user_key=${process.env.exports.apikey}';
      request.onload = function () {
        if (this.stats === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
  findDoctorWithSymptom(symptom) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=LOCATION&skip=0&limit=10&user_key=087341f23354429482384c102417513c';
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}