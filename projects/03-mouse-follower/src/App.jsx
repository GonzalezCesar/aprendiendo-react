import { useEffect, useState } from "react" 

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition ] = useState({ x: 0, y: 0 })
  useEffect (() => {
    console.log('efecto', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX,  y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // cuando el componente se desmonta
    // cuando cambian las dependenvias, antes de ejecutar
    // el efecto
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
    <div style={{
        position: 'absolute',
        backgroundColor: '#o9f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
      </>
  )
}

function App() {

  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
