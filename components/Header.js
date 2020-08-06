import Nav from './Nav'
import Link from 'next/link'


const Header = () => {
  return (
      <header className="flex justify-between p-8 bg-gray-400 text-white items-center font-thin text-xl">
        <Link href="/"><a><h1 className="text-3xl font-bold">GoBlog</h1></a></Link>
        <Nav />
      </header>
  )
}
export default Header
