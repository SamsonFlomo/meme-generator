import FunnyFace from "../assets/troll-face.png";


function Header () {
    return (
        <header className="header flex-row">
              <div className="flex-row">
                 <img src={FunnyFace} alt="Funny Face" className="header-img"></img>
                 <h2 className="header-title">Meme Generator</h2>
              </div> 
              <h4 className="course-title">React Course - Project 3</h4>
        </header>
    );
};


export default Header;
