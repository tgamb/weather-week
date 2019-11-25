const express = require('express')
const iconApi = require('../models/icons.js')
const iconRouter = express.Router()

//getAll 
iconRouter.get('/', (req, res) => {
    iconApi.getAllIcons()
        .then((icons) => {
            res.json(icons)
        })
})
//getOne 
iconRouter.get('/:iconId', (req, res) => {
    iconApi.getOneIcon(req.params.iconId)
        .then((day) => {
            res.json(day)
        })
})
//create 
iconRouter.post('/', (req, res) => {
    iconApi.createIcon(req.body)
        .then((newIcon) => {
            res.json(newIcon)
        })
})
//update 
iconRouter.put('/:iconId', (req, res) => {
    iconApi.updateIcon(req.params.iconId, req.body)
        .then((updatedIcon) => {
            res.json(updatedIcon)
        })
})
//delete 
iconRouter.delete('/:iconId', (req, res) => {
    iconApi.deleteIcon(req.params.iconId)
        .then((icon) => {
            res.json(icon)
        })
})

module.exports = {
    iconRouter
}