import Loader from './src/components/ui/Loader.jsx'
import ButtonLoader from './src/components/ui/ButtonLoader.jsx'
import ErrorPage from './src/components/ui/ErrorPage.jsx'


function App() {
  return (
    <>
      <div>
        <ButtonLoader />
        <Loader />
      </div>
    </>
  )
}

export default App
