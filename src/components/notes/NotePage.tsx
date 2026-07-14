import type { ReactNode } from 'react'

type NotePageProps = { pageNumber: string; label: string; children: ReactNode }

export function NotePage({ pageNumber, label, children }: NotePageProps) {
  return (
    <article className="note-page">
      <div className="page-meta"><span>page-{pageNumber}</span><span>{label}</span></div>
      <div className="page-content">{children}</div>
    </article>
  )
}