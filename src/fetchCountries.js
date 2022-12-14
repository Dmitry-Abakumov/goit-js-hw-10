import toastr from 'toastr';

import './toastr-config';
import 'toastr/build/toastr.min.css';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FIELDS = `name,capital,population,flags,languages`;

export const fetchCountries = async name => {
  const response = await fetch(`${BASE_URL}${name}?fields=${FIELDS}`);
  return !response.ok ? new Error(response.status) : await response.json();
};

// export const fetchCountries = name => {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const FIELDS = `name,capital,population,flags,languages`;

//   return fetch(`${BASE_URL}${name}?fields=${FIELDS}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     })
//     .catch(error => {
//       toastr.error('Oops, there is no country with that name');
//     });
// };
