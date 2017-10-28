/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * DB - History
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.28
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const mongodb = require('mongodb')

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/image-search-abstraction-layer'

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient

/************************************************************/
/************************************************************/

/***********************/
/***** GET HISTORY *****/
/***********************/

/*
 * @var Function callback a callback function
 */

exports.find = (callback) => {

  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err)

    db.collection('history')
      .find({}, {'_id': 0})
      .sort({'date': -1})
      .limit(10)
      .toArray((err, result) => {
      if (err) return callback(err)
      db.close()
      return callback(null, result)
    })

  })

}

/************************************************************/
/************************************************************/

/*********************/
/***** ADD ENTRY *****/
/*********************/

/*
 * @var Function data info to keep in the history
 * @var Function callback a callback function
 */

exports.addEntry = (data, callback) => {
  
  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err)

    const item = {
      date: new Date(),
      info: data.info
    }

    db.collection('history').insertOne(item, (err, data) => {
      if (err) return callback(err)
      db.close()
      return callback(null, item)
    })
  })

}