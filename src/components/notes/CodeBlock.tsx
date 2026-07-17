import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = { code: string; language?: string }

const codeFontFamily = '"Cascadia Code", "Consolas", "Fira Code", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'

export function CodeBlock({ code, language = 'c' }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      className="code-block"
      showLineNumbers
      wrapLongLines
      lineNumberStyle={{ minWidth: '2.5em', paddingRight: '1em', color: '#a0a0a8', userSelect: 'none' }}
      customStyle={{
        margin: '18px 0',
        borderRadius: '8px',
        border: '1px solid #d7dae0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        background: '#fafafa',
        fontSize: '15.5px',
        lineHeight: '1.6',
        padding: '18px 20px',
      }}
      codeTagProps={{ style: { fontFamily: codeFontFamily } }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
