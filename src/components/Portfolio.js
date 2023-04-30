import Header from './Header';

function Portfolio() {

    const selected = () => {
        return "About Me";
    };

    return (
        <Header selected={selected}></Header>
    );
};

export default Portfolio;