/* eslint-disable @typescript-eslint/no-explicit-any */
import { IncomingPatient, Gender } from './types'

/* type guards are for type validation; return a boolean which has a return type of type predicate */

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String
}

const isDate = (dateOfBirth: string): boolean => { // this is not a type guard because the dateOfBirth field is supposed to be type string; isDate checks if that string represents a valid date
  return Boolean(Date.parse(dateOfBirth))
}

const isGender = (value: any): value is Gender => {
  return Object.values(Gender).includes(value)
}

/* parsers for each field in requestBody; parsers will map the fields of unknown type in requestBody to fields conforming to IncomingPatient type  */

const parseName = (name: any): string => {
  if (!name || !isString(name)) { 
    throw new Error(`incorrect or missing name: ${name}`)
  }
  return name // here, after type guard isString is called, name is no long type 'any', but type 'string'
}

const parseSSN = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error(`incorrect or missing SSN: ${ssn}`)
  }
  return ssn
}

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`incorrect or missing occupation: ${occupation}`)
  }
  return occupation
}

const parseDateOfBirth = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`incorrect or missing date of birth: ${date}`)
  }
  return date
}

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`incorrect or missing gender: ${gender}`)
  }
  return gender
}

// toIncomingPatient function takes req.body as parameter; returns properly typed IncomingPatient object; function called toIncomingPatient since it takes an object and returns an IncomingPatient, like how toString takes a parameter and returns a string
// toIncomingPatient used in post route handler to validate incoming data

export const toIncomingPatient = (requestBody: any): IncomingPatient => {
  return {
    name: parseName(requestBody.name),
    dateOfBirth: parseDateOfBirth(requestBody.dateOfBirth),
    gender: parseGender(requestBody.gender),
    ssn: parseSSN(requestBody.ssn),
    occupation: parseOccupation(requestBody.occupation)
  }
} 
