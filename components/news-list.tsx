import Link from "next/link";

export default function NewsList({ news }: {
  news: any
}) {
  return (
    <ul className="news-list">
      {news.map((newsItem: any) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}