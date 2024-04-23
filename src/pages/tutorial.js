import '../App.css';

// import all images from src/imgs
import explore1 from '../imgs/ExplorePage1.jpg';
import explore2 from '../imgs/ExplorePageMenu.jpg';
import explore3 from '../imgs/ActivateWallpaperExplore.jpg';
import preview1 from '../imgs/UI_Control_Preview.jpg';
import preview2 from '../imgs/Preview_Visualization_Type.jpg';
import preview3 from '../imgs/PreviewSync.jpg';
import profile1 from '../imgs/ChangeProfilePic.jpg';
import profile2 from '../imgs/ProfileCreateWallpaper.jpg';
import profile3 from '../imgs/ProfileLogin.jpg';
import help1 from '../imgs/Help.jpg';
import app from '../other_files/app-debug.apk';


function Tutorial() {

  // sample style
  //  style={{fontWeight: "bold", fontSize: "1.5em"}}
  return (
    <div className="Tutorial">
      <h2 className="Tutorial-Title">Tutorial</h2>
      <p>Welcome to LiveWallz! This tutorial will guide you through the basic features of the app.</p>
      <h2 id="getting-started">Getting Started</h2>
      <ol>
      <li><span><strong>Installation</strong>: Download LiveWallz from <a href={app}>this link</a> with your Android device</span></li>
      <li><span><strong>Launch</strong>: Open the LiveWallz app on your mobile device.</span></li>
      </ol>
      <h2 id="pages">Pages</h2>
      <h4 id="explore">Explore</h4>
      <p><img src={explore1} alt="ExplorePageMenu" width="300" style={{marginRight: "20px"}} />
      <img src={explore2} alt="ExplorePageMenu" width="300" />
      <br/>
      <img src={explore3} alt="ActivateWallpaperExplore" width="300" style={{marginRight: "20px"}}/></p>
      <h4 id="preview">Preview</h4>
      <p><img src={preview1} alt="PreviewUIControl" width="300" style={{marginRight: "20px"}} />
      <img src={preview2} alt="Preview_Visualization_Type" width="300" />
      <br/>
      <img src={preview3} alt="Preview_Visualization_Type" width="300" /></p>
      <h4 id="profile">Profile</h4>
      <p><img src={profile1} alt="ChangeProfilePic" width="300" style={{marginRight: "20px"}} />
      <img src={profile2} alt="ProfileCreateWallpaper" width="300" />
      <br/>
      <img src={profile3} alt="ProfileCreateWallpaper" width="300" /></p>
      <h4 id="help">Help</h4>
      <p><img src={help1} alt="ProfileCreateWallpaper" width="300" /></p>
      <h2 id="creating-interactive-wallpapers">Creating Interactive Wallpapers</h2>
      <ol>
      <li><span><strong>Select Wallpaper</strong>: Choose a wallpaper from the available categories or craft your own by using the &#39;User Defined&#39; category and taking advantage of the implicit grapher via the Equation input box.</span></li>
      <li><span><strong>Customize</strong>: Customize the wallpaper by adjusting colors, effects, buttons, sliders and seekers.</span></li>
      <li><span><strong>Save</strong>: Once you&#39;re happy with your creation, sync it up to your profile by selecting &#39;SYNC&#39;</span></li>
      </ol>
      <h2 id="exploring-interactive-wallpapers">Exploring Interactive Wallpapers</h2>
      <ol>
      <li><span><strong>Browse</strong>: Explore a wide range of interactive wallpapers created by other users on the Explore/Home page (magnifying glass icon of the expanded menu button).</span></li>
      <li><span><strong>Preview</strong>: Preview wallpapers before applying them to your device&#39;s home screen by selecting &#39;Activate&#39; button below the desired wallpaper.</span></li>
      </ol>
      <hr/>
      <p>We hope you enjoy using LiveWallz!</p>

    </div>
  );
}

export default Tutorial;