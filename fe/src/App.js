import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '~/components/components/Header';
import SideBar from '~/components/components/Sidebar';
import PlayControl from '~/components/components/PlayControl';
import Content from '~/components/components/Content';
import { publicRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <SideBar />
                <Header />
                <Routes>
                    {publicRoutes.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Content>
                                        <route.component />
                                    </Content>
                                }
                            />
                        );
                    })}
                </Routes>
                <PlayControl />
            </div>
        </Router>
    );
}

export default App;
