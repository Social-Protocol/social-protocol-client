import './HeaderBar.css';
import benzene from '../../Logos/benzene_ring.png'

const HeaderBar = () => {
    return (
        <div className = "container">
            <a href="#" ><div className = "home-button"><img src={benzene} className="app-logo " /></div></a> {/*to add logo image later*/}
            <div className='menu-item'>Item 1</div>
            <div className='menu-item'>Item 2</div>
            <div className='menu-item'>Item 3</div>
            <div className='menu-item'>Item 4</div>
            <div className="user menu-item">user</div>
        </div>
    )
}

export default HeaderBar;