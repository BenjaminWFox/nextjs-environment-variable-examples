import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig()

export default function Home({exists}) {
  const getHello = async () => {
    const response = await fetch('/api/hello', {
      method: 'GET'
    })
    const result = await response.json()

    console.log('Done!', result)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <table>
          <tr>
              <td>process.env.NEXT_PUBLIC_NAME:</td>
              <td>{process.env.NEXT_PUBLIC_NAME}</td>
            </tr>
            <tr>
              <td>process.env.SITE_ENVIRONMENT:</td>
              <td>{process.env.SITE_ENVIRONMENT}</td>
            </tr>
            <tr>
              <td>publicRuntimeConfig.publicRuntimeValue:</td>
              <td>{publicRuntimeConfig.publicRuntimeValue}</td>
            </tr>
            <tr>
              <td>serverRuntimeConfig.runtimeSecret:</td>
              {/* <td>{serverRuntimeConfig.runtimeSecret}</td> */}
            </tr>
            <tr>
              <td>serverRuntimeConfig.runtimeSitePassword:</td>
              {/* <td>{serverRuntimeConfig.runtimeSitePassword}</td> */}
            </tr>
            <tr>
              <td>getInitialProps success:</td>
              <td>{exists}</td>
            </tr>
          </table>
        </div>
        <br />
        <p>Press the button to see server variables</p>
        <button onClick={getHello}>Get Hello</button>
      </main>
    </div>
  )
}

export async function getInitialProps() {
  const { serverRuntimeConfig } = getConfig()

  // Do stuff with secrets
  const s1 = serverRuntimeConfig.runtimeSecret
  const s2 = process.env.SITE_ENVIRONMENT

  console.log('Get initial props:', s1, s2)

  return {
    props: {
      exists: !!s1 && !!s2,
    }
  }
}