// import getConfig from 'next/config'

// // Only holds serverRuntimeConfig and publicRuntimeConfig
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// // Will only be available on the server-side
// console.log(serverRuntimeConfig.mySecret)
// // Will be available on both server-side and client-side
// console.log(publicRuntimeConfig.staticFolder)

export default (req, res) => {
  console.log('.env - SITE_ENVIRONMENT:', process.env.SITE_ENVIRONMENT)
  console.log('.env.local - SITE_PASSWORD:', process.env.SITE_PASSWORD)
  // console.log('next.config.js - runtimeSecret:', serverRuntimeConfig.runtimeSecret)
  // console.log('next.config.js - runtimeSitePassword:', serverRuntimeConfig.runtimeSitePassword)

  res.statusCode = 200
  res.json({ name: 'John Doe', secrets: {
    '.env - SITE_ENVIRONMENT:': process.env.SITE_ENVIRONMENT,
    '.env.local - SITE_PASSWORD:': process.env.SITE_PASSWORD,
    // 'next.config.js - runtimeSecret:': serverRuntimeConfig.runtimeSecret,
    // 'next.config.js - runtimeSitePassword:': serverRuntimeConfig.runtimeSitePassword,
  } })
}
