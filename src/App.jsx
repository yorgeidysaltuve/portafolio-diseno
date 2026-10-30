import { useState, useEffect } from 'react'
import { info, categorias, proyectos, herramientas, experiencia, referencia } from './data'

const proporciones = {
  cuadrado: 'aspect-square',
  horizontal: 'aspect-[4/3]',
  vertical: 'aspect-[9/16]',
  retrato: 'aspect-[4/5]',
  a4: 'aspect-[21/29.7]',
}

function Media({ item }) {
  const [fallo, setFallo] = useState(false)
  const proporcion = proporciones[item.formato] || 'aspect-[4/3]'

  if (fallo) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-gradient-to-br from-violet/40 via-magenta/30 to-coral/30 p-4 text-center ${proporcion}`}
      >
        <span className="font-display text-sm text-white/70">{item.titulo}</span>
      </div>
    )
  }

  if (item.tipo === 'video') {
    return (
      <video
        src={`${item.src}#t=0.1`}
        className={`w-full object-cover ${proporcion}`}
        muted
        loop
        playsInline
        preload="metadata"
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
        onError={() => setFallo(true)}
      />
    )
  }

  return (
    <img
      src={item.tipo === 'carrusel' ? item.imagenes[0] : item.src}
      alt={item.titulo}
      loading="lazy"
      className="block h-auto w-full"
      onError={() => setFallo(true)}
    />
  )
}

