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
