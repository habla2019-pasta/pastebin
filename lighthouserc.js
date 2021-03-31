module.exports = {
  ci: {
    assert: {
      assertions: {
        'apple-touch-icon': 'off',
        'html-has-lang': 'off',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'meta-description': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
        'unused-javascript': 'off',
      },
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};