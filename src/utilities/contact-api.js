const BASE_URL = '/contact'


//* Send Request Function 
async function sendRequest(url, method='GET', payload=null){
   // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = {method};
  if(payload){
    options.headers = {'Content-Type': 'application/json'};
    options.body = JSON.stringify(payload);
    console.log('Stringing Payload from sendRequest!');
  }
};

export function createContact(){
    console.log('Saving contact info to database');
    return sendRequest(`${BASE_URL}/sendInfo`, 'POST', contactData)
};