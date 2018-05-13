import { Context, Container } from '../components/baseComponents'
import Navbar from '../components/Navbar'

const Home = (props) => {
  return (
    <Context>
      <Navbar/>
      <Container>
          Hallo Booky
      </Container>
    </Context>
  )
}
export default Home
