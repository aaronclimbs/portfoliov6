import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/aaronkeisler.png"
          height="85"
          width="250"
          alt="Aaron Keisler"
        />
        <h1>Aaron Keisler</h1>
        <h2>
          Aaron Keisler is a full-stack JavaScript engineer with a passion for
          creating high-performance web applications. He is currently working at
          SentiLink, a startup focused on building a more efficient web
          experience for users.
        </h2>

        <Features />

        <div className="explanation">
          <p>
            Aaron Keisler is a full-stack JavaScript engineer with a passion for
            creating high-performance web applications. He is currently working
            at SentiLink, a startup focused on building a more efficient web
            experience for users.
          </p>
        </div>
      </div>
    </>
  )
}
