const express = require('express')
const locationApi = require('../models/locations.js')
const locationRouter = express.Router()

//getAll 
locationRouter.get('/', (req, res) => {
    locationApi.getAllLocations()
        .then((locations) => {
            res.json(locations)
        })
})
//getOne 
locationRouter.get('/:locationId', (req, res) => {
    locationApi.getOneLocation(req.params.iconId)
        .then((location) => {
            res.json(location)
        })
})
//create 
locationRouter.post('/', (req, res) => {
    locationApi.createLocation(req.body)
        .then((newLocations) => {
            res.json(newLocation)
        })
})
//update 
locationRouter.put('/:locationId', (req, res) => {
    locationApi.updateLocation(req.params.iconId, req.body)
        .then((updatedLocation) => {
            res.json(updatedLocation)
        })
})
//delete 
locationRouter.delete('/:locationId', (req, res) => {
    locationApi.deleteLocation(req.params.iconId)
        .then((location) => {
            res.json(location)
        })
})

module.exports = {
    locationRouter
}