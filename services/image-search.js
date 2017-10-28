/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Services - Image Search
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.28
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const http = require('http')
const request = require('request')
const url = require('url')

/************************************************************/
/************************************************************/

/**********************/
/***** GET IMAGES *****/
/**********************/

/*
 * @var Object req request
 * @var Function callback a callback function
 */

exports.getImages = (req, callback) => {

  const parsedUrl = url.parse(req.url, true)

  const query = {
    url: "http://api.pixplorer.co.uk/image",
    qs: {
        amount: (Object.prototype.hasOwnProperty.call(parsedUrl.query, 'amount') ? parsedUrl.query.amount : 10),
        size: (Object.prototype.hasOwnProperty.call(parsedUrl.query, 'size') ? parsedUrl.query.amount : 'l'),
        word: (Object.prototype.hasOwnProperty.call(parsedUrl.query, 'word') ? parsedUrl.query.word : '')
    }
  }

  request(query, (err, res, body) => {
    if (err) return callback(err)

    const parsed = JSON.parse(body)

    const data = {
      info: query,
      images: parsed.images,
      status: parsed.status,
      count: parsed.count
    }

    return callback(null, data)
  })

}