const mongoose = require('./connection')
const Schema = mongoose.Schema

const iconSchema = new Schema ({
    name: String, 
    url: String, 
    iconId: String
})

const iconModel = mongoose.model('icons', iconSchema)

//getAll
function getAllIcons() {
    return iconModel.find()
}
//getOne 
function getOneIcon(iconId) {
    return iconModel.findById(iconId)
}
//create 
function createIcon(iconInfo) {
    return iconModel.create(iconInfo)
}
//update 
function updateIcon(iconId, iconInfo) {
    return iconModel.update({_id: iconId}, iconInfo)
}
//delete 
function deleteIcon(iconId) {
    return iconModel.deleteOne({_id: iconId})
}

module.exports = {
    getAllIcons, 
    getOneIcon, 
    createIcon, 
    updateIcon, 
    deleteIcon
}