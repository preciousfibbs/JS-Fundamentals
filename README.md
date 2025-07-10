
# JS-Fundamentals

A beginner-friendly JavaScript project that includes a series of small scripts to practice key concepts like variables, loops, functions, conditionals, and argument handling using Node.js.

---

## Table of Contents

- [0. First constant, first print](#0-first-constant-first-print)
- [1. 3 languages](#1-3-languages)
- [2. Arguments](#2-arguments)
- [3. Value of my argument](#3-value-of-my-argument)
- [4. Create a sentence](#4-create-a-sentence)
- [5. An Integer](#5-an-integer)
- [6. Loop to languages](#6-loop-to-languages)
- [7. I love C](#7-i-love-c)
- [8. Square](#8-square)
- [9. Add](#9-add)
- [10. Factorial](#10-factorial)

---

## 0. First constant, first print

Prints “JavaScript is amazing” using a constant variable.  
Does not use `var`.

---

## 1. 3 languages

Prints three lines:
- “C is fun”
- “Python is cool”
- “JavaScript is amazing”

---

## 2. Arguments

Prints a message depending on the number of arguments passed:
- No argument → “No argument”
- One argument → “Argument found”
- More than one → “Arguments found”

Uses `process.argv` for reading arguments.

---

## 3. Value of my argument

Prints the first argument passed to the script.  
If no argument is passed, prints “No argument”.  
Does not use `length`.

---

## 4. Create a sentence

Prints two arguments in the format:  
`<arg1> is <arg2>`

Handles missing arguments gracefully.

---

## 5. An Integer

Prints the first argument converted to an integer:  
- Valid number → “My number: <value>”
- Invalid or missing → “Not a number”

Does not use `try/catch`.

---

## 6. Loop to languages

Uses a loop to print:
- “C is fun”
- “Python is cool”
- “JavaScript is amazing”

Does not use `if/else`, `var`, or multiple `console.log` statements.

---

## 7. I love C

Prints “C is fun” x times, where `x` is the first argument:
- If `x` is invalid → prints “Missing number of occurrences”
- Uses a loop
- Limited to two `console.log` statements

---

## 8. Square

Prints a square made of the letter `X`:
- First argument is the size
- If invalid or missing → “Missing size”
- Uses a loop
- Does not use `var`

---

## 9. Add

Defines a function to add two numbers.  
Prints the result of adding the two arguments passed.  
Handles `NaN` cases gracefully.  
No `var` allowed.

---

## 10. Factorial

Computes and prints the factorial of a number:
- Uses a recursive function
- If input is invalid or missing → factorial = 1
- Very large inputs may return `Infinity`
- No `var` used

---

## How to Run

Ensure Node.js is installed.

Use the terminal to run each script like this:


