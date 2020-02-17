// export class findSymptom {

//   async findSymptom(keyword) {
//     try {
//       let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&user_key={process.env.exports.apiKey}`);
//       let jsonifiedResponse;
//       if (response.ok && response.status == 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch (error) {
//       return error;
//     }
//   }