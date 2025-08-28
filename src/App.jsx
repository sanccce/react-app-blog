import Blog from "./Blog";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main className="Main">
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
