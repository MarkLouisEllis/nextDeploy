import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  color:'black',
  fontWeight: 'bold'
  
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
        <style jsx>{`
        a:hover{
            background-color:grey;
            text-decoration: none;
        }
        `}</style>
    </div>
    
)

export default Header