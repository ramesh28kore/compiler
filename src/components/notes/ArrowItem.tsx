import type { ReactNode } from 'react'

export function ArrowItem({ children }: { children: ReactNode }) {
  return <p className="arrow-item"><span aria-hidden="true">→</span><span>{children}</span></p>
}