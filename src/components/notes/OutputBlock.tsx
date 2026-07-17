type OutputBlockProps = { output: string }

const codeFontFamily = '"Cascadia Code", "Consolas", "Fira Code", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'

export function OutputBlock({ output }: OutputBlockProps) {
  return (
    <pre
      className="output-block"
      style={{
        margin: '18px 0',
        borderRadius: '8px',
        border: '1px solid #d7dae0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        background: '#fafafa',
        color: '#1e1e1e',
        fontSize: '15.5px',
        lineHeight: '1.6',
        padding: '18px 20px',
        fontFamily: codeFontFamily,
        overflowX: 'auto',
      }}
    >
      {output}
    </pre>
  )
}
