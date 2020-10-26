// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default (req, res) => {
  console.log('.env - SITE_ENVIRONMENT:', process.env.SITE_ENVIRONMENT)
  console.log('.env.local - SITE_PASSWORD:', process.env.SITE_PASSWORD)
  console.log('next.config.js - runtimeSecret:', serverRuntimeConfig.runtimeSecret)
  console.log('next.config.js - runtimeSitePassword:', serverRuntimeConfig.runtimeSitePassword)

  res.statusCode = 200
  res.json({ name: 'John Doe', secrets: {
    '.env - SITE_ENVIRONMENT:': process.env.SITE_ENVIRONMENT,
    '.env.local - SITE_PASSWORD:': process.env.SITE_PASSWORD,
    'next.config.js - runtimeSecret:': serverRuntimeConfig.runtimeSecret,
    'next.config.js - runtimeSitePassword:': serverRuntimeConfig.runtimeSitePassword,
  } })
}
