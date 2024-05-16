import express from 'express'
import sequelize from './util/database'
import user from './model/user';
import business from './model/business';
import marketCap from './model/marketCap';
import transaction from './model/transaction';
import payment from './model/payment';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser)



sequelize.sync()
  .then(() => {
    console.log('User table created successfully');
  })
  .catch(err => {
    console.error('Error creating User table:', err);
  });




app.listen(5000)

