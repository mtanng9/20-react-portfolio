import { useState } from 'react';
import Header from './Header';

function Portfolio() {
    const [selectedTitle, setSelectedTitle] = useState('About Me');

    return (
        <Header 
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
        />
    );
};

export default Portfolio;