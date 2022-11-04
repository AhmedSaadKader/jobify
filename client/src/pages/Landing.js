import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby jianbing chartreuse hella activated charcoal VHS squid. Stumptown subway tile aesthetic
            williamsburg, gastropub vibecession quinoa shoreditch DSA plaid. Raclette organic forage fam dreamcatcher
            bitters, church-key hot chicken franzen cold-pressed occupy narwhal
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
