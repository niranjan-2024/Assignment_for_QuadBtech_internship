//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar";
import NewsBar from "./components/newsBar/newsBar";
import TableHeading from "./components/tableHeading/tableHeading";
import ListItem from "./components/listItem/listItem";
import Footer from "./components/footer/footer";
import SpecialAddButton from "./components/specialAddButton/specialAddButton";




function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <NewsBar />
      <br /><br />
      <TableHeading />

      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />

      <Footer />
      <SpecialAddButton />
    </div>
  );
}

export default App;
