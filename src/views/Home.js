import React from 'react';
import logo from './Steam Choco 300.png';

function Welcome(props) {
    return (
    <h1>Welcome to {props.name}</h1>
    )
  }

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
            <Welcome name="NESCHOCO™"/>
                <img src={logo} alt="Logo" />
            </header>
        </div>
    )
}