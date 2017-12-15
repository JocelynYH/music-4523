import React, { Component } from 'react';
import '../App.css';

class Composition extends Component {
    render() {
        return(
            <div className="Main">
                <section className='title white'>
                    <div className='contentTitle'>
                    <img src={require('../images/fela-ra.png')} />
                    </div>
                    <h1>“Fela-Ra”- An exploration of Afrofuturism and afrobeat to create an original tune</h1>
                    <p>The group has been researching and considering the artists of Sun Ra and Fela Kuti to record an orginal song combining a Tony Allen drum beat with a Sun Ra chart. The Sun Ra chart is called “A Call for all Demons.” KJ created a Sun Ra beat in his macbeat synthesizer while Clarence, Julian, and Luc play instruments over top of it. Most of the process consists of listening, transcribing, and recording.  Jake is handling all the recording behind the project. I meant to list that.</p>
                  
                </section>

                <section className='content composition black'>
                    <p>This is an example composition. [TO be inserted: 1. transcription (link to download pdf file or pdf display) 2.  Audio recording presented as an audio link 3. Video as an embedded youtube video</p>
                </section>
            </div>
            // header
        )
    }
}

export default Composition;
