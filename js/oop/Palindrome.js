import { parseString } from "../helper.js";

export class Palindrome {
  /** @type {string} */
  value;

  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = parseString(value);
  }

  /**
   * Determine whether the given value is a palindrome or not using reverse method.
   * @returns {boolean}
   */

  isPalindromeUsingReverse() {
    const cleanValue = this.value;

    const reversedValue = cleanValue.split("").reverse().join("");

    return cleanValue === reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using loop method.
   * @returns {boolean}
   */

  isPalindromeUsingLoop() {
    const cleanValue = this.value;

    const length = cleanValue.length;

    for (let index = 0; index < Math.floor(length / 2); index++) {
      if (cleanValue[index] !== cleanValue[length - index - 1]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive method.
   * @param {number} index 
   * @returns {boolean}
   */

  isPalindromeUsingRecursive(index = 0) {
    const cleanValue = this.value;

    const length = cleanValue.length;

    if (index >= Math.floor(length / 2)) {
      return true;
    }

    if (cleanValue[index] !== cleanValue[length - 1 - index]) {
      return false;
    }

    return this.isPalindromeUsingRecursive(index + 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;

    const method = event.target["method"].value;

    const palindromeInstance = new Palindrome(word);

    let isPalindrome;

    if (method === "reverse") {
      isPalindrome = palindromeInstance.isPalindromeUsingReverse();
    } else if (method === "loop") {
      isPalindrome = palindromeInstance.isPalindromeUsingLoop();
    } else if (method === "recursive") {
      isPalindrome = palindromeInstance.isPalindromeUsingRecursive();
    } else {
      throw new Error("Method must be reverse, loop or recursive.")
    }

    const result = isPalindrome
      ? "Yes, this word is palindrome."
      : "No, this word is not palindrome.";

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
