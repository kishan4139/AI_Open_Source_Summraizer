import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col" >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button type="button" onClick={() => window.open('https://github.com/kishan4139')} className="black_btn" >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc">
      Make your reading life a cakewalk with Sumz, a marvelous open-source article summarizer that magically shrinks verbose articles into bite-sized, crystal-clear summaries. Say goodbye to mind-numbingly long texts and hello to a world of witty and succinct summaries that will tickle your funny bone! 
      </h2>
    </header>
  )
}

export default Hero