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
                    <p>description</p>
                </section>

                <section className='content composition black'>
                    <p>This is an example composition. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit modi, quia, dolore consequuntur laboriosam quaerat, repellendus quos provident tenetur consequatur excepturi officiis adipisci amet nemo, vel? Ab dolores, odio.</p>
                </section>
            </div>
            // header
        )
    }
}

export default Team;
