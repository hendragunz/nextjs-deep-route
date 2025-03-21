
import NewsList from '@/components/news-list'
import Link from 'next/link'
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from '@/lib/news'

export default function FilteredNewsPage({ params }: {
  params: any
}) {
  const filter: string[] = params.filter
  const selectedYear: string = filter?.[0]
  const selectedMonth: string = filter?.[1]

  let news: Array<any> = [];
  let links: Array<string> = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
   news = getNewsForYear(selectedYear)
   links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  let availableNewYears: number[] = getAvailableNewsYears()
  let availableNewsMonths: number[] = []

  if (selectedMonth) {
    availableNewsMonths = getAvailableNewsMonths(selectedYear)
  }

  if (
    (selectedYear && !availableNewYears.includes(+selectedYear)) ||
    (selectedMonth && !availableNewsMonths.includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter.')
  }


  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {
              links.map((link) => {
                const href = selectedYear
                  ? `/archive/${selectedYear}/${link}`
                  : `/archive/${link}`;

                return (
                  <li key={link}>
                    <Link href={href}>
                      {link}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}