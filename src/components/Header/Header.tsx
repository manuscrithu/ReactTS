import './Header.scss'
import headerImage from '../../assets/images/react-core-concepts.png'

function Header() {
    return(
        <div className='header-container'>
            <img src={headerImage} alt='Header-image' className='header-image' />
            <h1 className='header-title'>React Essentials</h1>
            <p className='header-subtitle'>Crutial React core concepts you will need for almost any app you are going to build.</p>
        </div>
    )
}

export default Header