//@ts-nocheck
import { tanstackConfig } from '@tanstack/eslint-config'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['eslint.config.js', 'node_modules'],
  },
  ...tanstackConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
    // Custom rules go here
  },
]
