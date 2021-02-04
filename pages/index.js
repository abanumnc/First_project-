import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      My First ting{' '}
      <Link href="/about">
        <a>Check it</a>
      </Link>
    </div>
  )
}
