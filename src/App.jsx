
import Header from "./components/Header"
import Entry from "./components/Entry"
import './App.css'

function App() {


  return (
    <>

      <Header />
      <main className="container">
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
          }}

          title="Mount Fuji"
          country="Japan"
          googleMapsUrl="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Aug,2026 - 19 Aug,2026"
          text="Mount Fuji is the highest mountain in Japan.It is single most iconic place in Japan both for local and foreigners"


        />

      </main>

    </>
  )
}

export default App
