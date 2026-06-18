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

// function reduce(arr, fn, initial) {
//   // Pravimo pomoćnu rekurzivnu funkciju koja prati trenutni indeks
//   function reduceOne(index, value) {
//     // 1. BAZNI SLUČAJ (Kraj rekurzije): 
//     // Ako smo prošli sve elemente u nizu, vrati finalnu vrednost
//     if (index === arr.length) {
//       return value;
//     }

//     // 2. REKURZIVNI KORAK:
//     // Prvo izračunamo novu akumuliranu vrednost pozivanjem prosleđene funkcije 'fn'
//     // 'fn' po specifikaciji prima: (prethodnaVrednost, trenutnaVrednost, indeks, ceoNiz)
//     var newValue = fn(value, arr[index], index, arr);

//     // Zatim pozivamo ponovo istu ovu funkciju za sledeći indeks (index + 1)
//     return reduceOne(index + 1, newValue);
//   }

//   // Pokrećemo rekurziju od indeksa 0 i sa početnom vrednošću (initial)
//   return reduceOne(0, initial);
// }

// module.exports = reduce;

//  function reduce(arr, fn, initial) {
//       return (function reduceOne(index, value) {
//         if (index > arr.length - 1) return value // end condition
//         return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//       })(0, initial) // IIFE. kick off recursion with initial values
//     }

//     module.exports = reduce

// function duckCount() {
//       // SOLUTION GOES HERE
//       let args = Array.prototype.slice.call(arguments);
//       //sada je args zapravo arguments ali kao niz
//       let ducks = args.filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack');
//     });
//         return ducks.length;
      
//     }

//     module.exports = duckCount



    // function logger(namespace) {
    //   return function(...args) {//znaci ove 3 tackice pretvaraju args u niz bez .slice.call
    //     console.log.apply(console, [namespace].concat(args))
    //   }
    // }

    // module.exports = logger

//  module.exports = function(namespace) {
//       // SOLUTION GOES HERE
//       return console.log.bind(console,namespace)
//     }

// module.exports = function arrayMap(arr, fn, thisArg) {

//       return arr.reduce(function(acc, item, index, arr) {

//         acc.push(fn.call(thisArg, item, index, arr))

//         return acc

//       }, [])

//     }

//  function Spy(target, method) {
//       var originalFunction = target[method]

//       // use an object so we can pass by reference, not value
//       // i.e. we can return result, but update count from this scope
//       var result = { // ovde nismo napisali samo var count jer je samo count vredonosno
//         count: 0  // a nama treba referentno a obj je referentan
//       }

//       // replace method with spy method
//       target[method] = function() { //sada kada se napise console.log onda ce da se pokrene ova fja
//         result.count++ // track function was called
//         return originalFunction.apply(this, arguments) // invoke original function
//       }

//       return result
//     }

//     module.exports = Spy

  //  var spy = Spy(console, 'error')
  //   console.error('calling console.error')
  //   console.error('calling console.error')
  //   console.error('calling console.error')
  //   console.log(spy.count) // 3

// function repeat(operation, num) {
//       // modify this so it can be interrupted
//       if (num <= 0) return
//       operation()
//       if (num%10 == 0) {
//         setTimeout(function(){
//           repeat(operation, --num)
//         });
//       }else{
//       return repeat(operation, --num)
//       }
//     }

//     module.exports = repeat

///////////////////////

//Trampoline

//  function repeat(operation, num) {
//       return function() {
//         if (num <= 0) return
//         operation()
//         return repeat(operation, --num)
//       }
//     }

//     function trampoline(fn) {
//       while(fn && typeof fn === 'function') {
//         fn = fn()
//       }
//     }

//     module.exports = function(operation, num) {
//       trampoline(function() {
//         return repeat(operation, num)
//       })
//     }

// Async Loops

//  function loadUsers(userIds, load, done) {
//       var completed = 0
//       var users = []
//       userIds.forEach(function(id, index) {
//         load(id, function(user) {
//           users[index] = user
//           if (++completed === userIds.length) return done(users)
//         })
//       })
//     }

//     module.exports = loadUsers

// Recursion

//  function getDependencies(mod, result) {
//       result = result || []
//       var dependencies = mod && mod.dependencies || []
//       Object.keys(dependencies).forEach(function(dep) {
//         var key = dep + '@' + mod.dependencies[dep].version
//         if (result.indexOf(key) === -1) result.push(key)
//         getDependencies(mod.dependencies[dep], result)
//       })
//       return result.sort()
//     }

//     module.exports = getDependencies

// Currying

// function curryN(fn, n) {
//       n = n || fn.length
//       return function curriedN(arg) {
//         if (n <= 1) return fn(arg)
//         return curryN(fn.bind(this, arg), n - 1)
//       }
//     }

//     module.exports = curryN

//Function Call
// module.exports = Function.prototype.call.bind(Array.prototype.slice); ovo je gemini

module.exports = Function.call.bind(Array.prototype.slice)


