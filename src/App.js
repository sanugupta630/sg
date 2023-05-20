import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Display from './components/student-info.component'
import Update from './components/edit-student.component'
import StudentList from './components/Student-list.component'
import Create from './components/create-student.component'
import Header from './components/header.component'
import Footer from './components/footer.component'

function App() {
  return (
    <div className="App">
       <Header/>
     <Router>
     
      <Routes>
        <Route path='/' element={<StudentList/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
      </Routes>
     
     </Router>
      <Footer fix="bottom"/>
    </div>
  );
}

export default App;
