import { blocks } from '@/components/content-area/block'
import ContentAreaMapper from '@/components/content-area/mapper'
import { optimizely } from '@/lib/optimizely/fetch'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function HomePage() {
  const pageResponse = await optimizely.GetStartPage()

  const startPage = pageResponse.data?.StartPage?.item
  const blocks = (startPage?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
