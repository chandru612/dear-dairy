import { CssBaseline, Grid } from "@mui/material"
import { Header } from "./components/header"
import { SideNav } from "./components/sidenav"
import { Homepage } from "./pages/homepage"
import { Create } from "./pages/create"
import { useState } from "react"

const App = () => {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home': return <Homepage />
      case 'create': return <Create />
    }
    throw new Error('Page not found')
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <SideNav onMenuChange={(newPage) => setPage(newPage)} />
        </Grid>
        <Grid item xs={10} padding={2}>
          {renderPage()}
        </Grid>
      </Grid>
    </>
  )
}

export { App }
