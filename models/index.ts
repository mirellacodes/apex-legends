import { data, Tdata } from "../data";

// functions

// get all characters info

export function getAllCharacters() {
  return data;
}

// get a character by id

// this function has an error type, not sure why?
export function getCharacterbyID(id: number): Tdata | undefined {
  // we need to find id. iterate each character and match the id of the character's id.
  // return only that selected id character
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    }
  }
}

// create a character
export function createCharacter(newCharacter: Tdata) {
  // get all the character and add it in the data
  data.push(newCharacter);
  return data[data.length - 1];
}

// update a character by ID
export function updateCharacter(id: number, updatedCharacter: Tdata) {
  // we need to find the position of the id
  // match the selected id with the character id
  // update it
  const foundIndex = data.findIndex(function (character) {
    return character.id === id;
  });
  return (data[foundIndex] = updatedCharacter);
}
