import patients from '../../data/patients'

import { PublicPatient, Patient, IncomingPatient, Entry } from '../types'

export const getPublicPatients = (): PublicPatient[] => {
  const entries:Entry[] = []
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }))
}

export const addNewPatient = (patientData: IncomingPatient): Patient => {
  const id = JSON.stringify(Math.floor(Math.random() * Math.floor(100000)))
  const entries:Entry[] = [];
  const newPatient = {
    ...patientData,
    id,
    entries
  }
  patients.push(newPatient)
  return newPatient
}

export const getPatientById = (id: string): Patient | undefined=> {
  const fetched = patients.find(patient => patient.id === id);
  return fetched;
} 