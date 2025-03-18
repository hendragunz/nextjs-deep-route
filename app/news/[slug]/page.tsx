import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"

export default function NewsDetailPage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)

  if (!newsItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
      </header>
      <time dateTime={newsItem.date}>{newsItem.date}</time>

      <p>{newsItem.content}</p>
    </article>
  )
}