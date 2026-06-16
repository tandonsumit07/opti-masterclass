import { optimizely } from '@/lib/optimizely/fetch'

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const { data } = await optimizely.GetStartPage({ locales: [locale] })
  return (
    <div>
      <h1>{data?.StartPage?.item?.title}</h1>;
    </div>
  )
}
