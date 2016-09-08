var express = require('express');
var Candidate = require('../models/candidateModel');

var routes = function () {
  var router = express.Router();
  router.route('/')
    .post(function (request, response) {
      /*
      ex: {
        "firstName": "Juan",
        "lastName": "dela Cruz",
        "birthDate": "06/12/1898",
        "skills": [
          {
            "name": "JavaScript",
            "rating": 8
          },
          {
            "name": "HTML",
            "rating": 10
          }
        ]
      }
      */
      var candidate = new Candidate(request.body);
      candidate.save();
      response.status(201).send(candidate);
    })
    .get(function (request, response) {
      var query = {};

      // ex: /api/candidates?skill=JavaScript 9&HTML 10&node 7
      if (request.query.skill) {
        query.skills = {
          '$elemMatch': {
            '$or': []
          }
        };

        // restructure the query string into mongo query.
        request.query.skill.forEach(function (skill) {
          var details = skill.split(' ');
          query.skills.$elemMatch.$or.push({
            name: details[0],
            rating: {
              '$gte': parseInt(details[1], 10)
            }
          });
        });
      }

      Candidate.find(query, function (error, candidates) {
        if (error) {
          response.status(500).send(error);
        } else {
          response.json(candidates);
        }
      });
    });

  router.route('/:id')
    .get(function (request, response) {
      Candidate.findById(request.params.id, function (error, candidate) {
        if (error) {
          response.status(500).send(error);
        } else {
          response.json(candidate);
        }
      });
    })
    .put(function (request, response) {
      Candidate.findById(request.params.id, function (error, candidate) {
        if (error) {
          response.status(500).send(error);
        } else {
          candidate.firstName = request.body.firstName;
          candidate.lastName = request.body.lastName;
          candidate.skills = request.body.skills;
          candidate.save();
          response.json(candidate);
        }
      });
    });

  return router;
};

module.exports = routes;