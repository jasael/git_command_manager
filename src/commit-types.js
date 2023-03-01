export const COMMIT_TYPES = {
  feature: {
    emoji: '🆕',
    description: 'Add new feature',
    release: true
  },
  fix: {
    emoji: '🐛',
    description: 'Submit a fix to a bug',
    release: true
  },
  performance: {
    emoji: '🚀',
    description: 'Improve performance',
    release: true
  },
  docs: {
    emoji: '📚',
    description: 'Add or update documentation',
    release: false
  },
  refactor: {
    emoji: '🛠 ',
    description: 'Refactor code',
    release: false
  },
  test: {
    emoji: '🧪',
    description: 'Add or update tests',
    release: false
  },
  build: {
    emoji: '🏗 ',
    description: 'Add or update build scripts',
    release: false
  }
}
