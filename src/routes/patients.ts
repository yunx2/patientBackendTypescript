import express from 'express'

import { getPublicPatient, addNewPatient } from '../services/patients'
import { toIncomingPatient } from '../utils'


const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getPublicPatient())
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