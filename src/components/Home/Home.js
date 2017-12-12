import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        let heading = "Soaring to new heights";
        let subheading = "The intelligence, technology and human experise you need to find trusted answer.";
        return (
        <div>
            <section class="hero">
                <div class="hero-body">
                <div class="container">
                    <h1 class="title">{ heading }</h1>
                    <div class="is-two-thirds column is-paddingless">
                    <h2 class="subtitle is-4">{subheading }</h2>
                    </div>
                    <a class="button is-large is-primary" id="learn">Learn more</a>
                </div>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="columns pd is-desktop">
                        <div class="column is-1 has-text-centered">
                        <i class="fa fa-cog is-primary"></i>
                        </div>
                        <div class="column is-one-third-desktop">
                        <p class="title"><strong>We provide superior</strong></p>
                        </div>
                        <div class="column">
                        <p class="subtitle">The intelligence, technology and human experise you need to find trusted answer.</p>
                        </div>
                    </div>
                </div>

                <div class="columns pd">
                    <div class="column">
                        <div class="card">
                        <div class="card-content">
                            <p class="title">I think it's an absolutely excellent tool for our business I can't survive without this think.</p>
                            <p class="subtitle">- Gary simon</p>
                        </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                        <div class="card-content">
                            <p class="title">I think it's an absolutely excellent tool for our business I can't survive without this think.</p>
                            <p class="subtitle">- Gary simon</p>
                        </div>
                        </div>
                    </div> 
                    <div class="column">
                        <div class="card">
                        <div class="card-content">
                            <p class="title">I think it's an absolutely excellent tool for our business I can't survive without this think.</p>
                            <p class="subtitle">- Gary simon</p>
                        </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
        );
    }
}

export default Home;