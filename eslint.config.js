import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended, 
  {
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module",  // Allow the use of ES modules (import/export)
      globals: { ...globals.browser, ...globals.node } // Allow global variables from both browser and Node.js environments
    },
    rules: {
      "indent": ["error", 4], // Enforces 4 spaces for indentation
      "space-infix-ops": ["error", { "int32Hint": false }], // Requires spaces around infix operators (e.g., a + b instead of a+b)
      "quotes": ["error", "single"], // Enforces the use of single quotes for strings ('string' instead of "string")
      "no-var": "error", // Disallows the use of `var`, encourages `let` or `const` instead
      "prefer-const": "error", // Requires using `const` for variables that are never reassigned
      "eqeqeq": ["error", "always"], // Enforces the use of `===` and `!==` instead of `==` and `!=`
      "no-console": "error", // Disallows the use of `console.log` and other console methods
      "no-cond-assign": ["error", "always"], // Disallows assignments in conditional expressions (e.g., if (x = 10) {...})
      "no-extra-semi": "error", // Disallows unnecessary semicolons
      "no-inline-comments": "error", // Disallows inline comments (e.g., const a = 5; // error)
      "no-else-return": "error", // Disallows `else` after `return` when unnecessary (e.g., if (x) return true; else return false; -> if (x) return true; return false;)
      "curly": ["error", "all"] // Requires curly braces `{}` for all control structures (e.g., if (x) { doSomething(); } instead of if (x) doSomething();)
    }
  }
];
