
import { useState, useEffect } from "react";


function Meme() {
    const [meme, setMeme] = useState({
        topText: " ",
        botomText: " ",
        memeImg: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemesData, setAllMemesData] = useState({});

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemesData(data.data.memes))
    }, [])


    function RandomMemeImg() {
        const rendomNumber = Math.floor(Math.random() * allMemesData.length);
        const url = allMemesData[rendomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            memeImg: url
        }));
    };


    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main className="meme-container flex-col">

            <div className="meme-form flex-col" >
                <div className="input-wrapper flex-row">
                    <div className="text-wrapper flex-col">
                        <label className="top-txt txt" htmlFor="top-input">Top Text</label>
                        <input
                            type="text"
                            placeholder="Shut Up!"
                            id="top-input"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="text-wrapper flex-col">
                        <label className="bottom-txt txt" htmlFor="bottom-input">
                            Bottom Text
                        </label>
                        <input
                            type="text"
                            placeholder="And Take MY Money"
                            id="bottom-input"
                            name="botomText"
                            value={meme.botomText}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className="meme-btn" onClick={RandomMemeImg}>
                    Get A New Image
                    🖼
                </button>
            </div>
            <div className="meme">
                <h2 className="top meme-text">{meme.topText ? meme.topText : "Top text"}</h2>
                <h2 className="bottom meme-text">{meme.botomText ? meme.botomText : "Bottom text"}</h2>
                <img src={meme.memeImg} alt="meme-img" className="meme-img" />
            </div>
        </main>
    );
};


export default Meme;
