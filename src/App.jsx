import Add from "./components/Add"
import List from "./components/List"
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { useState } from "react"

function App() {
  const [listState,setListState] = useState([])

  return (
    <>
    <div className="layout">
        <Header/>
        <Navbar/>
        <section className="content">
           <List listState={listState} setListState={setListState}/>
        </section>
        <aside className="lateral">
            <Search listState={listState} setListState={setListState}/>
            <Add setListState={setListState}/>
        </aside>

        <footer className="footer">
            &copy; DOQDev
        </footer>
    </div>      
    </>
  )
}

export default App
