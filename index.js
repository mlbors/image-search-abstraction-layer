/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Image Search Abstraction
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
const mongodb = require('mongodb')
const favicon = require('serve-favicon')
const path = require('path')

const index = require('./routes/index')

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const hostname = '0.0.0.0'
const port = process.env.PORT || 4000
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/image-search-abstraction-layer'

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient

/************************************************************/
/************************************************************/

/***************/
/***** APP *****/
/***************/

const app = express('mongodb')

MongoClient.connect(dbURL, (err, db) => {

  if (err) {
    throw new Error('Database failed to connect!')
  } else {
      console.log('Successfully connected to MongoDB on port 27017.')
  }

  /************************************************************/
  /************************************************************/

  /******************/
  /***** ROUTES *****/
  /******************/

  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

  app.use('/', index)

  app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  /************************************************************/
  /************************************************************/

  /******************/
  /***** LISTEN *****/
  /******************/

  app.listen(port, hostname, () => {
    console.log('Server running at http://${' + hostname + '}:${' + port + '}/')
  })

})