/*Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true*/

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balancedParens = (string) => {
    let paren = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            paren ++
        }
        if (string[i] === ')') {
            paren --
        }
    }
        return !paren
    }

    console.log(balancedParens(sample1))
    console.log(balancedParens(sample2))
    console.log(balancedParens(sample3))
    console.log(balancedParens(sample4))


