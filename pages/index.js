
import Link from 'next/link';

export default function Home() {
  return (
    <h1 className="flex">
      <Link href="/get-metadata"><div className='text-blue-500'>Get Token Metadata</div></Link>
    </h1>
  )
}
