export class DoctorFinder {

  async findDoctor(firstName, lastName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${firstName}&last_name=${lastName}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=100&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
  async findDoctorWithSymptom(symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=100&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}
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
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apikey}';
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