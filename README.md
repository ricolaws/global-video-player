<h1 align="center">Global Video Player</h1>

<div align="center">
  <h3>
    <a href="https://obscure-global.web.app/">
      Demo
    </a>
  </h3>
</div>

<div align="center">
   Choose a spot on a 3D globe to view the most recent videos from that location.
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Setup](#setup)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![Screen Shot 2021-10-05 at 3 41 57 PM](https://user-images.githubusercontent.com/41934323/136112809-d6b44234-7b1a-4c9f-8b9a-92b519f1ed7f.png)

- This project was designed as a novel way of interacting with the YouTube API. 
- By searching for content using only geographic location the user can have access to videos that would be impossible to find on YouTube itself.
- YouTube's personalized reccomendation algorhythm and search criteria such as topic, keyword, channel or view count are disregarded.  
- The UI is a 3D model of the earth built in THREE.js.  All political borders are intentionally removed.
- Double-clicking anywhere on the globe sends coordinates to the API and an endless stream of videos originating from that area are played.

### Built With

- JAVASCRIPT
- REACT
- THREE.JS
- CSS
- HTML

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Replace the API_KEY variable in Gapi.js with your own google API key.

# Run the local server at localhost:8080
npm start
```

## Contact


- GitHub [@ricolaws](https://github.com/ricolaws)

## Acknowledgments

Three.js starter courtesy of [Bruno Simon](https://threejs-journey.xyz/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

