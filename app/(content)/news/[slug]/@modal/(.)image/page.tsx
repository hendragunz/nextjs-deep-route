"use client"

import { notFound, useRouter } from "next/navigation"
import { DUMMY_NEWS } from "@/dummy-news"

export default function ImagePage({ params }: {
  params: { slug: string }
}) {
  const router = useRouter()
  const newsSlug: string = params.slug
  const newsItem: any = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  )
}