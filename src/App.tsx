import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ComponentSlider from './components/Framer/ComponentSlider'

function App() {
  return (
    <div className='bg-[#012200] min-h-screen'>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          factor={2}
          className='bg-gradient-to-b from-[#3b643c] via-[#05220f] to-[#012200]'
        />

        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={2}
        >
          <div 
            className="h-full w-full"
            style={{
              background: `url(/star1.png)`,
              backgroundSize: 'cover',
            }}
          />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={2}
        >
          <div 
            className="h-full w-full"
            style={{
              background: `url(/star2.png)`,
              backgroundSize: 'cover',
            }}
          />
        </ParallaxLayer>

        {/* Hero Content */}
        <ParallaxLayer
          offset={0}
          speed={0.4}
        >
          <div className='flex flex-row justify-between h-screen'>
            <div className='flex flex-col gap-3 w-1/2 justify-center items-center'>
              <div className='flex flex-col gap-3 px-8'>
                <h1 className="text-white text-3xl font-bold">
                  Holla, <span className='text-green-100'>This is About Me</span>
                </h1>
                <h1 className='text-white text-4xl font-bold'>Andreas Jumaga</h1>
                <h1 className='text-white text-2xl font-bold'>
                  Your boy from far away country.
                </h1>
              </div>
            </div>
            <div className='w-1/2 relative'>
              <img 
                src="/astronot.png" 
                className='absolute right-0 h-full object-cover'
                alt="Astronaut" 
              />
            </div>
          </div>
        </ParallaxLayer>

        {/* Full Stack Developer Section (Page 2) */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1}
        >
          <div className='flex items-center justify-center w-full h-screen'>
            <h1 className='text-white text-4xl font-bold'>
              I'm a Full Stack Developer Also AI Engineer
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          factor={4}
          className='bg-gradient-to-b from-[#012200] via-[#05220f] to-[#3b643c]'
        />

        <ParallaxLayer
          offset={1.5}
          speed={0.5}
          factor={2}
          sticky={{start: 1.5, end: 2.5}}
        >
          <div className="w-1/2 flex items-center h-full justify-center">
            <h1 className="text-white text-4xl font-bold px-8">
              This is my Front End - Tech Stack
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-end'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Javascript & Typescript</h1>
                <div className='flex flex-row gap-5'>
                  <img src="/javascript.svg" style={{width: '50%', height: '50%'}} alt="" />
                  <img src="/typescript.svg" style={{width: '50%', height: '50%'}} alt="" />
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-end'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Svelte & React</h1>
                <div className='flex flex-row gap-5'>
                  <img src="/svelte.svg" style={{width: '50%', height: '50%'}} alt="" />
                  <img src="/react.svg" style={{width: '50%', height: '50%'}} alt="" />
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-end'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Tailwind CSS</h1>
                <img src="/tailwind.svg" style={{width: '50%', height: '50%'}} alt="" />
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1.5}
          speed={0.5}
        >
          <div className="flex w-full h-screen">
            <div className="w-1/2 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold px-8">
                This is my Tech Stack
              </h1>
            </div>
            <div className="w-1/2">
              <ComponentSlider>
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num}
                    className="w-full h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center"
                  >
                    <h1 className="text-white text-4xl">Tech Stack {num}</h1>
                  </div>
                ))}
              </ComponentSlider>
            </div>
          </div>
        </ParallaxLayer> */}

        
      </Parallax>
    </div>
  )
}

export default App