import Image from "next/image";
export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <div className="flex items-center">
          <img src="/RKLogo.png" alt="Sui logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold">Y.A.A.P Tech</span>
        </div>
        {/* <div className="hidden md:flex space-x-4">
          <div className="relative group">
            <button className="focus:outline-none">Learn</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">Build</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="focus:outline-none">Connect</button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="block px-4 py-2">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2">
                Option 2
              </a>
            </div>
          </div>
        </div> */}
        <button className="bg-slate-800 text-white px-4 py-2 rounded-md">
          Get started
        </button>
      </header>
      <div className="text-center bg-black text-white py-2">
        <p>entrust your website needs to us!</p>
      </div>
      <main className="relative">
        <img
          src="https://images.pexels.com/photos/16229745/pexels-photo-16229745/free-photo-of-smartphone-ponsel-pintar-internet-teknologi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Background"
          className="w-full h-96 rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="filter text-wrap">
            <h1 className="text-5xl font-bold mt-8">Yours Digital Solution</h1>
            <p className="text-xl mt-4">
              Integrated Digital Transformation for Your Business
              {/* Sui delivers the benefits of{" "}
          <span className="text-red-500">Web3</span> with the ease of Web2 */}
            </p>
            {/* <div className="mt-8 space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
                Start building
              </button>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-md">
                Learn about Sui
              </button>
            </div> */}
          </div>
        </div>
      </main>
      <section className="p-4">
        <div className="text-center text-4xl font-semibold mt-8">
          we are here to advance your business
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              // src="https://placehold.co/256x144"
              src="https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGNvbXBhbnklMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="Builder House Singapore 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Company Profile Website
              </h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Watch recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fHww"
              alt="Korean Blockchain Week 2024"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">
                Mobile APPs for Business
              </h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Watch recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0aW5nfGVufDB8fDB8fHww"
              alt="Singapore"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Digital Marketing</h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Read recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden w-64 m-2">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8"
              alt="Kyoto"
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              {/* <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Past
              </span> */}
              <h2 className="mt-2 text-xl font-bold">Consulting Business</h2>
              <a href="#" className="text-blue-400 mt-2 block">
                Read recap <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="bg-black text-white py-8">
        <div className="text-center mb-4">
          <p className="text-lg">The most innovative companies build on Sui</p>
        </div>
        <div className="flex justify-center space-x-8">
          <img
            src="https://placehold.co/100x40"
            alt="Netmarble logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Bluefin logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="GREE logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="XoXo logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Suilend logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="NNN logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Cetus logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Supra logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Oracle Red Bull Racing logo"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40"
            alt="Aftermath logo"
            className="h-10"
          />
        </div>
      </footer> */}
      {/* <main className="p-8"> */}
      {/* <div className="text-center text-4xl font-semibold mb-8">
          The support you need, when you need it
        </div> */}
      {/* <div className="text-center text-4xl font-semibold mb-8">
          grow your business with us
        </div> */}
      {/* <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1684225765169-2c46196bcca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJuZXR8ZW58MHx8MHx8fDA%3D"
              alt="Cube icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">Digitalization</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1669323926640-680d85157a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vYmlsZSUyMGZhc3RlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Cube icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">Mobile Apps Faster</div>
          </div>
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-lg text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1683288662057-2ac296955d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN0YXRpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Trophy icon"
              className="mx-auto mb-4 w-full h-20 object-cover"
            />
            <div className="text-white font-semibold">
              More Client Interact <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div> */}

      {/* <div className="flex justify-center space-x-8">
          <div className="text-white">
            <div className="flex items-center space-x-2">
              <span>Forum</span>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <span>Office hours</span>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <span>Grants</span>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div> */}
      {/* </main> */}
    </div>
  );
}
