export const COMMIT_TYPES = {
  feature: {
    emoji: '๐',
    description: 'Add new feature',
    release: true
  },
  fix: {
    emoji: '๐',
    description: 'Submit a fix to a bug',
    release: true
  },
  performance: {
    emoji: '๐',
    description: 'Improve performance',
    release: true
  },
  docs: {
    emoji: '๐',
    description: 'Add or update documentation',
    release: false
  },
  refactor: {
    emoji: '๐  ',
    description: 'Refactor code',
    release: false
  },
  test: {
    emoji: '๐งช',
    description: 'Add or update tests',
    release: false
  },
  build: {
    emoji: '๐ ',
    description: 'Add or update build scripts',
    release: false
  }
}
