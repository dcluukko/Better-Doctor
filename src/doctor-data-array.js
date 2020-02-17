import { Doctor } from "../src/doctor-contact-info"

export class DoctorDataArray {
  constructor() {
    this.docArray = [];
  }
  createDocArray(firstName, lastName, street, city, state, zip, phoneNumber, newPatient, lat, long, ) {
    const newDoctor = new Doctor(firstName, lastName, street, city, state, zip, phoneNumber, newPatient, lat, long);
    this.docArray.push(newDoctor)
  }
}