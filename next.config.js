module.exports = {
  images: {
    domains: ['imgix.cosmicjs.com'],
    unoptimized: true,
  },
  output: 'export',
  webpack: config => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true }
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config
  },
  trailingSlash: true,
}
