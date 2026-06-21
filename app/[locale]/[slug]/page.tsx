import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/utils/language'
import { notFound } from 'next/navigation'

export default async function LocaleCMSPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  const locales = getValidLocale(locale)

  const { data } = await optimizely.getPageByURL({
    locales: [locales],
    slug: `/${slug}`,
  })
  if (!data?.CMSPage?.item) return notFound()
  return (
    <div>
      <h1>{data?.CMSPage?.item?.title}</h1>
    </div>
  )
}
