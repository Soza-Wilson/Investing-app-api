import express from 'express'
import sequelize from './util/database'


const app = express();




sequelize
  .sync()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });



app.listen(5000)

