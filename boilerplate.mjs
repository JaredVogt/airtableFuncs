// https://raw.githubusercontent.com/JaredVogt/airtableFuncs/main/boilerplate.mjs
// FIXME Enter the name of the automation here and any relevant description 

const P = console.log
const T = console.table

// Airtable in/out functions
const I = input.config()  // get data from previous automation
const O = output.set()  // create data for next automation
const baseUrl = 'https://hooks.airtable.com/workflows/v1/genericWebhook/'  // append specific webhook

// SMS specific
const message = I.message.toLocaleLowerCase() // this will be the SMS message from the router
const keyword = message.split(' ')[0]  // only get the first word to lookup in keywords
