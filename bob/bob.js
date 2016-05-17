//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

// Bob.prototype.hey = function(input) {
// //
// // YOUR CODE GOES HERE
// //
Bob.prototype.hey = function(input) {
// Spaces: Rid of Spaces
if( input.trim() == '' ) {
   return 'Fine. Be that way!';
// Shouting: Characters are Uppercase or Numbers
} else if ( input == input.toUpperCase() && /[a-zA-Z]/.test(input) ) {
   return 'Whoa, chill out!';
   //console.log([a-zA-Z].test(input));
// Questions: Last character ends in '?'
} else if( input.charAt(input.length - 1) == '?' ) {
   return 'Sure.';
// Default: Response
} else {
    return 'Whatever.';
}

};
module.exports = Bob;
