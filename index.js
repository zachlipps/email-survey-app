import { reach } from '../../../Library/Caches/typescript/2.6/node_modules/@types/hoek';

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
