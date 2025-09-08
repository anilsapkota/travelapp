
import Header from "./components/Header"
import Entry from "./components/Entry"
import './App.css'
import DataEntry from "./data.js"

function App() {


  const entries = DataEntry.map((entry) => {

    return (<Entry
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsUrl={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}


      key={entry.id}

    // we can also pass the full object as props like this 
    //entry = {entry}




    />)


  })

  return (
    <>



      <Header />
      <main className="container">


        {entries}

      </main>

    </>
  )
}

export default App
