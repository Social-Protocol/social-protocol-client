import Card from '../Card/Card.js';
import LeftMenu from '../LeftMenu/LeftMenu.js'
import './Grid.css';

const Grid = () => {
    return (
        <div className="grid-container">
            {/* repreat multiple cards - for loop for each */}
            <LeftMenu/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    )
};

export default Grid;