const mongoose = require('./connection')
const Schema = mongoose.Schema

const locationSchema = new Schema ({
    zipCode: String
})

const locationModel = mongoose.model('locations', locationSchema)

//getAll
function getAllLocations() {
    return locationModel.find()
}
//getOne 
function getOneLocation(locationId) {
    return locationModel.findById(locationId)
}
//create 
function createLocation(locationInfo) {
    return locationModel.create(locationInfo)
}
//update 
function updateLocation(locationId, locationInfo) {
    return locationModel.update({_id: locationId}, locationInfo)
}
//delete 
function deleteLocation(locationId) {
    return locationModel.deleteOne({_id: locationId})
}

module.exports = {
    getAllLocations, 
    getOneLocation, 
    createLocation, 
    updateLocation, 
    deleteLocation
}