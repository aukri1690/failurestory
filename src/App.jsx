import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Post from './components/Post.jsx';
import NotFound from './components/NotFound.jsx';

import Demo from './components/Demo';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="" element = {<LoginForm/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="*" element={<NotFound/>}/>

        <Route path='demo' element={<Demo/>}/>
      </Routes>
    </Router>
  );
};

export default App;