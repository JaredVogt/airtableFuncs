// Create payload
let payload = {
    destinationNumber: I.destinationNumber,
    message: message,
    smsNumber: smsNumber,
    source: 'router'  // replace with automatioo name
}

// Prepare the payload to send
async function sendSMS(smsWebhook, payload) {
    // Use fetch to send a POST request
    await fetch(smsWebhook, {
        method: 'POST',  // Specify the method to use
        headers: {
            'Content-Type': 'application/json'  // Set the content type header
        },
        body: JSON.stringify(payload)  // Convert the JavaScript object to a JSON string
    })
}
