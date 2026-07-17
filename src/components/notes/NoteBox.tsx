import type { ReactNode } from 'react'

export function NoteBox({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="note-box"><strong>{title}</strong><div>{children}</div></aside>
}