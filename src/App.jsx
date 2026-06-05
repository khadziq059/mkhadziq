import DataImage from "./data"

function App() {
  return (
    <>
    <div className="hero grid grid-cols-10">
      <div className="col-span-6 ml-5">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-3 rounded-2xl">
          <img src={DataImage.HeroImage2} alt="Hero Image" className="w-10 rounded-md"/>
          <q>Building Digital Solutions Through Technology</q>
        </div>
        <h2 className="text-5xl font-bold mb-6">Halo👋,</h2>
        <h1 className="text-5xl font-bold mb-6">Aku Muhammad Khadziq</h1>
        <p className="text-lg mb-6 mr-5">Mahasiswa S1 Informatika Universitas Jenderal Soedirman. <br />
        Tertarik pada pengembangan perangkat lunak, machine learning, dan inovasi teknologi.</p>
        <button className="bg-violet-600 text-white px-6 py-3 rounded-md hover:bg-violet-700 transition-colors">View Projects</button>
      </div>
      <div className="col-span-4 mr-5">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] ml-auto"/>
      </div>
    </div>
    </>
  )
}

export default App
