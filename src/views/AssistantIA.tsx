import { useState, type FormEvent } from 'react'

type Message = {
  role: 'user' | 'assistant'
  text: string
}

const starterMessage: Message = {
  role: 'assistant',
  text: 'Soy tu asistente de cócteles. Pídeme recetas, ideas con ingredientes o una sugerencia según la ocasión.',
}

const quickPrompts = [
  'Recomiéndame un cóctel con tequila',
  'Dame 3 opciones con vodka',
  'Sugiere una bebida sin alcohol',
  'Hazme una receta elegante para una cena',
]

function getAssistantReply(prompt: string) {
  const normalized = prompt.toLowerCase()

  if (normalized.includes('tequila')) {
    return 'Te propongo una Margarita clásica: tequila, triple sec, jugo de limón y sal en el borde. Si quieres, también te doy una versión ahumada o spicy.'
  }

  if (normalized.includes('vodka')) {
    return 'Con vodka puedes probar un Moscow Mule, un Cosmopolitan o un Lemon Drop. Si quieres, adapto la respuesta a ingredientes que tengas en casa.'
  }

  if (normalized.includes('sin alcohol') || normalized.includes('mocktail')) {
    return 'Una buena opción es un mocktail cítrico con limón, naranja, agua con gas y hierbabuena. También puedo darte una lista de opciones refrescantes.'
  }

  if (normalized.includes('cena') || normalized.includes('elegante')) {
    return 'Para una cena elegante, te sugiero un French 75 o un Negroni. Ambos se sienten sofisticados y funcionan muy bien como bienvenida.'
  }

  return 'Puedo ayudarte a elegir una receta, resumir ingredientes o sugerir una bebida según el estilo que quieras. Si me das un ingrediente, te respondo con una opción concreta.'
}

export default function AssistantIA() {
  const [messages, setMessages] = useState<Message[]>([starterMessage])
  const [prompt, setPrompt] = useState('')

  const sendPrompt = (value: string) => {
    const cleanValue = value.trim()

    if (!cleanValue) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'user', text: cleanValue },
      { role: 'assistant', text: getAssistantReply(cleanValue) },
    ])
    setPrompt('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendPrompt(prompt)
  }

  return (
    <section className="rounded-3xl bg-slate-950/90 p-6 text-white shadow-2xl ring-1 ring-white/10 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
            Asistente IA
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
              Un chat para recetas y sugerencias
            </h1>
            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Este asistente ya funciona dentro de la app y responde con sugerencias rápidas.
              Más adelante puedes reemplazar la lógica local por tu API de IA favorita.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={message.role === 'user' ? 'ml-auto max-w-[85%] rounded-2xl bg-orange-500 px-4 py-3 text-slate-950' : 'max-w-[85%] rounded-2xl bg-slate-800 px-4 py-3 text-slate-100'}
                >
                  <p className="text-sm leading-6">{message.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                placeholder="Escribe tu consulta: cóctel con tequila, bebida sin alcohol, receta elegante..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 px-4 py-3 font-bold uppercase tracking-wide text-slate-950 transition hover:bg-orange-400"
              >
                Enviar al asistente
              </button>
            </form>
          </div>
        </div>

        <aside className="space-y-5 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 p-6 text-slate-950 shadow-xl">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Sugerencias rápidas</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => sendPrompt(item)}
                  className="rounded-full bg-slate-950/10 px-4 py-2 text-left text-sm font-semibold transition hover:bg-slate-950/20"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-slate-950/10 p-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Cómo evolucionarlo</p>
            <ul className="space-y-2 text-sm leading-6">
              <li>Conectar el formulario a tu endpoint de IA.</li>
              <li>Guardar el historial en estado global o backend.</li>
              <li>Agregar streaming de respuestas cuando la API lo permita.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}