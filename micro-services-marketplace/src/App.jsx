import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import SubPage from './components/SubPage.jsx';
import SoMePostPage from './components/SoMePostPage.jsx';
import YouTubeShoutoutPage from './components/YouTubeShoutoutPage.jsx';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route
                        path='/service/some-post'
                        element={<SoMePostPage />}
                    />
                    <Route
                        path='/service/youtube-shoutout'
                        element={<YouTubeShoutoutPage />}
                    />
                    <Route path='/service/:id' element={<SubPage />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App;
