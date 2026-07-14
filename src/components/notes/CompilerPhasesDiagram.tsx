type Phase = { lines: string[]; y: number; h: number; variant: 'amber' | 'teal' }

const COL_CENTER_X = 280
const BOX_WIDTH = 200
const BOX_LEFT = COL_CENTER_X - BOX_WIDTH / 2
const BOX_RIGHT = COL_CENTER_X + BOX_WIDTH / 2

const PHASES: Phase[] = [
  { lines: ['LEXICAL ANALYZER'], y: 50, h: 34, variant: 'amber' },
  { lines: ['SYNTAX ANALYZER'], y: 102, h: 34, variant: 'amber' },
  { lines: ['SEMANTIC ANALYZER'], y: 154, h: 34, variant: 'amber' },
  { lines: ['INTERMEDIATE', 'CODE GENERATOR'], y: 206, h: 48, variant: 'teal' },
  { lines: ['CODE OPTIMIZER'], y: 272, h: 34, variant: 'teal' },
  { lines: ['CODE GENERATOR'], y: 324, h: 34, variant: 'teal' },
]

const SIDE_BOX_CENTER_Y = 204
const LINE_HEIGHT = 17

function multilineText(x: number, centerY: number, lines: string[], className: string) {
  return (
    <text x={x} y={centerY} textAnchor="middle" dominantBaseline="middle" className={className}>
      {lines.map((line, i) => (
        <tspan key={line} x={x} dy={i === 0 ? -((lines.length - 1) * LINE_HEIGHT) / 2 : LINE_HEIGHT}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export function CompilerPhasesDiagram() {
  return (
    <div className="phases-diagram-wrap">
      <svg className="phases-diagram" viewBox="0 0 760 450" role="img" aria-labelledby="phases-diagram-title">
        <title id="phases-diagram-title">
          Phases of a compiler: the source program passes through the lexical, syntax and semantic analyzers
          (analysis phase), then the intermediate code generator, code optimizer and code generator (synthesis
          phase) to produce the target machine code, with symbol table management and error detection and
          handling running alongside every phase.
        </title>
        <defs>
          <marker id="phaseArrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="phase-arrowhead" />
          </marker>
        </defs>

        <text x={COL_CENTER_X} y={20} textAnchor="middle" className="phase-plain">Source Program</text>
        <line className="phase-arrow" x1={COL_CENTER_X} y1={28} x2={COL_CENTER_X} y2={48} markerEnd="url(#phaseArrowhead)" />

        {PHASES.map((phase, i) => {
          const centerY = phase.y + phase.h / 2
          const next = PHASES[i + 1]
          return (
            <g key={phase.lines.join(' ')}>
              <rect x={BOX_LEFT} y={phase.y} width={BOX_WIDTH} height={phase.h} rx={4} className={`phase-box phase-box--${phase.variant}`} />
              {multilineText(COL_CENTER_X, centerY, phase.lines, `phase-box-text phase-box-text--${phase.variant}`)}
              {next && (
                <line className="phase-arrow" x1={COL_CENTER_X} y1={phase.y + phase.h} x2={COL_CENTER_X} y2={next.y} markerEnd="url(#phaseArrowhead)" />
              )}
            </g>
          )
        })}

        <line className="phase-arrow" x1={COL_CENTER_X} y1={358} x2={COL_CENTER_X} y2={378} markerEnd="url(#phaseArrowhead)" />
        <text x={COL_CENTER_X} y={396} textAnchor="middle" className="phase-plain">Target Machine Code</text>

        <g className="phase-fan">
          {PHASES.map((phase) => (
            <line key={`left-${phase.lines[0]}`} className="fan-line" x1={159} y1={SIDE_BOX_CENTER_Y} x2={BOX_LEFT} y2={phase.y + phase.h / 2} />
          ))}
          <rect x={9} y={158} width={150} height={92} rx={5} className="side-box" />
          <rect x={15} y={164} width={138} height={80} rx={3} className="side-box-inner" />
          {multilineText(84, SIDE_BOX_CENTER_Y, ['SYMBOL TABLE', 'MANAGEMENT'], 'side-box-text')}
        </g>

        <g className="phase-fan">
          {PHASES.map((phase) => (
            <line key={`right-${phase.lines[0]}`} className="fan-line" x1={401} y1={SIDE_BOX_CENTER_Y} x2={BOX_RIGHT} y2={phase.y + phase.h / 2} />
          ))}
          <rect x={401} y={158} width={150} height={92} rx={5} className="side-box" />
          <rect x={407} y={164} width={138} height={80} rx={3} className="side-box-inner" />
          {multilineText(476, SIDE_BOX_CENTER_Y, ['ERROR', 'DETECTION AND', 'HANDLING'], 'side-box-text')}
        </g>

        <g className="phase-bracket">
          <line x1={563} y1={50} x2={563} y2={188} />
          <line x1={553} y1={50} x2={563} y2={50} />
          <line x1={553} y1={188} x2={563} y2={188} />
          <text x={573} y={123}>Analysis phase</text>
        </g>
        <g className="phase-bracket">
          <line x1={563} y1={206} x2={563} y2={358} />
          <line x1={553} y1={206} x2={563} y2={206} />
          <line x1={553} y1={358} x2={563} y2={358} />
          <text x={573} y={286}>Synthesis phase</text>
        </g>
      </svg>
    </div>
  )
}
