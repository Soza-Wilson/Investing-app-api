import express from 'express'
import sequelize from './util/database'
import user from './model/user';
import business from './model/business';
import marketCap from './model/marketCap';
import transaction from './model/transaction';
import payment from './model/payment';
import bodyParser from 'body-parser';


const app = express();


(user).hasMany(business);
(business).belongsTo(user);
(user).hasMany(transaction);
(transaction).belongsTo(user);
(business).hasOne(marketCap);
(marketCap).belongsTo(business);
(transaction).hasOne(payment);
(payment).belongsTo(transaction)

sequelize.sync()
  .then(() => {
    console.log('tables created successfully');
  })
  .catch(err => {
    console.error('Error creating User table:', err);
  });




app.listen(5000)

