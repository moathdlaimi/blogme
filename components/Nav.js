import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
