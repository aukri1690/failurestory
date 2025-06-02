import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Post from './components/Post.jsx';
import NotFound from './components/NotFound.jsx';

import Demo from './components/Demo';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="" element = {<Login/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>

        <Route path='demo' element={<Demo/>}/>
      </Routes>
    </Router>
  );
};

export default App;