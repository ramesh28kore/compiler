import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = { code: string; language?: string }

export function CodeBlock({ code, language = 'c' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vs}
      className="code-block"
      customStyle={{ margin: '18px 0', borderRadius: '6px', fontSize: '15px', background: '#ffffff', border: '1px solid #d0d0d0' }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
