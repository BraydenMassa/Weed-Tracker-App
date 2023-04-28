import '../styles/Home.css'
import '../styles/Generic.css'
const Home = () => {

    return (
        <div className="container">
            <header className="home-header">
                <p>Weed Tracking App</p>
            </header>
            <div className="home-list">
                <p>Please select an option below:</p>
                <ul>
                    <a href="/create" className="home-button"><span>Create new entry</span></a>
                    <a href="/view" className="home-button"><span>View/edit past entries</span></a>
                    <a href="/exit" className="home-button"><span>Exit</span></a>
                </ul>
            </div>
        </div>
    )
}

export default Home