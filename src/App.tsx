import './App.css'
import { ArrowItem, CompilerPhasesDiagram, DataTable, FlowDiagram, NoteBox, NotePage, NoteTitleBox, SectionHeading } from './components/notes'

function App() {
  return (
    <main className="notes-app">
      <header className="app-header">
        <p className="eyebrow">CDUNIT I · R22</p>
        <h1>Compiler Design</h1>
        <p className="header-note">A clean study sheet from the handwritten scans</p>
      </header>

      <div className="notes-stack">
        <NotePage pageNumber="02" label="Syllabus">
          <NoteTitleBox>Syllabus of Compiler Design (R22) - Unit 1</NoteTitleBox>
          <SectionHeading number="1">Introduction</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Structure of a compiler</ArrowItem>
            <ArrowItem>Science of building a compiler</ArrowItem>
            <ArrowItem>Programming language basics</ArrowItem>
          </div>
          <SectionHeading number="2">Lexical Analysis</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>The Role of the Lexical Analyzer</ArrowItem>
            <ArrowItem>Input Buffering</ArrowItem>
            <ArrowItem>Recognition of Tokens</ArrowItem>
            <ArrowItem>The Lexical-Analyzer Generator Lex</ArrowItem>
            <ArrowItem>Finite Automata</ArrowItem>
            <ArrowItem>From Regular Expressions to Automata</ArrowItem>
            <ArrowItem>Design of a Lexical-Analyzer Generator</ArrowItem>
            <ArrowItem>Optimization of DFA-Based Pattern Matchers</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="03" label="Introduction">
          <NoteTitleBox>Introduction</NoteTitleBox>
          <p className="note-copy">
            A compiler is a Software that converts a high-level language(Source Language) written by a programmer into a low-level language
           ( object, target, or machine language) that can be understood by a computer.
          </p>
          <FlowDiagram
            items={[
              { label: 'High Level Language', kind: 'source' },
              { label: 'Compiler', kind: 'process', note: 'compilation error' },
              { label: 'Low Level Language', kind: 'target' },
            ]}
          />

          <strong>High level Language</strong>  :  Humans Understands <br></br>          <strong>Low Level Language</strong> : Computer Understands
          <SectionHeading number="1">Language Processing Systems</SectionHeading>
          <p className="note-copy">
            We know that a computer is a logical combination of hardware and software. Hardware understands only machine language, which is difficult for humans to understand. Therefore, we write programs in a high-level language, which is much easier for us to read, understand, and maintain, even though the computer cannot understand it directly.

These programs undergo a series of transformations before they can be executed by the computer. These transformations convert the high-level language into machine language that the computer can understand and execute. This is where language processing systems are used.
          </p>
        </NotePage>

        <NotePage pageNumber="04" label="Language Processing">
          <NoteTitleBox>Overview of Language Processing System</NoteTitleBox>
          <FlowDiagram
            vertical
            items={[
              { label: 'High level language', kind: 'source' },
              { label: 'Pre-Processor', kind: 'process', note: 'Pure HLL' },
              { label: 'Compiler', kind: 'process', note: 'Assembly language' },
              { label: 'Assembler', kind: 'process', note: 'Relocatable machine language' },
              { label: 'Loader / Linker', kind: 'process' },
              { label: 'Absolute machine code', kind: 'target' },
            ]}
          />
          <SectionHeading number="1">High Level Language</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>If a program contains #define or #include directives, it is called a High-Level Language (HLL) program. High-level languages are closer to human language but far from machine language..</ArrowItem>
            <ArrowItem>The # directives are called preprocessor directives. They instruct the preprocessor on what operations to perform before the actual compilation process begins.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="05" label="Components">
          <NoteTitleBox>Preprocessor / Assembly Language / Assembler</NoteTitleBox>
          <SectionHeading number="1">Preprocessor</SectionHeading>
          <p className="note-copy">
            The preprocessor processes all preprocessor directives before the actual compilation begins.
          </p>
          <div className="arrow-list">
            <ArrowItem><code>#include</code> → Performs file inclusion by inserting the contents of the specified header file into the source program.</ArrowItem>
            <ArrowItem><code>#define</code> → Performs macro expansion by replacing macros with their corresponding definitions.</ArrowItem>
          </div>
          <p className="note-copy">
            Thus, the preprocessor performs tasks such as file inclusion, macro expansion, conditional compilation, and other preprocessing operations.
          </p>
          <SectionHeading number="2">Assembly Language</SectionHeading>
          <p className="note-copy">
            Assembly language is a low-level programming language that is closer to machine language but easier for humans to read and write. It uses mnemonic instructions (such as <code>ADD</code>, <code>MOV</code>, and <code>SUB</code>) and symbolic names instead of binary code.
          </p>
          <p className="note-copy">
            The assembly language program serves as an intermediate representation that is translated into machine language before execution.
          </p>
          <SectionHeading number="3">Assembler</SectionHeading>
          <p className="note-copy">
            An assembler is system software that converts an assembly language program into machine language (object code).
          </p>
          <div className="arrow-list">
            <ArrowItem>Every hardware platform (processor architecture) has its own assembler.</ArrowItem>
            <ArrowItem>The assembler translates mnemonic instructions into binary machine instructions.</ArrowItem>
            <ArrowItem>It also generates object code and related information required by the linker and loader for program execution.</ArrowItem>
          </div>
          <NoteBox title="Relocatable Machine Code">
             <ArrowItem>Relocatable machine code is machine code that can be loaded into any memory location and executed. The addresses used in the program are not absolute; they are adjusted by the loader during loading.

 </ArrowItem>
 <ArrowItem>After relocation, the program can be executed correctly. If any loading or relocation error occurs, the loader generates an appropriate error message.
       </ArrowItem>
          </NoteBox>
        </NotePage>

        <NotePage pageNumber="06" label="Loader &amp; Compilation">
          <NoteTitleBox>Loader / Linker</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Converts relocatable code into absolute code and tries to run the program, resulting in a running program or an error message (sometimes both can happen).</ArrowItem>
            <ArrowItem>The linker loads a variety of object files into a single file to make it executable.</ArrowItem>
            <ArrowItem>The loader then loads it into memory and executes it.</ArrowItem>
          </div>
          <SectionHeading number="1">Compilation: Two Parts</SectionHeading>
          <p className="note-copy">Compilation can be split into two parts: analysis and synthesis.</p>
          <SectionHeading number="2">Analysis (Front End)</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>The source program is read and broken down into pieces.</ArrowItem>
            <ArrowItem>Determines the syntax and meaning of the source string.</ArrowItem>
            <ArrowItem>An intermediate code is generated.</ArrowItem>
            <ArrowItem>Carried out by<br></br> <br></br>lexical analysis, <br></br>syntax analysis, <br></br>semantic analysis.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="07" label="Synthesis &amp; Properties">
          <NoteTitleBox>Synthesis (Back End)</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>The intermediate code is optimized if needed.</ArrowItem>
            <ArrowItem>It is then converted into an equivalent target program.</ArrowItem>
          </div>
          <FlowDiagram
            items={[
              { label: 'Source Program', kind: 'source' },
              { label: 'Compiler', kind: 'process', note: 'analysis + synthesis' },
              { label: 'Target Program', kind: 'target' },
            ]}
          />
          <SectionHeading number="1">Properties of a Good Compiler</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Must be bug-free.</ArrowItem>
            <ArrowItem>Must generate correct machine code.</ArrowItem>
            <ArrowItem>Must be portable.</ArrowItem>
            <ArrowItem>Must give good diagnosis and error messages.</ArrowItem>
            <ArrowItem>Generated code must work well with existing debuggers.</ArrowItem>
            <ArrowItem>Must have consistent optimization.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="08" label="Phases of a Compiler">
          <NoteTitleBox>Phases of a Compiler</NoteTitleBox>
          <CompilerPhasesDiagram />
          <SectionHeading number="1">Analysis Phase</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Lexical analyzer divides the program into tokens.</ArrowItem>
            <ArrowItem>Syntax analyzer recognizes "sentences" in the program using the syntax(Grammar) of the language.</ArrowItem>
            <ArrowItem>Semantic analyzer checks the semantics(Meaning) of each construct.</ArrowItem>
          </div>
          <SectionHeading number="2">Synthesis Phase</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Intermediate code is easy to generate and easy to translate further.</ArrowItem>
            <ArrowItem>Code optimizer improves the intermediate code to increase efficiency.</ArrowItem>
            <ArrowItem>Code generator produces the target code.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="09" label="Lexical Analyzer">
          <NoteTitleBox>Lexical Analyzer</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Lexical analysis is also called scanning.</ArrowItem>
            <ArrowItem>It collects sequences of characters into meaningful units called tokens, like words of a natural language, e.g. "I am hungry".</ArrowItem>
            <ArrowItem>A token is a sequence of characters having a collective meaning.</ArrowItem>
          </div>
          <p className="note-copy">As an example, consider the line of code <code>a[index] = 4 + 2</code>. It contains 8 tokens:</p>
          <DataTable
            headers={['Token', 'Kind']}
            rows={[
              ['a', 'identifier'],
              ['[', 'left bracket'],
              ['index', 'identifier'],
              [']', 'right bracket'],
              ['=', 'assignment'],
              ['4', 'number'],
              ['+', 'plus sign'],
              ['2', 'number'],
            ]}
          />
          <NoteBox title="Whitespace">
            Blank characters used in programming statements are eliminated during the lexical analysis phase.
          </NoteBox>
          <p className="note-copy">Each token consists of one or more characters collected into a unit before further processing takes place.</p>
        </NotePage>

        <NotePage pageNumber="10" label="Syntax Analyzer">
          <NoteTitleBox>Syntax Analyzer</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Also called parsing.</ArrowItem>
            <ArrowItem>The parser receives the source code as tokens from the scanner and performs syntax analysis, which determines the structure of the program.</ArrowItem>
            <ArrowItem>Similar to checking grammar in a natural-language sentence.</ArrowItem>
            <ArrowItem>Determines the structural elements of the program as well as their relationships.</ArrowItem>
            <ArrowItem>Results are usually represented as a parse tree or syntax tree, in hierarchical form.</ArrowItem>
          </div>
          <p className="note-copy">For example, the token stream <code>id1 = id2 + id3 * 50</code> is represented by the following syntax tree:</p>
          <pre className="ascii-diagram">{`        =
       / \\
    id1    +
          / \\
       id2    *
             / \\
          id3    50`}</pre>
        </NotePage>

        <NotePage pageNumber="11" label="Semantic Analyzer">
          <NoteTitleBox>Semantic Analyzer</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>The third phase of the compilation process.</ArrowItem>
            <ArrowItem>Verifies whether the parse tree is meaningful — checks that it follows the rules of the language.</ArrowItem>
            <ArrowItem>Keeps track of identifiers, their types, and expressions.</ArrowItem>
          </div>
          <SectionHeading number="1">Type Checking</SectionHeading>
          <p className="note-copy">Checks the operands for all operators, e.g. <code>a + b = c</code> where the operands are a float and an int the result c is int only.</p>
          <SectionHeading number="2">Coercion</SectionHeading>
          <p className="note-copy">
            Permits certain type conversions. Example: <code>Sum := oldsum + Rate * 50</code> becomes{' '}
            <code>id1 := id2 + id3 * 50</code>. Since id1, id2, and id3 are floating-point numbers but 50 is an
            integer, coercion takes place to convert 50 to a float.
          </p>
          <pre className="ascii-diagram">{`        =
       / \\
    id1    +
          / \\
       id2    *
             / \\
          id3    intofloat
                    |
                    50`}</pre>
        </NotePage>

        <NotePage pageNumber="12" label="Intermediate Code Generator">
          <NoteTitleBox>Intermediate Code Generator</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Generates intermediate code in a form that can be readily executed by a machine.</ArrowItem>
            <ArrowItem>Easy to generate and easy to convert into target code.</ArrowItem>
            <ArrowItem>Generated between the high-level language and the machine language.</ArrowItem>
            <ArrowItem>The compiler must generate a temporary name to hold the value computed by each instruction.</ArrowItem>
          </div>
          <p className="note-copy">The syntax tree generated during semantic analysis is converted into intermediate code:</p>
          id1 = id2 + id3 * inttofloat(50)
          
                      
           <pre className="ascii-diagram">{`        =
       / \\
    id1    +
          / \\
       id2    *
             / \\
          id3    intofloat
                    |
                    50`}</pre>
                    Above Syntax Tree Equal Intermediate Code is: 
          <pre className="ascii-diagram">{`t1 = intofloat(50)
t2 = id3 * t1
t3 = id2 + t2
id1 = t3`}</pre>
        </NotePage>

        <NotePage pageNumber="13" label="Code Optimizer">
          <NoteTitleBox>Code Optimizer</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Improves the intermediate code for faster execution and lower memory consumption.</ArrowItem>
            <ArrowItem>Removes unnecessary lines of code and reorders statements to speed up program execution.</ArrowItem>
          </div>
          <br></br>
          <p className="note-copy">Intermediate code:</p>
          <pre className="ascii-diagram">{`t1 = intofloat(50)
t2 = id3 * t1
t3 = id2 + t2
id1 = t3`}</pre>
          <p className="note-copy">Optimized code:</p>
          <pre className="ascii-diagram">{`t1 = id3 * 50.0
id1 = id2 + t1`}</pre>
        </NotePage>

        <NotePage pageNumber="14" label="Code Generator">
          <NoteTitleBox>Code Generator</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Main purpose is to write code that the target machine can understand.</ArrowItem>
            <ArrowItem>The final stage of the compilation process.</ArrowItem>
            <ArrowItem>Takes the optimized intermediate code as input and maps it to the target machine language.</ArrowItem>
            <ArrowItem>Translates the intermediate code into a sequence of machine instructions.</ArrowItem>
          </div>
          <p className="note-copy">Optimized code:</p>
          <pre className="ascii-diagram">{`t1 = id3 * 50.0
id1 = id2 + t1`}</pre>
          <p className="note-copy">Code generation:</p>
          <pre className="ascii-diagram">{`MOVF id3, R2
MULF #50.0, R2
MOVF id2, R2
ADDF R2, R1
MOVF R1, id1`}</pre>
        </NotePage>

        <NotePage pageNumber="15" label="Compiler vs Interpreter">
          <NoteTitleBox>Compiler vs Interpreter</NoteTitleBox>
          <SectionHeading number="1">Compiler</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>A translator that takes a high-level language as input and produces a low-level (machine or assembly) language as output.</ArrowItem>
            <ArrowItem>More intelligent than an assembler — checks limits, ranges, errors, etc.</ArrowItem>
            <ArrowItem>Slower: it goes through the entire program before translating it into machine code, so run time is longer and it occupies more memory.</ArrowItem>
          </div>
          <FlowDiagram
            items={[
              { label: 'Source Program', kind: 'source' },
              { label: 'Compiler', kind: 'process' },
              { label: 'Object Program', kind: 'target' },
            ]}
          />
          <SectionHeading number="2">Interpreter</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Translates a programming language into a comprehensible language, one statement at a time.</ArrowItem>
            <ArrowItem>Interpreters are, more often than not, smaller than compilers.</ArrowItem>
          </div>
          <FlowDiagram
            items={[
              { label: 'Source Program', kind: 'source' },
              { label: 'Interpreter', kind: 'process', note: 'one statement at a time' },
              { label: 'Output', kind: 'target' },
            ]}
          />
        </NotePage>

        <NotePage pageNumber="16" label="Compiler vs Interpreter">
          <NoteTitleBox>Difference between Compiler and Interpreter</NoteTitleBox>
          <DataTable
            headers={['Compiler', 'Interpreter']}
            rows={[
              ['Scans the whole program in one go.', 'Translates the program one statement at a time.'],
              ['Errors are shown at the end, together (if any).', 'Errors are shown line by line.'],
              ['Localization of errors is difficult.', 'Localization of errors is easy.'],
              ['Consumes less time — faster than an interpreter.', 'Consumes more time — slower than a compiler.'],
              ['More efficient.', 'Less efficient.'],
              ['CPU utilization is more.', 'CPU utilization is less.'],
              ['Both syntactic and semantic errors can be checked simultaneously.', 'Only syntactic errors are checked.'],
              ['The compiler is larger.', 'Interpreters are often smaller than compilers.'],
              ['Not flexible.', 'Flexible.'],
              ['Examples: C, C++, etc.', 'Examples: Python, Ruby, Perl, SNOBOL, etc.'],
            ]}
          />
        </NotePage>

        <NotePage pageNumber="17" label="Science of Building">
          <NoteTitleBox>The Science of Building a Compiler</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Building a compiler is a challenging task. Its main job is to accept a source program of any size and convert it into a suitable target program.</ArrowItem>
            <ArrowItem>Compiler study focuses on how to design the correct mathematical model and choose correct algorithms, balancing the need for generality and efficiency.</ArrowItem>
            <ArrowItem>Finite state machines and regular expressions (already studied in FLAT) are the prerequisites for describing the lexical units of programs (tokens) and the algorithms used by the compiler to identify these tokens.</ArrowItem>
            <ArrowItem>The term "code optimization" indicates the attempts made by a compiler to produce code that is more efficient than the previous code — faster than any other code that performs the same task.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="18" label="Optimization Objectives">
          <NoteTitleBox>Objectives of Compiler Optimization</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>The meaning of the compiled program must be preserved.</ArrowItem>
            <ArrowItem>Optimization should improve program performance.</ArrowItem>
            <ArrowItem>Time required for compilation should be reasonable.</ArrowItem>
            <ArrowItem>The engineering effort required must be manageable.</ArrowItem>
          </div>
          <SectionHeading number="1">Programming Language Basics</SectionHeading>
          <p className="note-copy">The topics that make up programming language basics:</p>
          <div className="arrow-list">
            <ArrowItem>Static/dynamic distinction</ArrowItem>
            <ArrowItem>Environments and states</ArrowItem>
            <ArrowItem>Static scope and block structure</ArrowItem>
            <ArrowItem>Explicit access control</ArrowItem>
            <ArrowItem>Dynamic scope</ArrowItem>
            <ArrowItem>Declarations and definitions</ArrowItem>
            <ArrowItem>Parameter passing mechanisms</ArrowItem>
            <ArrowItem>Aliasing</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="19" label="Static / Dynamic">
          <NoteTitleBox>Static / Dynamic Distinction</NoteTitleBox>
          <p className="note-copy">
            Among the most important issues when designing a compiler for a language is "what decisions can the
            compiler make about a program". If a language uses a policy that allows the compiler to decide an issue,
            the language uses a <strong>static policy</strong> — the issue can be decided at compile time.
          </p>
          <pre className="ascii-diagram">{`static void main()
{
    int num1, num2;
    int sum = num1 + num2   <- no semicolon: error
}                              occurs at compile time`}</pre>
          <p className="note-copy">
            If the decision is made at run time, the language uses a <strong>dynamic policy</strong>.
          </p>
          <pre className="ascii-diagram">{`public void main()
{
    int a = 0;
    int num = 10/a;   <- error at run time
}`}</pre>
        </NotePage>

        <NotePage pageNumber="20" label="Environment &amp; States">
          <NoteTitleBox>Environment &amp; States</NoteTitleBox>
          <p className="note-copy">
            The environment is a mapping from names to locations in the store. Since variables refer to locations, we
            could alternatively define an environment as a mapping from names to variables.
          </p>
          <p className="note-copy">The state is a mapping from locations in the store to their values.</p>
          <FlowDiagram
            items={[
              { label: 'Names', kind: 'source' },
              { label: 'Locations (variables)', kind: 'process', note: 'environment' },
              { label: 'Values', kind: 'target', note: 'state' },
            ]}
          />
        </NotePage>

        <NotePage pageNumber="21" label="Static Scope">
          <NoteTitleBox>Static Scope and Block Structure</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>The scope rules for C are based on program structure.</ArrowItem>
            <ArrowItem>The scope of a variable is implicitly determined by where the declaration appears in the program.</ArrowItem>
            <ArrowItem>Languages like C++, C#, and Java provide explicit control over scope through keywords like <code>public</code>, <code>private</code>, and <code>protected</code>.</ArrowItem>
            <ArrowItem>Static scope can be given by using blocks. C uses braces <code>{'{ }'}</code> to denote a block; Algol uses <code>begin</code> and <code>end</code>.</ArrowItem>
            <ArrowItem>Blocks can be nested inside other blocks.</ArrowItem>
            <ArrowItem>A variable declaration D belongs to a block B if it is declared in B. If the declaration D of name x is in B, then the scope of x is B as well as any nested block.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="22" label="Block Structure Example">
          <NoteTitleBox>Nested Blocks Example</NoteTitleBox>
          <NoteBox title="Note">
            x will not have scope in a nested block if it is redeclared in that block.
          </NoteBox>
          <p className="note-copy">
            Consider the program below, which has 4 blocks with several definitions of a and b. Each declaration
            initializes its variable to the number of the block to which it belongs.
          </p>
          <pre className="ascii-diagram">{`main
{                          // B1
    int a = 1;
    int b = 1;
    {                      // B2
        int b = 2;
        {                  // B3
            int a = 3;
            cout << a << b;
        }
        {                  // B4
            int b = 4;
            cout << a << b;
        }
        cout << a << b;
    }
    cout << a << b;
}`}</pre>
        </NotePage>

        <NotePage pageNumber="23" label="Declaration Scopes">
          <NoteTitleBox>Declarations and Their Scopes</NoteTitleBox>
          <DataTable
            headers={['Declaration', 'Scope']}
            rows={[
              ['int a = 1', 'B1 - B3'],
              ['int b = 1', 'B1 - B2'],
              ['int b = 2', 'B2 - B4'],
              ['int a = 3', 'B3'],
              ['int b = 4', 'B4'],
            ]}
          />
          <p className="note-copy">
            Consider the print statement of B4: since B4 has redeclared b = 4, it prints the b value as 4. It does not
            contain a; its surrounding block B2 also does not contain an a declaration. B2's surrounding block B1 has
            an a declaration, so the a value is printed as 1.
          </p>
        </NotePage>

        <NotePage pageNumber="24" label="Access Control">
          <NoteTitleBox>Explicit Access Control</NoteTitleBox>
          <p className="note-copy">
            Through the use of keywords like <code>public</code>, <code>private</code>, and <code>protected</code>,
            object-oriented languages such as C++ or Java provide explicit control over access to member names in a
            superclass. These keywords support encapsulation by restricting access.
          </p>
          <div className="arrow-list">
            <ArrowItem>Private names have a scope that includes only the method declarations and definitions associated with that class or any friend class.</ArrowItem>
            <ArrowItem>Protected names are accessible to subclasses.</ArrowItem>
            <ArrowItem>Public names are accessible by anyone from outside.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="25" label="Dynamic Scope">
          <NoteTitleBox>Dynamic Scope / Declarations &amp; Definitions</NoteTitleBox>
          <SectionHeading number="1">Dynamic Scope</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Dynamic scoping is a programming language paradigm that you don't typically see.</ArrowItem>
            <ArrowItem>Any scoping policy is dynamic if it is based on factors that can be known only when the program executes (at running time).</ArrowItem>
          </div>
          <SectionHeading number="2">Declarations and Definitions</SectionHeading>
          <p className="note-copy">
            Declarations tell us about the type of things, while definitions tell us about their values.
          </p>
          <pre className="ascii-diagram">{`example:  int i = 1;

int i   =>  Declaration
i = 1   =>  Definition`}</pre>
        </NotePage>

        <NotePage pageNumber="26" label="Parameter Passing">
          <NoteTitleBox>Parameter Passing Mechanisms</NoteTitleBox>
          <p className="note-copy">
            We will see how the actual parameters (the real values that will be called for the procedure) are
            associated with the formal parameters (which define the procedure, i.e. like a formula).
          </p>
          <p className="note-copy">
            There are different mechanisms for calling the parameters. The majority of languages use either "call by
            value" or "call by reference", or both. There are 3 types of parameter passing mechanisms:
          </p>
          <div className="arrow-list">
            <ArrowItem>Call-by-Value</ArrowItem>
            <ArrowItem>Call-by-Reference</ArrowItem>
            <ArrowItem>Call-by-Name</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="27" label="Call by Value">
          <NoteTitleBox>Call-by-Value</NoteTitleBox>
          <p className="note-copy">
            The value of the actual parameter, in "read only mode", is transmitted to the formal parameters.
          </p>
          <pre className="ascii-diagram">{`#include <iostream>
using namespace std;

void show(int x)      // formal parameter
{
    cout << x << endl;
}

int main()
{
    int age = 20;
    show(age);        // default parameter
    show(10);         // actual parameter
    return 0;
}

O/P:  20
      10`}</pre>
        </NotePage>

        <NotePage pageNumber="28" label="Call by Reference">
          <NoteTitleBox>Call-by-Reference</NoteTitleBox>
          <p className="note-copy">
            The reference / address of the actual parameter is transmitted to the formal parameters.
          </p>
          <pre className="ascii-diagram">{`#include <iostream>
using namespace std;

void show(int *x)
{
    cout << *x << endl;
}

int main()
{
    int age = 20;
    show(&age);
    return 0;
}

O/P:  20`}</pre>
        </NotePage>

        <NotePage pageNumber="29" label="Call by Name">
          <NoteTitleBox>Call-by-Name</NoteTitleBox>
          <p className="note-copy">
            This technique is used in programming languages such as Algol. The symbolic "name" of a variable is
            passed, which allows it both to be accessed and updated.
          </p>
          <p className="note-copy">
            Example: to double the value of <code>c[j]</code>, you can pass its name (not its value) into the
            following procedure:
          </p>
          <pre className="ascii-diagram">{`procedure double(x);
real x;
begin
    x := x * 2
end;`}</pre>
        </NotePage>

        <NotePage pageNumber="30" label="Aliasing">
          <NoteTitleBox>Aliasing</NoteTitleBox>
          <p className="note-copy">
            An alias occurs when different variables point directly or indirectly to a single area of storage.
          </p>
          <pre className="ascii-diagram">{`A ---\\
B ----+-->  [ same storage ]
C ---/`}</pre>
        </NotePage>

        <NotePage pageNumber="31" label="Lexical Analysis">
          <NoteTitleBox>Lexical Analysis</NoteTitleBox>
          <SectionHeading number="1">The Role of the Lexical Analyzer</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Lexical analysis is the first phase of the compiler.</ArrowItem>
            <ArrowItem>It reads input characters and produces output as a sequence of tokens that the parser uses for syntax analysis.</ArrowItem>
          </div>
          <FlowDiagram
            items={[
              { label: 'Source Program', kind: 'source' },
              { label: 'Lexical Analyzer', kind: 'process', note: 'tokens' },
              { label: 'Parser', kind: 'target' },
            ]}
          />
          <SectionHeading number="2">Input Buffering</SectionHeading>
          <p className="note-copy">
            Lexical analysis has to access secondary memory each time to identify tokens, which is time-consuming and
            costly. So the input strings are stored into a buffer and then scanned by the lexical analyzer.
          </p>
        </NotePage>

        <NotePage pageNumber="32" label="Two Pointers">
          <NoteTitleBox>Scanning with Two Pointers</NoteTitleBox>
          <p className="note-copy">
            Lexical analysis scans the input string from left to right, one character at a time, to identify tokens.
            It uses two pointers to scan tokens:
          </p>
          <div className="arrow-list">
            <ArrowItem><strong>Begin pointer (bptr)</strong> — points to the beginning of the string to be read.</ArrowItem>
            <ArrowItem><strong>Look-ahead pointer (lptr)</strong> — moves ahead to search for the end of the token.</ArrowItem>
          </div>
          <p className="note-copy">Example: for the statement <code>int a, b;</code></p>
          <pre className="ascii-diagram">{` bptr
  v
[ i | n | t |   | a | , | b | ; ]
  ^
 lptr`}</pre>
          <p className="note-copy">The look-ahead pointer scans the buffer until the token is found.</p>
        </NotePage>

        <NotePage pageNumber="33" label="Token Recognition">
          <NoteTitleBox>Recognizing a Token</NoteTitleBox>
          <p className="note-copy">
            The character ("blank space") beyond the token <code>int</code> has to be examined before the token{' '}
            <code>int</code> is determined.
          </p>
          <pre className="ascii-diagram">{` bptr
  v
[ i | n | t |   | a | , | b | ; ]
              ^
             lptr`}</pre>
          <p className="note-copy">
            After processing the token <code>int</code>, both pointers are set to the next token (<code>a</code>), and
            this process is repeated for the whole program.
          </p>
          <pre className="ascii-diagram">{`                 bptr
                  v
[ i | n | t |   | a | , | b | ; ]
 '--token--'      ^
                 lptr`}</pre>
        </NotePage>

        <NotePage pageNumber="34" label="Buffer Halves">
          <NoteTitleBox>Buffer Halves</NoteTitleBox>
          <p className="note-copy">A buffer can be divided into two halves.</p>
          <div className="arrow-list">
            <ArrowItem>If the look-ahead pointer moves toward halfway in the first half, the second half is filled with new characters.</ArrowItem>
            <ArrowItem>If the look-ahead pointer moves toward the right end of the buffer (the second half), the first half is filled with new characters, and it goes on…</ArrowItem>
          </div>
          <pre className="ascii-diagram">{` bptr
  v
[ ......... | ......... ]
              ^
             lptr
 '--first--' '--second--'
     half        half`}</pre>
        </NotePage>

        <NotePage pageNumber="35" label="Buffering Techniques">
          <NoteTitleBox>Buffering Techniques</NoteTitleBox>
          <SectionHeading number="1">Buffer Pairs</SectionHeading>
          <p className="note-copy">
            A specialized buffering technique can decrease the amount of overhead needed to process an input character
            when transferring characters. It includes two buffers, each of N-character size, which are reloaded
            alternatively.
          </p>
          <SectionHeading number="2">Sentinels</SectionHeading>
          <p className="note-copy">
            In the buffer-pair technique, each time we have to examine for the end of a half of the buffer. To avoid
            that time waste, in the sentinels technique each half of the buffer holds a sentinel character at the end
            to identify the buffer ending. Generally <code>eof</code> is used as the sentinel character.
          </p>
          <pre className="ascii-diagram">{`[ ... | ... | eof | ... | ... | eof ]`}</pre>
        </NotePage>

        <NotePage pageNumber="36" label="Token, Lexeme, Pattern">
          <NoteTitleBox>Token, Lexeme, Pattern</NoteTitleBox>
          <SectionHeading number="1">Token</SectionHeading>
          <p className="note-copy">
            A token is a sequence of characters that can be treated as a single logical entity. Typical tokens are:
          </p>
          <div className="arrow-list">
            <ArrowItem>Identifiers</ArrowItem>
            <ArrowItem>Keywords</ArrowItem>
            <ArrowItem>Operators</ArrowItem>
            <ArrowItem>Special symbols</ArrowItem>
            <ArrowItem>Constants</ArrowItem>
          </div>
          <SectionHeading number="2">Pattern</SectionHeading>
          <p className="note-copy">
            A pattern denotes the type / form of the lexemes of a token. For example, if a token is a keyword, the
            pattern is the characters that form the keyword.
          </p>
        </NotePage>

        <NotePage pageNumber="37" label="Lexeme">
          <NoteTitleBox>Lexeme</NoteTitleBox>
          <p className="note-copy">
            A lexeme is a sequence of characters in the source program that matches the pattern for a token.
          </p>
          <SectionHeading number="1">Example 1</SectionHeading>
          <DataTable
            headers={['', 'Value']}
            rows={[
              ['Token', 'comparison'],
              ['Lexeme', '<=, !=, >=, =='],
              ['Pattern', '<, >, =, !'],
            ]}
          />
          <SectionHeading number="2">Example 2</SectionHeading>
          <DataTable
            headers={['', 'Value']}
            rows={[
              ['Token', 'keyword'],
              ['Lexeme', 'void'],
              ['Pattern', 'v, o, i, d'],
            ]}
          />
        </NotePage>

        <NotePage pageNumber="38" label="Recognition of Tokens">
          <NoteTitleBox>Recognition of Tokens</NoteTitleBox>
          <p className="note-copy">
            The input string is compared with patterns and tokens are generated. For example, consider the grammar
            below:
          </p>
          <pre className="ascii-diagram">{`stmt -> if expr then stmt
      | if expr then stmt else stmt
      | ε

expr -> term relop term
      | term

term -> id`}</pre>
          <p className="note-copy">
            The above grammar is a simple fragment of branching and conditional statements. This syntax is similar to
            Pascal. <code>relop</code> is a comparison operator like <code>=</code> for equal and <code>&lt;&gt;</code>{' '}
            for not equal in Pascal.
          </p>
        </NotePage>

        <NotePage pageNumber="39" label="Regular Definitions">
          <NoteTitleBox>Patterns via Regular Definitions</NoteTitleBox>
          <p className="note-copy">
            The terminals of the grammar — <code>if</code>, <code>then</code>, <code>else</code>, <code>relop</code>,{' '}
            <code>id</code>, and <code>number</code> — are the names of the tokens. The patterns for the tokens are
            described using regular definitions:
          </p>
          <pre className="ascii-diagram">{`digit  -> [0-9]
digits -> digit+
number -> digit.(digit)?(e.[+-]?digit)?
letter -> [A-Z, a-z]
id     -> letter(letter|digit)*
if     -> if
then   -> then
else   -> else
relop  -> < | > | <= | >= | == | <>`}</pre>
        </NotePage>

        <NotePage pageNumber="40" label="Lex Generator">
          <NoteTitleBox>The Lexical Analyzer Generator — Lex</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>Lex is a program that generates lexical analyzers. It is used with the YACC parser generator.</ArrowItem>
            <ArrowItem>The lexical analyzer is a program that transforms an input stream into a sequence of tokens.</ArrowItem>
            <ArrowItem>It reads the input stream and produces the source code as output through implementing the lexical analyzer in a C program.</ArrowItem>
          </div>
          <SectionHeading number="1">Function of Lex — Step 1</SectionHeading>
          <p className="note-copy">
            Firstly, a program <code>lex.l</code> is created in the Lex language. Then the Lex compiler runs the{' '}
            <code>lex.l</code> program and produces a C program <code>lex.yy.c</code>.
          </p>
        </NotePage>

        <NotePage pageNumber="41" label="Lex Steps">
          <NoteTitleBox>Lex — Steps 2 and 3</NoteTitleBox>
          <FlowDiagram
            items={[
              { label: 'Lex source (lex.l)', kind: 'source' },
              { label: 'Lex Compiler', kind: 'process' },
              { label: 'lex.yy.c', kind: 'target', note: 'C program' },
            ]}
          />
          <p className="note-copy">
            <strong>Step 2:</strong> Finally, the C compiler runs the <code>lex.yy.c</code> program and produces an
            object program <code>a.out</code>.
          </p>
          <FlowDiagram
            items={[
              { label: 'lex.yy.c', kind: 'source' },
              { label: 'C Compiler', kind: 'process' },
              { label: 'a.out', kind: 'target', note: 'lexical analyzer' },
            ]}
          />
          <p className="note-copy">
            <strong>Step 3:</strong> <code>a.out</code> is the lexical analyzer that transforms an input stream into a
            sequence of tokens.
          </p>
          <FlowDiagram
            items={[
              { label: 'Input stream', kind: 'source' },
              { label: 'a.out', kind: 'process' },
              { label: 'Sequence of tokens', kind: 'target' },
            ]}
          />
        </NotePage>

        <NotePage pageNumber="42" label="Lex Program Structure">
          <NoteTitleBox>Program Structure of Lex</NoteTitleBox>
          <p className="note-copy">In the input file, there are 3 sections:</p>
          <div className="arrow-list">
            <ArrowItem>Definition section</ArrowItem>
            <ArrowItem>Rules section</ArrowItem>
            <ArrowItem>User code section</ArrowItem>
          </div>
          <SectionHeading number="1">Definition Section</SectionHeading>
          <p className="note-copy">
            The definition section contains the declaration of variables, regular definitions, and manifest constants.
            Text is enclosed in <code>%{'{'} ... %{'}'}</code> brackets. Anything written in these brackets is copied
            directly to the file <code>lex.yy.c</code>.
          </p>
          <pre className="ascii-diagram">{`%{
    // Definitions
%}`}</pre>
        </NotePage>

        <NotePage pageNumber="43" label="Rules Section">
          <NoteTitleBox>Rules Section</NoteTitleBox>
          <p className="note-copy">
            The rules section contains a series of rules in the form <em>pattern action</em>: the pattern must be
            unindented, and the action begins on the same line inside <code>{'{ }'}</code> brackets. The rules section
            is enclosed in <code>%% ... %%</code>.
          </p>
          <pre className="ascii-diagram">{`%%
pattern action
%%`}</pre>
          <p className="note-copy">Examples — the table below shows some of the pattern matches:</p>
          <DataTable
            headers={['Pattern', 'It can match with']}
            rows={[
              ['[0-9]', 'all the digits between 0 and 9'],
              ['[^a]', 'all the other characters except a'],
              ['[^A-Z]', 'all the other characters except the uppercase letters'],
              ['[a-z]', 'all lowercase letters'],
            ]}
          />
        </NotePage>

        <NotePage pageNumber="44" label="User Code Section">
          <NoteTitleBox>User Code Section</NoteTitleBox>
          <p className="note-copy">
            This section contains C statements and additional functions. We can also compile these functions
            separately and load them with the lexical analyzer.
          </p>
          <SectionHeading number="1">Overall Basic Program Structure</SectionHeading>
          <pre className="ascii-diagram">{`%{
    // Definitions       <- Definition section
%}

%%
Rules                    <- Rules section
%%

User code section`}</pre>
        </NotePage>

        <NotePage pageNumber="45" label="Transition Diagrams">
          <NoteTitleBox>Finite Automata — Transition Diagrams</NoteTitleBox>
          <p className="note-copy">
            An intermediate step in the lexical analyzer: we first convert patterns into flowcharts, called "transition
            diagrams".
          </p>
          <div className="arrow-list">
            <ArrowItem>A transition diagram has a collection of nodes or circles, called states.</ArrowItem>
            <ArrowItem>Each state represents a condition that could occur during the process of scanning the input for a lexeme matching a pattern.</ArrowItem>
            <ArrowItem>A state is a summary between the lexemeBegin pointer and the forward pointer.</ArrowItem>
            <ArrowItem>Edges direct from one state of the transition diagram to another. Every edge is labelled by one or more symbols.</ArrowItem>
            <ArrowItem>Example: if we are in state s and the next input symbol is a, we look for an edge out of s labelled by a. If such an edge is found, we advance.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="46" label="TD Conventions">
          <NoteTitleBox>Transition Diagram Conventions</NoteTitleBox>
          <p className="note-copy">
            We advance the forward pointer and enter the state where the edge leads. Some important conventions about
            transition diagrams:
          </p>
          <SectionHeading number="1">Accepting / Final States</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>These states indicate that a lexeme has been found.</ArrowItem>
            <ArrowItem>The accepting / final state is represented by a double circle.</ArrowItem>
            <ArrowItem>If any action is to be taken after this state — like returning a token and attribute value to the parser — it will be attached to the accepting state.</ArrowItem>
          </div>
          <SectionHeading number="2">Retraction</SectionHeading>
          <p className="note-copy">
            If it is necessary to retract (move the forward pointer backwards) one position, we place a star (*) near
            the accepting state.
          </p>
        </NotePage>

        <NotePage pageNumber="47" label="relop Diagram">
          <NoteTitleBox>Transition Diagram for relop</NoteTitleBox>
          <p className="note-copy">
            One state is designated as the "start state" or "initial state", indicated by the label start entering from
            nowhere. The figure below shows a transition diagram that recognizes lexemes matching the token{' '}
            <code>relop</code> (relational operator).
          </p>
          <div className="arrow-list">
            <ArrowItem>We begin at state 0.</ArrowItem>
            <ArrowItem>If the input symbol is <code>&lt;</code>, then among the lexemes matching the pattern for relop we could see <code>&lt;</code>, <code>&lt;&gt;</code>, or <code>&lt;=</code> — we therefore go to state 1 and look at the next character.</ArrowItem>
            <ArrowItem>If the next character is <code>=</code>, we recognize <code>&lt;=</code>, enter state 2, and return the token relop with attribute LE.</ArrowItem>
            <ArrowItem>If in state 1 the next character is <code>&gt;</code>, then we have the lexeme <code>&lt;&gt;</code>, enter state 3, and return the not-equals operator token.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="48" label="relop Diagram (contd.)">
          <NoteTitleBox>relop Diagram (continued)</NoteTitleBox>
          <p className="note-copy">
            On any other character, the lexeme is <code>&lt;</code>, and we enter state 4 and return that information.
            State 4 has * to indicate that we must retract the input one position.
          </p>
          <pre className="ascii-diagram">{`start   <        =
--> (0) ---> (1) ---> ((2))  return(relop, LE)
     |        |  >
     |        +----> ((3))   return(relop, NE)
     |        | other
     |        +----> ((4))*  return(relop, LT)
     | =
     +-------------> ((5))   return(relop, EQ)
     | >        =
     +----> (6) ---> ((7))   return(relop, GE)
              | other
              +----> ((8))*  return(relop, GT)`}</pre>
        </NotePage>

        <NotePage pageNumber="49" label="Finite Automata">
          <NoteTitleBox>Finite Automata</NoteTitleBox>
          <p className="note-copy">
            Lex is a tool which converts an input program to a lexical analyzer. The heart of the transition is known
            as finite automata.
          </p>
          <div className="arrow-list">
            <ArrowItem>Finite automata are graphs, like transition diagrams.</ArrowItem>
            <ArrowItem>Finite automata are recognizers: they say "yes" or "no" about each possible string.</ArrowItem>
            <ArrowItem>Finite automata come in two kinds: DFA (deterministic finite automata) and NFA (non-deterministic finite automata).</ArrowItem>
          </div>
          <SectionHeading number="1">Deterministic Finite Automata</SectionHeading>
          <p className="note-copy">A DFA has a 5-tuple notation:</p>
          <pre className="ascii-diagram">{`M = (Q, Σ, δ, q0, F)

Q  = set of states used in the FA
Σ  = input symbols
δ  = transition function (moving from one state to another)
q0 = initial state`}</pre>
        </NotePage>

        <NotePage pageNumber="50" label="DFA Example">
          <NoteTitleBox>DFA — Example</NoteTitleBox>
          <pre className="ascii-diagram">{`F = final state
δ : Q x Σ -> Q`}</pre>
          <NoteBox title="Note">
            From the given current state, by taking an input the DFA moves to exactly one state (a unique path), and it
            does not accept null values.
          </NoteBox>
          <p className="note-copy">Example: design a DFA that ends with input symbols {'{1, 0}'}:</p>
          <pre className="ascii-diagram">{`      1
     /-\\
--> (q0) --0--> (q1) --0--> ((q2))
     ^           |            |
     +-----1-----+     0,1 loops back`}</pre>
          <p className="note-copy">Checking the string 11100 with the transition function:</p>
          <pre className="ascii-diagram">{`δ(q0, 11100) |- δ(q0, 1100)
             |- δ(q0, 100)
             |- δ(q0, 00)
             |- δ(q1, 0)
             |- q2   ✓ accepted`}</pre>
        </NotePage>

        <NotePage pageNumber="51" label="DFA Transition Table">
          <NoteTitleBox>DFA Transition Table</NoteTitleBox>
          <DataTable
            headers={['State', '0', '1']}
            rows={[
              ['q0', 'q1', 'q2'],
              ['q1', 'q2', 'q0'],
              ['q2', 'q0', 'q0'],
            ]}
          />
          <SectionHeading number="1">Language Example</SectionHeading>
          <p className="note-copy">
            Consider the language L = {'{(a|b)* abb}'} with Σ = {'{a, b}'}. Here <code>a|b</code> means a or b — we can
            take any number of a's and b's, and * is the Kleene closure (includes the null string).
          </p>
          <pre className="ascii-diagram">{`L = { abb, aabb, babb, ... }

abb:   --> (q0) -a-> (q1) -b-> (q2) -b-> ((q3))`}</pre>
        </NotePage>

        <NotePage pageNumber="52" label="NFA">
          <NoteTitleBox>NFA — Non-Deterministic Finite Automata</NoteTitleBox>
          <p className="note-copy">
            An NFA is represented essentially like a DFA. The NFA also has a five-tuple notation:
          </p>
          <pre className="ascii-diagram">{`A = (Q, Σ, δ, q0, F)

Q  = finite set of states
Σ  = input symbols
q0 = initial state
F  = final state
δ  = transition function:  δ : Q x Σ -> 2^Q`}</pre>
          <p className="note-copy">
            Notice that the only difference between an NFA and a DFA is in the type of value that δ returns: a set of
            states in the case of an NFA, and a single state in the case of a DFA.
          </p>
        </NotePage>

        <NotePage pageNumber="53" label="NFA Example">
          <NoteTitleBox>NFA — Example</NoteTitleBox>
          <p className="note-copy">
            Consider the language L = {'{(a|b)* abb}'}, Σ = {'{a, b}'}:
          </p>
          <pre className="ascii-diagram">{`     a,b
     /-\\
--> (q0) -a-> (q1) -b-> (q2) -b-> ((q3))`}</pre>
        </NotePage>

        <NotePage pageNumber="54" label="NFA Transition Table">
          <NoteTitleBox>NFA Transition Table</NoteTitleBox>
          <DataTable
            headers={['State', 'a', 'b']}
            rows={[
              ['q0', 'q0, q1', 'q0'],
              ['q1', '—', 'q2'],
              ['q2', '—', 'q3'],
              ['q3', '—', '—'],
            ]}
          />
        </NotePage>

        <NotePage pageNumber="55" label="RE to Automata">
          <NoteTitleBox>Regular Expressions to Automata</NoteTitleBox>
          <p className="note-copy">
            Regular expressions are a choice of notation to describe lexical analyzers and other pattern-processing
            software.
          </p>
          <p className="note-copy">
            Implementation of such software requires the simulation of a DFA. Because an NFA has a choice of input
            symbol or an ε, an NFA's simulation is less straightforward than a DFA's. Thus it is often important to
            convert an NFA to a DFA that accepts the same language.
          </p>
          <NoteBox title="Algorithm">
            Subset construction of a DFA from an NFA (the subset construction method).
          </NoteBox>
        </NotePage>

        <NotePage pageNumber="56" label="Subset Construction">
          <NoteTitleBox>Subset Construction — NFA for (a|b)*abb</NoteTitleBox>
          <p className="note-copy">
            The figure shows an NFA accepting (a|b)*abb; we convert it into a DFA. States 0–10 are connected with
            ε-transitions and the a/b edges of the pattern.
          </p>
          <p className="note-copy">
            ε-closure(0) is {'{0, 1, 2, 4, 7}'} — these are the states reachable from 0 on ε-transitions. This set is
            equivalent to state A in the DFA. The input alphabet is Σ = {'{a, b}'}. We need to find
            ε-closure(move(A, a)) — i.e. Dtrans[A, a] — and ε-closure(move(A, b)) — i.e. Dtrans[A, b].
          </p>
          <pre className="ascii-diagram">{`δ(A, a) = ε-closure(δ({0,1,2,4,7}, a))
        = ε-closure(δ(0,a), δ(1,a), δ(2,a), δ(4,a), δ(7,a))
        = ε-closure(3, 8) = {1,2,3,4,6,7,8}

Dtrans[A, a] = ε-closure(3, 8) = {1,2,3,4,6,7,8}
                let's call this state B.`}</pre>
        </NotePage>

        <NotePage pageNumber="57" label="Subset Steps A, B">
          <NoteTitleBox>Subset Construction — States B and C</NoteTitleBox>
          <p className="note-copy">
            So Dtrans[A, a] = B. Now for Dtrans[A, b]: among the states of A, only 4 has a transition on b, to 5.
          </p>
          <pre className="ascii-diagram">{`Dtrans[A, b] = ε-closure(δ({1,2,4,7}, b))
             = ε-closure(δ(0,b), δ(1,b), δ(2,b),
                         δ(4,b), δ(7,b))
             = ε-closure(5) = {1,2,4,5,6,7}
               let's call this state C.

Dtrans[A, b] = C`}</pre>
          <p className="note-copy">
            Now Dtrans[B, a]: it is similar to B itself, as only 2 and 7 have transitions on a, to 3 and 8
            respectively.
          </p>
          <pre className="ascii-diagram">{`Dtrans[B, a] = ε-closure(3, 8) = {1,2,3,4,6,7,8}
Dtrans[B, a] = B`}</pre>
        </NotePage>

        <NotePage pageNumber="58" label="Subset Steps B, C">
          <NoteTitleBox>Subset Construction — States D and Back to B</NoteTitleBox>
          <pre className="ascii-diagram">{`Dtrans[B, b] = ε-closure(δ({1,2,3,4,6,7,8}, b))
             = ε-closure(δ(1,b), δ(2,b), δ(3,b), δ(4,b),
                         δ(6,b), δ(7,b), δ(8,b))
             = ε-closure(5, 9) = {1,2,4,5,6,7,9}

let Dtrans[B, b] = D`}</pre>
          <pre className="ascii-diagram">{`Dtrans[C, a] = ε-closure(δ({1,2,4,5,6,7}, a))
             = ε-closure(3, 8) = {1,2,3,4,6,7,8}
             = B   (again similar to B)

Dtrans[C, b] = ε-closure(δ({1,2,4,5,6,7}, b))
             = ε-closure(5, 4) = {1,2,4,5,6,7}
             = C   (again similar to C)`}</pre>
        </NotePage>

        <NotePage pageNumber="59" label="Subset Steps D, E">
          <NoteTitleBox>Subset Construction — States D and E</NoteTitleBox>
          <pre className="ascii-diagram">{`Dtrans[D, a] = ε-closure(3, 8)
             = {1,2,3,4,6,7,8}  similar to B
Dtrans[D, a] = B

Dtrans[D, b] = ε-closure(δ({1,2,4,5,6,7,9}, b))
             = ε-closure(δ(1,b), δ(2,b), δ(4,b), δ(6,b),
                         δ(7,b), δ(9,b))
             = ε-closure(5, 10) = {1,2,4,5,6,7,10}
               let it be E
Dtrans[D, b] = E

Dtrans[E, a] = ε-closure(3, 8) = {1,2,3,4,6,7,8}
             = B  (similar to B)`}</pre>
        </NotePage>

        <NotePage pageNumber="60" label="Subset Summary">
          <NoteTitleBox>Subset Construction — Summary</NoteTitleBox>
          <pre className="ascii-diagram">{`Dtrans[E, b] = ε-closure(5) = {1,2,4,5,6,7}
             = C  (similar to C)`}</pre>
          <p className="note-copy">We got:</p>
          <pre className="ascii-diagram">{`A = {0,1,2,4,7}
B = {1,2,3,4,6,7,8}
C = {1,2,4,5,6,7}
D = {1,2,4,6,7,9}
E = {1,2,4,5,6,7,10}`}</pre>
          <DataTable
            headers={['Transition on a', 'Transition on b']}
            rows={[
              ['Dtrans(A, a) = B', 'Dtrans(A, b) = C'],
              ['Dtrans(B, a) = B', 'Dtrans(B, b) = D'],
              ['Dtrans(C, a) = B', 'Dtrans(C, b) = C'],
              ['Dtrans(D, a) = B', 'Dtrans(D, b) = E'],
              ['Dtrans(E, a) = B', 'Dtrans(E, b) = C'],
            ]}
          />
        </NotePage>

        <NotePage pageNumber="61" label="Final DFA">
          <NoteTitleBox>The Final DFA</NoteTitleBox>
          <p className="note-copy">
            A is the start state, and state E — which contains 10 — is the only accepting state. The final Dtrans is:
          </p>
          <DataTable
            headers={['NFA states', 'DFA state', 'a', 'b']}
            rows={[
              ['{0,1,2,4,7}', 'A', 'B', 'C'],
              ['{1,2,3,4,6,7,8}', 'B', 'B', 'D'],
              ['{1,2,4,5,6,7}', 'C', 'B', 'C'],
              ['{1,2,4,6,7,9}', 'D', 'B', 'E'],
              ['{1,2,4,5,6,7,10}', 'E', 'B', 'C'],
            ]}
          />
          <p className="note-copy">The DFA for the above NFA using subset construction:</p>
          <pre className="ascii-diagram">{`         a           a (loop)
--> (A) ---> (B) <---+
     |        |  b
     | b      v
     v       (D) --b--> ((E))
    (C) <-------b--------+
     |  a           (C loops on b,
     +--> (B)        E goes back to C)`}</pre>
        </NotePage>

        <NotePage pageNumber="62" label="Lexical Generator Design">
          <NoteTitleBox>Design of a Lexical Analyzer Generator</NoteTitleBox>
          <SectionHeading number="1">Structure of the Generated Analyzer</SectionHeading>
          <FlowDiagram
            vertical
            items={[
              { label: 'Input buffer', kind: 'source', note: 'lexemeBegin + forward pointers' },
              { label: 'Automata Simulator', kind: 'process' },
              { label: 'Transition table + Actions', kind: 'process', note: 'produced by Lex compiler from the Lex program' },
            ]}
          />
          <div className="arrow-list">
            <ArrowItem>This structure describes how a finite automata simulator works for the lexical analyzer.</ArrowItem>
            <ArrowItem>The Lex program simulates an automaton.</ArrowItem>
            <ArrowItem>The Lex program consists of all the regular-expression definitions and translation rules.</ArrowItem>
            <ArrowItem>Once a Lex program is compiled, the regular expressions are converted into finite automata.</ArrowItem>
            <ArrowItem>The translation rules are turned into a transition table and actions.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="63" label="Automata Simulator">
          <NoteTitleBox>Automata Simulator</NoteTitleBox>
          <p className="note-copy">
            The transition table and actions are used by the finite automata simulator to recognize the tokens. The
            simulator checks whether any input strings stored in the input buffer match any pattern; if one matches, it
            produces the corresponding token as output.
          </p>
          <p className="note-copy">The automata simulator uses the following components:</p>
          <div className="arrow-list">
            <ArrowItem>A transition table for the automaton.</ArrowItem>
            <ArrowItem>Functions that are passed directly through Lex to the output.</ArrowItem>
            <ArrowItem>The actions from the input, which appear as fragments of code to be invoked at the appropriate time by the automata simulator.</ArrowItem>
          </div>
          <SectionHeading number="1">To Construct an Automaton</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Convert the regular-expression patterns in the Lex program to NFAs.</ArrowItem>
            <ArrowItem>We need a single automaton that will recognize lexemes matching any of the patterns in the program.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="64" label="Combined NFA">
          <NoteTitleBox>Combining the NFAs</NoteTitleBox>
          <p className="note-copy">
            We combine all the NFAs into one by introducing a new start state with ε-transitions. Example:
          </p>
          <pre className="ascii-diagram">{`a     { action A1, for pattern P1 }
abb   { action A2, for pattern P2 }
a*b+  { action A3, for pattern P3 }`}</pre>
          <p className="note-copy">NFAs for a, abb, and a*b+:</p>
          <pre className="ascii-diagram">{`start --> (1) -a-> ((2))

start --> (3) -a-> (4) -b-> (5) -b-> ((6))

start --> (7) -b-> ((8))
          a loop     b loop`}</pre>
          <p className="note-copy">Combined NFA:</p>
          <pre className="ascii-diagram">{`        ε   (1) -a-> ((2))
       /
--> (0) -ε- (3) -a-> (4) -b-> (5) -b-> ((6))
       \\
        ε   (7) -b-> ((8))`}</pre>
        </NotePage>

        <NotePage pageNumber="65" label="Pattern Matching NFA">
          <NoteTitleBox>Pattern Matching Based on the NFA</NoteTitleBox>
          <p className="note-copy">Input string abba — pattern matching based on the NFA:</p>
          <pre className="ascii-diagram">{`{0,1,3,7} -a-> {2,4,7} -a-> {7} -b-> {8} -a-> NONE`}</pre>
          <p className="note-copy">This is the sequence of sets of states entered when processing input abba.</p>
          <p className="note-copy">The DFA for the above NFA:</p>
          <pre className="ascii-diagram">{`start --> (0137) --a--> ((247))
             |             |
             b             b
             v             v
          ((8)) <--b-- ((68)) <--b-- (0)
           b loop       a*b+ accepting`}</pre>
          <p className="note-copy">Transition graph for the DFA handling the patterns a, abb, and a*b+.</p>
        </NotePage>

        <NotePage pageNumber="66" label="DFA Optimization">
          <NoteTitleBox>Optimization of DFA-Based Pattern Matching</NoteTitleBox>
          <p className="note-copy">Convert the regular expression into a DFA without creating an NFA:</p>
          <div className="arrow-list">
            <ArrowItem>Introduce the augmented regular expression.</ArrowItem>
            <ArrowItem>Construct a syntax tree for the RE.</ArrowItem>
            <ArrowItem>Number the leaf nodes.</ArrowItem>
            <ArrowItem>Traverse the syntax tree to compute the function nullable.</ArrowItem>
            <ArrowItem>Compute firstpos and lastpos for each node.</ArrowItem>
            <ArrowItem>Compute followpos of each node.</ArrowItem>
            <ArrowItem>Convert to a DFA.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="67" label="Lab Syllabus">
          <NoteTitleBox>List of Experiments</NoteTitleBox>
          <div className="arrow-list">
            <ArrowItem>1. Implementation of symbol table.</ArrowItem>
            <ArrowItem>2. Develop a lexical analyzer to recognize a few patterns in C (ex. Identifiers, constants, comments, operators etc.)</ArrowItem>
            <ArrowItem>3. Implementation of lexical analyzer using lex tool.</ArrowItem>
            <ArrowItem>4. Generate yacc specification for a few syntactic categories:
              <br /> a) Program to recognize a valid arithmetic expression that uses operators +, -, * and /.
              <br /> b) Program to recognize a valid variable which starts with a letter followed by any number of letters or digits.
              <br /> c) Implementation of calculator using lex and yacc.
            </ArrowItem>
            <ArrowItem>5. Convert the BNF rules into yacc form and write code to generate an abstract syntax tree.</ArrowItem>
            <ArrowItem>6. Implement type checking.</ArrowItem>
            <ArrowItem>7. Implement any one storage allocation strategy (heap, stack, static).</ArrowItem>
            <ArrowItem>8. Write a lex program to count the number of words and number of lines in a given file or program.</ArrowItem>
            <ArrowItem>9. Write a C program to implement a lexical analyzer using C.</ArrowItem>
            <ArrowItem>10. Write a recursive descent parser for the grammar: E→E+T, E→T, T→T*F, T→F, F→(E)/id.</ArrowItem>
            <ArrowItem>11. Write a recursive descent parser for the grammar: S→(L), S→a, L→L,S, L→S.</ArrowItem>
            <ArrowItem>12. Write a C program to calculate the first function for the grammar: E→E+T, E→T, T→T*F, T→F, F→(E)/id.</ArrowItem>
            <ArrowItem>13. Write a YACC program to implement a top-down parser for the given grammar.</ArrowItem>
            <ArrowItem>14. Write a YACC program to evaluate an algebraic expression.</ArrowItem>
          </div>
          <SectionHeading number="1">Text Book</SectionHeading>
          <p className="note-copy">
            Compilers: Principles, Techniques and Tools, Second Edition — Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman.
          </p>
          <SectionHeading number="2">Reference Books</SectionHeading>
          <div className="arrow-list">
            <ArrowItem>Lex &amp; Yacc — John R. Levine, Tony Mason, Doug Brown (O'Reilly).</ArrowItem>
            <ArrowItem>Compiler Construction — Louden, Thomson.</ArrowItem>
          </div>
        </NotePage>

        <NotePage pageNumber="68" label="Symbol Table Program">
          <NoteTitleBox>Experiment 1: Implementation of Symbol Table</NoteTitleBox>
          <p className="note-copy">
            A C program that reads an expression terminated by <code>$</code>, scans it for identifiers (alphabetic
            characters followed by <code>=</code>, <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>,{' '}
            <code>%</code>, or occurring at the end of the expression), and builds a symbol table storing each
            identifier's name, memory address, and type. It then allows searching for a given identifier in the
            table.
          </p>
          <pre className="ascii-diagram">{`#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <ctype.h>

void main()
{
    int i=0,j=0,x=0,n,flag=0;
    char expr[50],id[20],ch,next,search;
    void *addr[20],*p;

    clrscr();

    printf("Enter Expression (End with $): ");

    while((ch=getchar())!='$')
    {
        expr[i]=ch;
        i++;
    }

    n=i-1;

    printf("\\nExpression : ");

    for(i=0;i<=n;i++)
        printf("%c",expr[i]);

    printf("\\n\\nSYMBOL TABLE");
    printf("\\n-----------------------------------------");
    printf("\\nSymbol\\tAddress\\t\\tType");
    printf("\\n-----------------------------------------");

    j=0;

    while(j<=n)
    {
        ch=expr[j];

        if(isalpha(ch))
        {
            if(j==n)
            {
                p=malloc(sizeof(char));
                addr[x]=p;
                id[x]=ch;

                printf("\\n%c\\t%u\\tIdentifier",ch,(unsigned)addr[x]);
                x++;
            }
            else
            {
                next=expr[j+1];

                if(next=='='||next=='+'||next=='-'||
                   next=='*'||next=='/'||next=='%')
                {
                    p=malloc(sizeof(char));
                    addr[x]=p;
                    id[x]=ch;

                    printf("\\n%c\\t%u\\tIdentifier",ch,(unsigned)addr[x]);
                    x++;
                }
            }
        }
        j++;
    }

    printf("\\n\\nEnter Identifier to Search : ");
    search=getch();

    for(i=0;i<x;i++)
    {
        if(search==id[i])
        {
            printf("\\nSymbol Found");
            printf("\\n%c at Address %u",search,(unsigned)addr[i]);
            flag=1;
            break;
        }
    }

    if(flag==0)
        printf("\\nSymbol Not Found");

    getch();
}`}</pre>
          <SectionHeading number="1">Sample Output</SectionHeading>
          <pre className="ascii-diagram">{`Enter Expression (End with $): a=b+c*d$

Expression : a=b+c*d

SYMBOL TABLE
-----------------------------------------
Symbol  Address         Type
-----------------------------------------
a       1000            Identifier
b       1002            Identifier
c       1004            Identifier
d       1006            Identifier

Enter Identifier to Search : c
Symbol Found
c at Address 1004`}</pre>
          <NoteBox title="Note">
            <code>conio.h</code>, <code>clrscr()</code>, and <code>getch()</code> are Turbo C / Turbo C++ specific
            and require a DOS-based compiler (e.g. Turbo C++ 3.0 or its emulator). Addresses are runtime memory
            locations returned by <code>malloc()</code>, so they will vary between systems and runs.
          </NoteBox>
        </NotePage>
      </div>

      <footer className="app-footer">UNIT 1 · LANGUAGE PROCESSING SYSTEMS</footer>
    </main>
  )
}

export default App
