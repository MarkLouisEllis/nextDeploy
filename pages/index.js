import Layout from '../components/Layout'

export default () => (
	<Layout>
	    <h1>Developer Portfolio: Mark Louis Ellis</h1>
	    <img src="/me.jpg" height="800" />
        <style jsx>{`
            h1 {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img{
                padding-left: 262px; 
            }
        `}</style>
  </Layout>
)