const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { componentsData } = require('./componentsData.schemaObject');

// Define schema
const componentsDataSchema = new Schema(componentsData, { collection: 'componentsData', timestamps: true });

module.exports.componentsData = componentsDataSchema;
