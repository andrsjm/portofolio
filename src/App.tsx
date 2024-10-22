import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ComponentSlider from './components/Framer/ComponentSlider'

function App() {
  return (
    <div className='bg-[#1f1f1f]'>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            background: `url(/galaxy.jpg)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            background: `url(/star1.png)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={2}
          style={{
            background: `url(/star2.png)`, 
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={2}
        >
          <div className='flex justify-center items-center h-screen'>
            <h1 className="text-white text-4xl font-bold">Andreas Jumaga</h1>
          </div>
        </ParallaxLayer>

        
        <ParallaxLayer 
          sticky={{start: 1, end: 3}}
          style={{ pointerEvents: 'none' }}
        >
          <ComponentSlider>
            <div className="flex w-full h-screen">
              <div className="w-1/2 bg-black flex items-center pl-8" style={{ pointerEvents: 'auto' }}>
                <h1 className="text-white text-4xl font-bold">Digidaw</h1>
              </div>
              
              
              <div className="w-1/2" />
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        
        {[1, 2, 3].map((num) => (
          <ParallaxLayer 
            key={num}
            offset={num}
            speed={0.5}
            factor={0.5}
            style={{ pointerEvents: 'auto'}} // Allow pointer events for these layers
            className='bg-[#1f1f1f]'
          >
            <ComponentSlider>
              <div className="flex w-full h-screen">
                <div className="w-1/2" />
                <div className="w-1/2 bg-black flex justify-center items-center">
                  <h1 className="text-white text-4xl">Aweu {num}</h1>
                </div>
              </div>
            </ComponentSlider>
          </ParallaxLayer>
        ))}

      </Parallax>
    </div>
  )
}

export default App