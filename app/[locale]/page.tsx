import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/utils/language'

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const locales = getValidLocale(locale)

  const { data } = await optimizely.GetStartPage({ locales: [locales] })
  return (
    <div>
      <h1>{data?.StartPage?.item?.title}</h1>;
    </div>
  )
}
