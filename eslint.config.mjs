// @ts-check

import eslint from "@eslint/js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// No types available
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
// No types available
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import vitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    // Ignoring this file as some types are not available
    files: ["**/*.js", "eslint.config.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ...reactRecommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: { "react/jsx-uses-react": "off", "react/react-in-jsx-scope": "off" },
  },
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: pluginJsxA11y.configs.recommended.rules,
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.integration.tsx"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
  eslintPluginPrettierRecommended,
);
