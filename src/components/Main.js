import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Main() {
    const [selectedTitle, setSelectedTitle] = useState('About Me');

    return (
        <div>
            <Header 
                selectedTitle={selectedTitle}
                setSelectedTitle={setSelectedTitle}
            />
            <Body 
                selectedTitle={selectedTitle}
            />
            <Footer />
        </div>
    );
};

export default Main;