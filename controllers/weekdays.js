const express = require('express')
const weekdayApi = require('../models/weekdays.js')
const weekdayRouter = express.Router()

//getAll 
weekdayRouter.get('/', (req, res) => {
    weekdayApi.getAllDays()
        .then((days) => {
            res.json(days)
        })
})
//getOne 
weekdayRouter.get('/:dayId', (req, res) => {
    weekdayApi.getOneDay(req.params.dayId)
        .then((day) => {
            res.json(day)
        })
})
//create 
weekdayRouter.post('/', (req, res) => {
    weekdayApi.createDay(req.body)
        .then((newDay) => {
            res.json(newDay)
        })
})
//update 
weekdayRouter.put('/:dayId', (req, res) => {
    weekdayApi.updateDay(req.params.dayId, req.body)
        .then((updatedDay) => {
            res.json(updatedDay)
        })
})
//delete 
weekdayRouter.delete('/:dayId', (req, res) => {
    weekdayApi.deleteDay(req.body)
        .then((newDay) => {
            res.json(newDay)
        })
})

module.exports = {
    weekdayRouter
}