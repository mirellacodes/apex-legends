import { data, Tdata } from "../data";

// functions

// get all characters info

export function getAllCharacters() {
  return data;
}

// get a character by id

// this function has an error type, not sure why?
// export function getCharacterbyID(id: Tdata) {
//   // we need to find id. iterate each character and match the id of the character's id.
//   // return only that selected id character
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id === id) {
//       return data[i];
//     }
//   }
// }

export function getCharacterbyID(id: number) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    }
  }
}
