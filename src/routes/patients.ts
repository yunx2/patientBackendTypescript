import express from 'express'

import { getPatientDataWithoutSSN, addNewPatient } from '../services/patients'
import { IncomingPatient } from '../types'


const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getPatientDataWithoutSSN())
})

router.post('/', (req, res) => {
  const { name, dateOfBirth, gender, ssn, occupation } = req.body
  const patientData: IncomingPatient = {
    name, 
    dateOfBirth,
    gender,
    ssn,
    occupation
  }
  const newPatient = addNewPatient(patientData)
  res.json(newPatient)
})

export default router