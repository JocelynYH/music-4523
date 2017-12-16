import React, { Component } from 'react';
import '../App.css';

class Team extends Component {
    render() {
        return(
            <div className="Main">
                <section className='title white'>
                  <div className='contentTitle'>
                    <img src={require('../images/bios.png')} />
                  </div>
                </section>

                {/*Bios Sections */}
                <div className='content paper black bio'>
                    {/*Lindsey */}
                    <div className="show-image">
                      <img src={require('../images/bios/linds.jpg')} />
                      <p className="overlay decrease">“Music is a weapon of the future / music is the weapon of the progressives / music is the weapon of the givers of life” - Fela Kuti</p>
                      <h1>Lindsey Shavers</h1>
                      <h2>Software Developer, Web Designer, Curator</h2>
                    </div>

                    {/*Corrine*/}
                    <div className="show-image">
                      <img src={require('../images/bios/corrinne.png')} />
                      <p className="overlay">"I could never leave my home.... It inspires me a lot." -Fela Kuti </p>
                      <h1>Corrinne James</h1>
                      <h2>Artistic Designer, Curator</h2>
                    </div>

                    {/*Jocelyn*/}
                    <div className="show-image">
                      <img src={require('../images/bios/jocelyn.jpg')} />
                      <p className="overlay">"When the higher forces give you the gift of music... it must be well used for the gift of humanity." - Fela Kuti</p>
                      <h1>Jocelyn Huang</h1>
                      <h2>Web Designer, UX Designer, Curator</h2>
                    </div>

                    {/*Maya*/}
                    <div className="show-image">
                      <img src={require('../images/bios/maya.jpg')} />
                      <p className="overlay"></p>
                      <h1>Maya Silverman</h1>
                      <h2>Poet, Curator</h2>
                    </div>

                    {/*Ruby Nwaebube */}
                    <div className="show-image">
                      <img src={require('../images/bios/ruby.jpg')} />
                      <p className="overlay">“With my music, I create change….I am using my music as a weapon” - Fela Kuti</p>
                      <h1>Ruby Nwaebube</h1>
                      <h2>Journalist, Interviewer</h2>
                    </div>

                    {/*Julian Brass*/}
                    <div className="show-image">
                      <img src={require('../images/bios/julian.png')} />
                      <p className="overlay two decrease xs">"The discovery of the DNA code, for example, is focusing on how you can create
different species of beings by starting from the very smallest particles and their components.
That is why we are all part of the spirit of the atomic age. In music, we do exactly the same”
(Karlheinz Stockhausen)- from More Brilliant than the sun: adventures in sonic fiction by
Kodwo Eshun</p>
                      <h1>Julian Brass</h1>
                      <h2>Researcher, Trumpeter, Composer</h2>
                    </div>

                    {/*Luc*/}
                    <div className="show-image">
                      <img src={require('../images/bios/luc.jpg')} />
                      <p className="overlay">“If you’re not mad at the world, you don’t have what it takes” - Sun Ra </p>
                      <h1>Luc Cianfarani </h1>
                      <h2>Researcher, Pianist, Composer</h2>
                    </div>

                    {/*KJ*/}
                    <div className="show-image">
                      <img src={require('../images/bios/kj.jpg')} />
                      <p className="overlay decrease">"Most composers write a drum part with a regular beat that anybody in the whole world could play.  I always like to extract the beat that's there and then try lots of different beats and different ways of drumming around it. That's the only way not to get bored."- Tony Allen </p>
                      <h1>KJ Grubiak</h1>
                      <h2>Researcher, Composer</h2>
                    </div>

                    {/*Erik */}
                    <div className="show-image">
                      <img src={require('../images/bios/erik.jpg')} />
                      <p className="overlay">“The trouble with the people on this planet is they refuse to think they refuse to believe anything except what they know” - Sun Ra</p>
                      <h1>Erik Bergstrom</h1>
                      <h2>Writer, Music Curator</h2>
                    </div>

                    {/*Mike*/}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay"></p>
                      <h1>Mike Estep</h1>
                      <h2>Videographer, Film Editor</h2>
                    </div>

                    {/*Jake*/}
                    <div className="show-image">
                      <img src={require('../images/bios/jake.jpg')} />
                      <p className="overlay">"99.9% of the information you get about Africa is wrong." - Fela Kuti </p>
                      <h1>Jake Vanaman</h1>
                      <h2>Recording Engineer, Producer</h2>
                    </div>

                    {/*Clarence*/}
                    <div className="show-image">
                      <img src={require('../images/bios/clarence.jpg')} />
                      <p className="overlay decrease"> “If man is to survive, he will have learned to take a delight in the essential differences between men and between cultures. He will learn that differences in ideas and attitudes are a delight, part of life's exciting variety, not something to fear.” - Gene Roddenberry </p>
                      <h3>Clarence Washington</h3>
                      <h2>Performer, Creative Influencer</h2>
                    </div>

                </div>

            </div>
            // header
        )
    }
}

export default Team;
