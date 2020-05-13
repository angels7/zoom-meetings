const sequelize = require('../database/sequelize')
var Sequelize = require('sequelize');
const express = require('express');
const app = express();

var Data = sequelize.define('data', {
    subject: Sequelize.STRING,
    MEETINGID: Sequelize.STRING,
    Password: Sequelize.STRING
});

sequelize.sync().then(function () {
    Data.create({
         subject: 'English',
         MEETINGID: '1111111',
         Password: '1111'
    })

    Data.create({
        subject: 'Mathematics',
        MEETINGID: '2222222',
        Password: '2222'
    })
        
    Data.create({
        subject: 'Spanish',
        MEETINGID: '4444444',
        Password: '4444'
    })
});

module.exports = Data;
