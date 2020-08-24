import express from 'express'

import getPatientDataWithoutSSN from '../services/patients'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getPatientDataWithoutSSN())
})
export default router