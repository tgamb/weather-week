const mongoose = require('./connection')
const Schema = mongoose.Schema

const weekdaySchema = new Schema ({
    longName: String, 
    abbreviation: String
})

const weekdayModel = mongoose.model('weekdays', weekdaySchema)

//getAll
function getAllDays() {
    return weekdayModel.find()
}
//getOne 
function getOneDay(dayId) {
    return weekdayModel.findById(dayId)
}
//create 
function createDay(dayInfo) {
    return weekdayModel.create(dayInfo)
}
//update 
function updateDay(dayId, dayInfo) {
    return weekdayModel.update({_id: dayId}, dayInfo)
}
//delete 
function deleteDay(dayId) {
    return weekdayModel.deleteOne({_id: dayId})
}

module.exports = {
    getAllDays, 
    getOneDay, 
    createDay, 
    updateDay, 
    deleteDay
}