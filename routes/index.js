/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Routes - Index
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.28
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express')
const router = express.Router()

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** HOME *****/
/*****/

router.get('/', (req, res) => {
  res.send('Hello World!')
})

/************************************************************/
/************************************************************/

/************************************************************/
/************************************************************/

/******************/
/***** EXPORT *****/
/******************/

module.exports = router