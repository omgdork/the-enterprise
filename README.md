# The Enterprise

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing
1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running.

3. Run `gulp` to start the server. Go to http://localhost:8000. (8000 is the default port. You can change this in gulpfile.js.)

### How to Use
1. Install [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) on Chrome to test the API.

2. Adding candidates
  2.1 Select POST and enter `http://localhost:8000/api/candidates` in the request URL.
  
  2.2 Add Content-Type as key and application/json as value in the headers.
  
  2.3 Add the candidate in the following format:
    ```
    {
      "firstName": "Juan",
      "lastName": "dela Cruz",
      "skills": [
        { "name": "HTML", "rating": 10 },
        { "name": "JavaScript", "rating": 9 }
      ]
    }
    ```
    
  2.4 Hit Send.
  
3. Searching for Candidates
  3.1 Select GET and enter `http://localhost:8000/api/candidates?skill={skillName} {skillRating}&skill={skillName} {skillRating}` in the URL. You can search for more skills by adding `&{skillName} {skillRating}` to the URL. Don't forget to remove the `{}`.
  
  3.2 Add Content-Type as key and application/json as value in the headers.
  
  3.3 Hit Send.
