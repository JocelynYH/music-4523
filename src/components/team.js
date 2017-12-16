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
                <div className='content paper black'>
                    {/*Lindsey */}
                    <div className="show-image">
                      <img src={require('../images/bios/linds.jpg')} />
                      <p className="overlay">“Hip-hop is the people. What the people are moving toward is what hip-hop is. I think people are moving toward a freer way of thinking. Openness.” - Erykah Badu</p>
                      <h1>Lindsey Shavers</h1>
                      <h2>Software Developer/Web Designer, Curator</h2>
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
                      <img src={require('../images/bios/jocelyn.png')} />
                      <p className="overlay">"When the higher forces give you the gift of music... it must be well used for the gift of humanity." - Fela Kuti</p>
                      <h1>Jocelyn Huang</h1>
                      <h2>Web Designer, Curator</h2>
                    </div>

                    {/*Maya*/}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay"> Quote </p>
                      <h1>Maya</h1>
                      <h2>Writer, Curator</h2>
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
                      <img src={require('../images/bios.png')} />
                      <p className="overlay2">"The discovery of the DNA code, for example, is focusing on how you can create
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
                      <h1>Luc</h1>
                      <h2>Researcher, Pianist, Composer</h2>
                    </div>

                    {/*KJ*/}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay"> Quote </p>
                      <h1>KJ</h1>
                      <h2>...</h2>
                    </div>

                    {/*Erik */}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay">“The trouble with the people on this planet is they refuse to think they refuse to believe anything except what they know” - Sun Ra</p>
                      <h1>Erik Bergstrom</h1>
                      <h2>Writer, Music Curator</h2>
                    </div>

                    {/*Michael*/}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay">Quote</p>
                      <h1>Michael</h1>
                      <h2>...</h2>
                    </div>

                    {/*Jake*/}
                    <div className="show-image">
                      <img src={require('../images/bios.png')} />
                      <p className="overlay"> Quote </p>
                      <h1>Jake</h1>
                      <h2>...</h2>
                    </div>

                    {/*Clarence*/}
                    <div className="show-image">
                      <img src={require('../images/bios/clarence.jpg')} />
                      <p className="overlay2"> “If man is to survive, he will have learned to take a delight in the essential differences between men and between cultures. He will learn that differences in ideas and attitudes are a delight, part of life's exciting variety, not something to fear.” - Gene Roddenberry </p>
                      <h1>Clarence</h1>
                      <h2>Performer, Creative Influencer</h2>
                    </div>

                </div>

            </div>
            // header
        )
    }
}

export default Team;
