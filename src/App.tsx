import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ComponentSlider from './components/Framer/ComponentSlider'

function App() {
  return (
    <div className='bg-[#012200] min-h-screen'>
      <Parallax pages={10} style={{ top: '0', left: '0' }}>
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

        {/* Front End */}
          
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
                <h1 className='text-4xl text-white font-bold'>Languages</h1>
                <div className='grid grid-cols-2 gap-5 items-center justify-center'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Javascript</h1>
                    <img src="/javascript.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Typescript</h1>
                    <img src="/typescript.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Node JS</h1>
                    <img src="/nodejs.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>PHP</h1>
                    <img src="/php.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.75}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-end'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Framework</h1>
                <div className='grid grid-cols-2 gap-3 items-center justify-center'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>React</h1>
                    <img src="/react.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Vue JS</h1>
                    <img src="/vue.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Svelte</h1>
                    <img src="/svelte.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Laravel</h1>
                    <img src="/laravel.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
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
                <div className='grid grid-cols-2 gap-3 items-center justify-center'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>CSS</h1>
                    <img src="/css.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Tailwind CSS</h1>
                    <img src="/tailwind.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>



        <ParallaxLayer
          offset={5.5}
          speed={0.1}
          factor={2}
          className='bg-gradient-to-b from-[#3b643c] via-[#05220f] to-[#012200]'
        />

        {/* Back End */}
          
        <ParallaxLayer
          speed={0.5}
          sticky={{start: 3.5, end: 6.5}}
        >
          <div className="w-full flex items-center h-full justify-end">
            <h1 className="text-white text-4xl font-bold px-8">
              This is my Back End - Tech Stack
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-start'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Languages</h1>
                <div className='grid grid-cols-2 gap-3 items-center justify-center'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Java</h1>
                    <img src="/java.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Go Language</h1>
                    <div className='p-5 flex justify-center'>
                      <img src="/golang.svg" className='bg-white rounded-xl p-6' style={{width: '50%', height: '50%'}} alt="" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Node JS</h1>
                    <img src="/nodejs.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>PHP</h1>
                    <img src="/php.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Python</h1>
                    <img src="/python.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-start'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Framework</h1>
                <div className='grid grid-cols-2 gap-8 items-center justify-center'>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Fast API</h1>
                    <img src="/fastapi.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Express JS</h1>
                    <div className='p-5 flex justify-center'>
                      <img src="/express.svg" className='bg-white rounded-xl p-6' style={{width: '60%', height: '60%'}} alt="" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Flask</h1>
                    <div className='p-5 flex justify-center'>
                      <img src="/flask.svg" className='bg-white rounded-xl p-6' style={{width: '50%', height: '50%'}} alt="" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Laravel</h1>
                    <img src="/laravel.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Go</h1>
                    <div className='p-5 flex justify-center'>
                      <img src="/golang.svg" className='bg-white rounded-xl p-6' style={{width: '50%', height: '50%'}} alt="" />
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Spring Boot</h1>
                    <img src="/spring.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>


        <ParallaxLayer
          offset={6}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-start'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Databases</h1>
                <div className='grid grid-cols-2 gap-8 items-center justify-center'>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>MySql</h1>
                    <img src="/mysql.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>PostgreSql</h1>
                    <img src="/postgre.svg" style={{width: '60%', height: '60%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Mongo DB</h1>
                    <img src="/mongo.svg"  style={{width: '50%', height: '50%'}} alt="" />
                    <div className='p-5 flex justify-center'>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Redis</h1>
                    <img src="/redis.svg" style={{width: '40%', height: '40%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Maria DB</h1>
                    <img src="/mariadb.svg"  style={{width: '50%', height: '50%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Sql Server</h1>
                    <div className='p-5 flex justify-center'>
                      <img src="/sqlserver.svg" className='bg-white rounded-xl p-6' style={{width: '60%', height: '60%'}} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={5.5}
          speed={0.5}
          factor={0.5}
        >
          <ComponentSlider>
            <div className='flex justify-start'>
              <div className='w-1/2 flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>Tailwind CSS</h1>
                <div className='flex flex-row gap-3 items-center justify-center'>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>CSS</h1>
                    <img src="/css.svg" style={{width: '50%', height: '50%'}} alt="" />
                  </div>
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-2xl text-white font-bold'>Tailwind CSS</h1>
                    <img src="/tailwind.svg" style={{width: '50%', height: '50%'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentSlider>
        </ParallaxLayer> */}




        {/* Work Experience */}

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