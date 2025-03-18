import { notFound } from "next/navigation"
import { DUMMY_NEWS } from "@/dummy-news"

export default function ImagePage({params}: {
  slug: string
}) {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)

  if (!newsItem) {
    console.log("not found here")
    notFound
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  )
}