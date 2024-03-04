// EXAMPLE 1 - Get the Status Code of a Fetch HTTP Response

async function makeRequest() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    console.log('response.status: ', response.status); // 👉️ 200
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using Promise.then() instead of async/await

// function makeRequest() {
//   fetch('https://randomuser.me/api/')
//     .then(response => {
//       console.log('response.status: ', response.status); // 👉️ 200
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// makeRequest();

// ------------------------------------------------------------------

// // EXAMPLE 3 - A complete example of handling errors when using `fetch`

// async function makeRequest() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');

//     console.log('status code: ', response.status); // 👉️ 200

//     if (!response.ok) {
//       console.log(response);
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// makeRequest();
