import Head from 'next/head'
import Header from './Header'

const myStyle = {
    margin: 'auto',
    padding: 20,
    maxWidth: '1200px',
    backgroundColor: "lightgrey"
}


const Layout = (props)=>(
    <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
	</Head>
  	<div style={myStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default Layout
