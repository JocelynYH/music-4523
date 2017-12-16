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
                    <h2>Julian Brass, Luc Cianfarani, KJ Grubiak, Jake Vanaman, Clarence Washington</h2>
                    
                    <p>The group has been researching and considering the artists of Sun Ra and Fela Kuti to record an orginal song combining a Tony Allen drum beat with a Sun Ra chart. The Sun Ra chart is called “A Call for all Demons.” KJ created a Sun Ra beat in his macbeat synthesizer while Clarence, Julian, and Luc play instruments over top of it. Most of the process consists of listening, transcribing, and recording.  Jake is handling all the recording behind the project. </p>

                </section>

                <section className='content composition black'>
                   <h1>Final Project Recording</h1>
                   <iframe src="https://www.youtube.com/embed/zduJorFH-Qc" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    <h1>Trumpet Transcription by Julian Brass</h1>
                    <img class='comp' src={require('../images/trumpet-transcription.png')} />
                    <h1>Trumpet Transcription by Luc</h1>
                    <img class='comp' src={require('../images/sax-transcription.png')} />
                    <h1>The inspiration for the project</h1>
                    <iframe  src="https://www.youtube.com/embed/tyYKpawB4-E" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </section>
                 
                <section className='content composition white'>
                        <h1>Guiding Questions: </h1>
                       <h4> How did you feel about the way the song was recorded?</h4>
                        <h4> What particular ideas or content from class did you consider throughout this process?</h4>
                        <p>
                        “While creating our recording, our group did as many other groups do in the process of music making.  We came together with different ideas and slowly shaped them to a more specific goal until the end product was released.  It was an experience where we as young musicians got to work with other people of the same mindset and physically create something that we could be proud of. 
                        In the process of recording the trombone parts, we had an additional listener that was focusing on their own studies.  We took numerous recordings to figure out which one was best and throughout the recording process, this person was jamming along to what we were doing despite it being in the early works and I thought that it was pretty awesome that we could get this feeling to arise in other students.
                        I think that this recording can speaks to the class as a whole. Part of what we had spoken about in class were the struggles that people faced when producing music.  However, something that most if not all of the people said in interviews/documentaries shown in class was that they wanted to leave their own mark, promote an ideology, share good music, etc.  I believe the audio recording that this group produced encompasses all of those ideas expressed.  Through this recording which will be published, we are naturally leaving our mark.  Our ideas of combining two distinct styles of Fela Kuti and Sun Ra came to fruition, and the end product is something that we are proud to share with others.” – Clarence Washington

                        “During my recording session I was tasked with comping and playing the bass line for the recording session. While this would normally not be hard, I had to do this while not playing with any other musicians.  This was due to recording restraints as well as time constraints. The only thing I was able to listen to was a drum track that was not even the drum track that would be included in the final version. I had to imagine what the solos would sound like and comp appropriately. Additionally, I had to imagine what the Afrobeat drum pattern would sound like and fit my comping into this. What this reminded me of were the makeshift studios that we saw in the townships of South Africa. This process gave me an appreciation for the artists in these townships who are making music in these similar, less than ideal conditions.” – Luc Cianfarani

                        “The Recording process for our product, as Luc said, was of course less than ideal. For me, however, it was incredible to see how you can create an original recording pretty easily and efficiently without having access to world class studios or equipment. That really is the time we live in and as we continue to talk about how major labels can sway an artist’s music to “pop”, I believe there is still plenty of potential for more individual producing as well as ability to reach audiences without going through a major label. This theme connects to a few artists we looked at in class, specifically Nozinja and Casper who emerged from the South African dance music scene. These two artists showed how to connect with massive audiences despite the access constraints indirectly (and directly) brought by the shadow of Apartheid.”- Julian Brass
</p>
                </section>
            </div>
            // header
        )
    }
}

export default Composition;
