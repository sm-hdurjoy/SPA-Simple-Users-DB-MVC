const connection = require('../dbService')
const User = require('../model/User')

async function getAllData() {
  try {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM names;";

      connection.query(query, (err, result) => {
        if (err) reject(new Error(err.message));
        let users = [];
        result.forEach(element => {
          users.push(new User(element.id, element.name, element.date_added))
        });
        resolve(users);
      });
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getAllData