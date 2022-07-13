import { RecoilRoot } from "recoil"
import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/Header.scss"
import "../styles/Navbar.scss"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
