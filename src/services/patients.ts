import patients from '../../data/patients'

import { PatientWithoutSSN, Patient, IncomingPatient } from '../types'

export const getPatientDataWithoutSSN = (): PatientWithoutSSN[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
}

export const addNewPatient = (patientData: IncomingPatient): Patient => {
  const id = JSON.stringify(Math.floor(Math.random() * Math.floor(100000)))
  const newPatient = {
    ...patientData,
    id
  }
  patients.push(newPatient)
  return newPatient
}
