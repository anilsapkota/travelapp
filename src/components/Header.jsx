import GlobeImage from '../assets/globe.png'


export default function Header() {
    return (
        <header className="header">
            <img src={GlobeImage} className="header-img" alt="globe" />
            <span className="header-text">my travel journal.</span>
        </header>
    )
}