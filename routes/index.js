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

const imageSearch = require('../services/image-search')
const historyQuery = require('../db/history')

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

/*****/
/***** IMAGES *****/
/*****/

router.get('/images', (req, res) => {

  imageSearch.getImages(req, (err, data) => {

    if (err) {
      res.send({error: 'Error while getting images', err: err, data: data})
      return
    } 

    historyQuery.addEntry(data, (err, result) => {

      if (err) {
        res.send({error: 'Error while insterting data in history', err: err, data: data})
        return
      } 

      res.send({images: data.images, status: data.status, count: data.count})
      return

    })

  })

})

/*****/
/***** HISTORY *****/
/*****/

router.get('/history', (req, res) => {
	historyQuery.find((err, data) => {

    if (err) {
      res.send({error: 'Error while getting history', err: err, data: data})
      return
    } 

    res.send({data})
    return
  })
})

/************************************************************/
/************************************************************/

/************************************************************/
/************************************************************/

/******************/
/***** EXPORT *****/
/******************/

module.exports = router