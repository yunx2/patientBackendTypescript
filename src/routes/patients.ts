import express from 'express'

import { getPublicPatients, addNewPatient, getPatientById } from '../services/patients'
import { toIncomingPatient } from '../utils'


const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getPublicPatients())
})

router.get('/:id', (req, res) => {
  const patientId = req.params.id;
  res.send(getPatientById(patientId));
})

router.post('/', (req, res) => {
  try {
    const incomingPatientData = toIncomingPatient(req.body)
    const newPatient = addNewPatient(incomingPatientData) // add id
    res.json(newPatient)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

export default router