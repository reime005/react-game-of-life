# React Game of Life

This is an implementation of Conway's Game of Life. It is built with React, Redux, Webpack and Docker. You run it locally using Docker or play it on [https://reime005.github.io/react-game-of-life](https://reime005.github.io/react-game-of-life).

You may need the following tools in order to proceed:

* docker
* git
* docker-compose

[![Build Status](https://travis-ci.org/reime005/react-game-of-life.svg?branch=master)](https://travis-ci.org/reime005/react-game-of-life)

## Usage via Docker

Steps:

    git clone https://github.com/reime005/react-game-of-life.git
    cd react-game-of-life/
    docker build -t react-game-of-life .
    docker run -it --rm -p 8080:8080 --name react-game-of-life react-game-of-life

Or just pull:

    docker pull reimerm/react-game-of-life
    docker run -it --rm -p 8080:8080 --name react-game-of-life reimerm/react-game-of-life

The site should then appear on localhost:8080.

## Usage via Docker Compose

Steps:

    docker-compose pull && docker-compose up

Stopping the container:

    docker-compose down

The site should then appear on localhost:8080.

## Things that could be optimized

* (Responsive) Design
* User Experience