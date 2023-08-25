import { useRoutes } from "react-router-dom"

import styles from "./App.module.css"
import Header from "./components/Header"
import routes from "./routes"

const App = () => {
  // Utilizamos o hook useRoutes
  const element = useRoutes(routes)
  return(
    <>
      <Header />
      
      <div className={styles.container}>
        {element}
      </div>
    </>
  )
}
export default App