function Navbar() {
  const enlaces = [
    ['Trabajos', '#trabajos'],
    ['Sobre mí', '#sobre-mi'],
    ['Experiencia', '#experiencia'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="font-display text-lg font-bold">
          Yorgeidys<span className="text-magenta">.</span>
        </a>
        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {enlaces.map(([texto, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-white">
                {texto}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full bg-gradient-to-r from-violet via-magenta to-coral px-5 py-2 text-sm font-bold text-white transition hover:scale-105"
        >
          Contáctame
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  const datos = [
    ['10+', 'cuentas de redes gestionadas'],
    ['3', 'áreas: diseño, video y web'],
    ['4+', 'años de experiencia'],
  ]

  return (
    <section id="inicio" className="relative overflow-hidden pb-24 md:min-h-[92vh] md:px-5 md:pb-24 md:pt-40">
      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-right bg-no-repeat md:block"
        style={{ backgroundImage: "url('/foto.jpg')" }}
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink from-40% via-ink/60 via-55% to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 hidden h-2/3 bg-gradient-to-t from-ink via-ink/80 to-transparent md:block" />

      <div className="relative h-[62vh] md:hidden">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/foto.jpg')" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="animate-float absolute -left-20 top-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
      <div className="animate-float absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-magenta/20 blur-3xl [animation-delay:3s]" />

      <div className="animate-rise relative mx-auto -mt-20 max-w-[1440px] px-5 md:mt-0 md:px-0">
        <div className="max-w-4xl">
          <p className="mb-6 inline-block rounded-full border border-white/20 bg-ink/40 px-4 py-1 text-sm text-white/80 backdrop-blur">
            Disponible para nuevos proyectos
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl lg:text-8xl">
            Diseño que se ve.
            <br />
            <span className="text-gradient">
              Videos que
              <br />
              se sienten.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80">
            Soy {info.nombre}, {info.titulo.toLowerCase()}. Creo piezas visuales que conectan a las marcas con su audiencia y se ven increíbles en cualquier pantalla.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#trabajos"
              className="rounded-full bg-gradient-to-r from-violet via-magenta to-coral px-8 py-3 font-bold transition hover:scale-105"
            >
              Ver trabajos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/30 bg-ink/30 px-8 py-3 font-bold backdrop-blur transition hover:bg-white/10"
            >
              Hablemos
            </a>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6">
            {datos.map(([numero, texto]) => (
              <div key={texto}>
                <p className="font-display text-4xl font-extrabold text-gradient">{numero}</p>
                <p className="mt-1 text-sm text-white/70">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Cinta() {
  const palabras = [
    'Branding', 'Reels', 'Motion graphics', 'Social media', 'Identidad visual',
    'Miniaturas', 'Carruseles', 'Posters', 'Desarrollo web', 'UI',
  ]
  const lista = [...palabras, ...palabras]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-card py-5">
      <div className="animate-marquee flex w-max gap-12">
        {lista.map((palabra, i) => (
          <span key={i} className="font-display text-2xl font-bold text-white/80">
            {palabra} <span className="ml-12 text-magenta">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Visor({ items, indice, setIndice }) {
  const item = items[indice]
  const grupo = items.map((v, i) => [v, i]).filter(([v]) => v.grupo === item.grupo)

  useEffect(() => {
    const teclas = (e) => {
      if (e.key === 'Escape') setIndice(null)
      if (e.key === 'ArrowRight') setIndice((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setIndice((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', teclas)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', teclas)
      document.body.style.overflow = ''
    }
  }, [items.length, setIndice])

  const anterior = (e) => {
    e.stopPropagation()
    setIndice((i) => (i - 1 + items.length) % items.length)
  }

  const siguiente = (e) => {
    e.stopPropagation()
    setIndice((i) => (i + 1) % items.length)
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
      onClick={() => setIndice(null)}
    >
      <button
        onClick={() => setIndice(null)}
        aria-label="Cerrar"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl transition hover:bg-white/10"
      >
        ✕
      </button>
      <button
        onClick={anterior}
        aria-label="Anterior"
        className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl transition hover:bg-white/10 sm:left-6"
      >
        ‹
      </button>
      <button
        onClick={siguiente}
        aria-label="Siguiente"
        className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl transition hover:bg-white/10 sm:right-6"
      >
        ›
      </button>

      <div className="max-w-5xl text-center" onClick={(e) => e.stopPropagation()}>
        {item.tipo === 'video' ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            loop
            playsInline
            className="mx-auto max-h-[74vh] max-w-full rounded-xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.titulo}
            className="mx-auto max-h-[74vh] max-w-full rounded-xl object-contain"
          />
        )}

        {item.total > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {grupo.map(([v, i]) => (
              <button
                key={i}
                onClick={() => setIndice(i)}
                aria-label={`Diapositiva ${v.slide}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === indice ? 'w-6 bg-magenta' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        <p className="mt-4 font-display text-lg font-bold">
          {item.titulo}
          {item.total > 1 && (
            <span className="font-body text-sm font-normal text-white/60">
              {' '}· {item.slide} de {item.total}
            </span>
          )}
        </p>
        <p className="text-sm text-magenta">{item.categoria}</p>
      </div>
    </div>
  )
}

function Tarjeta({ item, onAbrir }) {
  const esCarrusel = item.tipo === 'carrusel'

  return (
    <div className="mb-6 break-inside-avoid">
      <div className={`relative ${esCarrusel ? 'pb-3 pr-3' : ''}`}>
        {esCarrusel && (
          <>
            <div className="absolute bottom-0 left-3 right-0 top-3 rounded-2xl border border-white/15 bg-card" />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 top-1.5 rounded-2xl border border-white/20 bg-white/10" />
          </>
        )}
        <article
          onClick={onAbrir}
          className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-card"
        >
          <Media item={item} />

          {esCarrusel && (
            <span className="absolute right-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-medium backdrop-blur">
              ❐ {item.imagenes.length} slides
            </span>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="text-xs uppercase tracking-widest text-magenta">{item.categoria}</span>
            <span className="text-sm text-white/80">{esCarrusel ? 'Ver carrusel ⤢' : 'Ampliar ⤢'}</span>
          </div>
        </article>
      </div>
      <p className="mt-3 px-1 text-sm font-medium text-white/80">{item.titulo}</p>
    </div>
  )
}

function Trabajos() {
  const [activa, setActiva] = useState('Todos')
  const [indice, setIndice] = useState(null)
  const visibles = proyectos.filter((p) => activa === 'Todos' || p.categoria === activa)

  const vistas = visibles.flatMap((item) =>
    item.tipo === 'carrusel'
      ? item.imagenes.map((src, n) => ({
          ...item,
          tipo: 'imagen',
          src,
          slide: n + 1,
          total: item.imagenes.length,
          grupo: item.id,
        }))
      : [{ ...item, slide: 1, total: 1, grupo: item.id }]
  )

  const abrir = (id) => setIndice(vistas.findIndex((v) => v.grupo === id))

  return (
    <section id="trabajos" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-24">
      <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
        Mis <span className="text-gradient">trabajos</span>
      </h2>
      <p className="mt-4 max-w-xl text-white/60">
        Una selección de proyectos de diseño, video y desarrollo web para marcas y clientes reales. Haz clic en cualquier pieza para verla en grande.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiva(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              activa === cat
                ? 'bg-gradient-to-r from-violet via-magenta to-coral text-white'
                : 'border border-white/15 text-white/70 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visibles.map((item) => (
          <Tarjeta key={item.id} item={item} onAbrir={() => abrir(item.id)} />
        ))}
      </div>

      {indice !== null && (
        <Visor items={vistas} indice={indice} setIndice={setIndice} />
      )}
    </section>
  )
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-card px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
            Sobre <span className="text-gradient">mí</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Soy editora de video, diseñadora y desarrolladora web, creativa y proactiva, con experiencia creando soluciones visuales efectivas para clientes. Busco aportar mi energía y versatilidad para generar impacto en tu empresa.
          </p>
          <p className="mt-4 text-white/60">
            Me formé como TSU en Diseño Gráfico y TSU en Informática, y esa mezcla me permite diseñar una pieza, editarla en video y llevarla a una página web funcional.
          </p>
        </div>

        <div className="space-y-8">
          {herramientas.map((bloque) => (
            <div key={bloque.grupo}>
              <h3 className="font-display text-xl font-bold">{bloque.grupo}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {bloque.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-24">
      <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
        Mi <span className="text-gradient">experiencia</span>
      </h2>
      <div className="mt-12 space-y-6 border-l border-white/15 pl-8">
        {experiencia.map((e) => (
          <div key={e.rol + e.periodo} className="relative rounded-2xl border border-white/10 bg-card p-6">
            <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-gradient-to-r from-violet to-magenta" />
            <p className="text-sm text-magenta">{e.periodo}</p>
            <h3 className="font-display text-xl font-bold">{e.rol}</h3>
            <p className="text-white/50">{e.empresa}</p>
            <p className="mt-3 text-white/70">{e.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Referencia() {
  const captura = {
    titulo: referencia.marca,
    src: referencia.captura,
    tipo: 'imagen',
    formato: 'retrato',
  }

  return (
    <section id="referencia" className="scroll-mt-20 bg-card px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
          Trabajo con <span className="text-gradient">{referencia.marca}</span>
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <a
            href={referencia.perfil}
            target="_blank"
            rel="noreferrer"
            className="mx-auto block w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-ink transition hover:scale-[1.02]"
          >
            <Media item={captura} />
          </a>

          <div>
            <p className="text-sm text-magenta">{referencia.periodo}</p>
            <h3 className="font-display text-2xl font-bold">{referencia.rol}</h3>
            <p className="text-white/50">{referencia.marca}</p>
            <p className="mt-4 max-w-xl text-white/70">{referencia.texto}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={referencia.perfil}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-violet via-magenta to-coral px-7 py-3 font-bold transition hover:scale-105"
              >
                Ver perfil en Instagram
              </a>
              <a
                href={referencia.carta}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-7 py-3 font-bold transition hover:bg-white/10"
              >
                Ver carta de recomendación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Contacto() {
  const enlaces = [
    ['Correo', `mailto:${info.email}`],
    ['WhatsApp', `https://wa.me/${info.whatsapp}`],
    ['Instagram', info.instagram],
    ['LinkedIn', info.linkedin],
  ]

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden px-5 py-28">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta/25 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-5xl font-extrabold sm:text-7xl">
          ¿Creamos algo <span className="text-gradient">increíble</span>?
        </h2>
        <p className="mt-6 text-lg text-white/70">
          Cuéntame tu idea y la convertimos en diseño, video o una página web.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {enlaces.map(([texto, href]) => (
            <a
              key={texto}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:bg-gradient-to-r hover:from-violet hover:via-magenta hover:to-coral"
            >
              {texto}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cinta />
        <Trabajos />
        <SobreMi />
        <Experiencia />
        <Referencia />
        <Contacto />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {info.nombre}. Todos los derechos reservados.
      </footer>
      <a
        href={`https://wa.me/${info.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  )
}