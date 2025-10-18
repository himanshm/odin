import js from "@eslint/js";
import drizzle from "eslint-plugin-drizzle";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      drizzle,
      prettier,
      import: importPlugin
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none",
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrors: "none"
        }
      ],
      "import/no-duplicates": "error",
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "avoid",
          printWidth: 80,
          semi: true,
          trailingComma: "none",
          useTabs: false,
          tabWidth: 2
        }
      ],
      "drizzle/enforce-delete-with-where": "error",
      "drizzle/enforce-update-with-where": "error"
      // optionally, you can pass config object form:
      // "drizzle/enforce-delete-with-where": ["error", { drizzleObjectName: ["db"] }],
    },
    languageOptions: {
      globals: globals.browser

      // If you are using TypeScript parser for these files, you may need parser & parserOptions here
    }
  },
  tseslint.configs.recommended
]);
