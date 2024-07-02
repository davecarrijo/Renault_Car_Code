import * as Stored_Codes from "../assets/Data/Renault_2";

let Nice_Codes = Stored_Codes;
const words = Nice_Codes;
function search(term) {
  for (var i = 0, len = words.length; i < len; i++) {
    if (words[i] === term) {
      console.log(words[i] + " is found at " + i);
    }
  }
}

search("0041");
