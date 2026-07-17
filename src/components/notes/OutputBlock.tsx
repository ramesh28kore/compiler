import type { ReactNode } from 'react'

type OutputBlockProps = { output: string }

const codeFontFamily = '"Cascadia Code", "Consolas", "Fira Code", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'

const palette = {
  number: '#986801',
  prompt: '#0184bc',
  keyword: '#a626a4',
  heading: '#4078f2',
  separator: '#a0a1a7',
  identifier: '#50a14f',
  text: '#383a42',
}

function highlightLine(line: string, key: number): ReactNode {
  if (/^-{3,}$/.test(line.trim())) {
    return <span key={key} style={{ color: palette.separator }}>{line}</span>
  }

  if (/^[A-Z][A-Z\s]+$/.test(line.trim()) && line.trim().length > 2) {
    return <span key={key} style={{ color: palette.heading, fontWeight: 600 }}>{line}</span>
  }

  const promptMatch = line.match(/^([A-Za-z][A-Za-z0-9 ()$/\-]*:)(\s*)(.*)$/)
  if (promptMatch) {
    const [, label, gap, rest] = promptMatch
    return (
      <span key={key}>
        <span style={{ color: palette.prompt }}>{label}</span>
        {gap}
        {tokenizeRest(rest, key)}
      </span>
    )
  }

  return <span key={key}>{tokenizeRest(line, key)}</span>
}

function tokenizeRest(text: string, lineKey: number): ReactNode {
  const parts = text.split(/(\d+|\bIdentifier\b|\bFound\b|\bNot Found\b)/g)
  return parts.map((part, i) => {
    if (/^\d+$/.test(part)) {
      return <span key={`${lineKey}-${i}`} style={{ color: palette.number }}>{part}</span>
    }
    if (part === 'Identifier') {
      return <span key={`${lineKey}-${i}`} style={{ color: palette.identifier }}>{part}</span>
    }
    if (part === 'Found' || part === 'Not Found') {
      return <span key={`${lineKey}-${i}`} style={{ color: palette.keyword, fontWeight: 600 }}>{part}</span>
    }
    return <span key={`${lineKey}-${i}`} style={{ color: palette.text }}>{part}</span>
  })
}

export function OutputBlock({ output }: OutputBlockProps) {
  const lines = output.split('\n')

  return (
    <pre
      className="output-block"
      style={{
        margin: '18px 0',
        borderRadius: '8px',
        border: '1px solid #d7dae0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        background: '#fafafa',
        color: palette.text,
        fontSize: '15.5px',
        lineHeight: '1.6',
        padding: '18px 20px',
        fontFamily: codeFontFamily,
        overflowX: 'auto',
      }}
    >
      {lines.map((line, i) => (
        <div key={i}>{line.length === 0 ? ' ' : highlightLine(line, i)}</div>
      ))}
    </pre>
  )
}
