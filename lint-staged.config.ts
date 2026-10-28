import type { Configuration } from 'lint-staged'

const formatCommand =
  'oxfmt -c oxfmt.config.ts --write --disable-nested-config --no-error-on-unmatched-pattern'

export default {
  '*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}': [
    'oxlint -c oxlint.config.ts --fix --no-error-on-unmatched-pattern',
    formatCommand,
  ],
  '*.{json,jsonc,md,yaml,yml}': formatCommand,
} satisfies Configuration
