import type { ReactNode } from 'react'

export function SectionHeading({ number, children }: { number: string; children: ReactNode }) {
  return <h3 className="section-heading"><span>{number}.</span> {children}</h3>
}