import Ad from "./Components/Ad";
import Articles from "./Components/Articles";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Particle from "./Components/Particle";
import Sponsor from "./Components/Sponsor";
import Container from "./Container";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Container>
      <Particle />
      <Navbar />
      <Banner />
      <Sponsor />
      <Articles />
      <Card />
      <Ad />
      <Footer />
    </Container>
  );
}

export default App;
