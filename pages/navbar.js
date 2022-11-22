import Link from 'next/link'

export default function navbar() {
  return (
    <div><ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/contact">This is home page</Link>
    </li>
  </ul></div>
  )
}
