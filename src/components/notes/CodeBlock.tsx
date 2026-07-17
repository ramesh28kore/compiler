import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = { code: string; language?: string }

export function CodeBlock({ code, language = 'c' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="code-block"
      customStyle={{ margin: '18px 0', borderRadius: '6px', fontSize: '15px' }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
