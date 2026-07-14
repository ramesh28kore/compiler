type FlowItem = { label: string; kind?: 'source' | 'process' | 'target'; note?: string }
type FlowDiagramProps = { items: FlowItem[]; vertical?: boolean }

export function FlowDiagram({ items, vertical = false }: FlowDiagramProps) {
  return (
    <div className={`flow-diagram${vertical ? ' flow-diagram--vertical' : ''}`} aria-label="Language processing flow">
      {items.map((item, index) => (
        <div className="flow-step" key={item.label}>
          <div className={`flow-node flow-node--${item.kind ?? 'process'}`}>
            <strong>{item.label}</strong>
            {item.note && <small>{item.note}</small>}
          </div>
          {index < items.length - 1 && <span className="flow-arrow" aria-hidden="true">↓</span>}
        </div>
      ))}
    </div>
  )
}