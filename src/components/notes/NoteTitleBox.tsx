import type { ReactNode } from 'react'

export function NoteTitleBox({ children }: { children: ReactNode }) {
  return <h2 className="note-title-box">{children}</h2>
}