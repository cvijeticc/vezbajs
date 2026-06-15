// function repeat(operation, num) {
//       for (let index = 0; index < num; index++) {
//         operation();
//         // SOLUTION GOES HERE
//       }
//     }

//     // Do not remove the line below
//     module.exports = repeat

// function upperCaser(input) {
//       // SOLUTION GOES HERE
//       return input.toUpperCase();
//     }

//     module.exports = upperCaser

//  function doubleAll(numbers) {
//     return numbers.map(function (numbers){
//         return numbers*2;
//     })
//     }

//     module.exports = doubleAll


//    function getShortMessages(messages) {
//     return messages.filter(function(mess) {
//         return mess.message.length < 50;
//     }).map(function(mess) {
//         return mess.message;
//     });
// }

// module.exports = getShortMessages;

// function checkUsersValid(goodUsers) {
//       return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(sub){
//             return goodUsers.some(function(good) {
//                 return sub.id == good.id
//             })
//         })

//       };
//     }

//     module.exports = checkUsersValid

// function countWords(inputWords) {
//   return inputWords.reduce(function(sveska, trenutnaRec) {
    
//     // 1. Proveravamo da li reč već postoji u objektu (svesci)
//     if (sveska[trenutnaRec]) {
//       // Ako postoji, povećaj brojač za 1
//       sveska[trenutnaRec]++;
//     } else {
//       // Ako ne postoji, upiši je prvi put i postavi vrednost na 1
//       sveska[trenutnaRec] = 1;
//     }
    
//     // 2. OBAVEZNO vrati svesku za sledeći krug!
//     return sveska;

//   }, {}); // <-- Ovde kažemo: počinjemo od praznog objekta {} !
// }

// module.exports = countWords;

// function countWords(inputWords) {
//       // SOLUTION GOES HERE
//       return inputWords.reduce(function (sveska, rec) {
//         if (sveska[rec] == null) {
//             sveska[rec] =1
//         }else ++sveska[rec]
//         return sveska
//       },{})
//     }

//     module.exports = countWords
//  function reduce(arr, fn, initial) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = reduce

function reduce(arr, fn, initial) {
  // Pravimo pomoćnu rekurzivnu funkciju koja prati trenutni indeks
  function reduceOne(index, value) {
    // 1. BAZNI SLUČAJ (Kraj rekurzije): 
    // Ako smo prošli sve elemente u nizu, vrati finalnu vrednost
    if (index === arr.length) {
      return value;
    }

    // 2. REKURZIVNI KORAK:
    // Prvo izračunamo novu akumuliranu vrednost pozivanjem prosleđene funkcije 'fn'
    // 'fn' po specifikaciji prima: (prethodnaVrednost, trenutnaVrednost, indeks, ceoNiz)
    var newValue = fn(value, arr[index], index, arr);

    // Zatim pozivamo ponovo istu ovu funkciju za sledeći indeks (index + 1)
    return reduceOne(index + 1, newValue);
  }

  // Pokrećemo rekurziju od indeksa 0 i sa početnom vrednošću (initial)
  return reduceOne(0, initial);
}

module.exports = reduce;

