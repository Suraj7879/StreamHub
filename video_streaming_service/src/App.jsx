import "./App.css";

function App() {
    return (
        <div className="App">
            <h2> Welcome to my Video Streaming Site</h2>
            <video width="1000px" height="700px" controls>
                <source
                    src="https://d2v0zsymtur9wx.cloudfront.net/Tim Urban_ Inside the mind of a master procrastinator | TED.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}

export default App;
