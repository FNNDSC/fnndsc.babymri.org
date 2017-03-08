# fnndsc.babymri.org

- [fnndsc.babymri.org](#fnndscbabymriorg)
  - [Get the source code](#get-the-source-code)
  - [Docker setup](#docker-setup)
    - [Start the docker development server](#start-the-docker-development-server)
  - [Default setup](#default-setup)
    - [Get the polymer cli](#get-the-polymer-cli)
    - [Install the bower dependencies](#install-the-bower-dependencies)
    - [Start the default development server](#start-the-default-development-server)
    - [Build](#build)
    - [Preview the build](#preview-the-build)
    - [Run tests](#run-tests)
  - [Adding a new view](#adding-a-new-view)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Get the source code

    git clone https://github.com/FNNDSC/fnndsc.babymri.org.git

## Docker setup

### Start the docker development server

This command serves the app at `http://localhost:8060`:

    cd fnndsc.babymri.org
    docker-compose up

## Default setup

### Get the polymer cli

    npm install -g polymer-cli

### Install the bower dependencies

    cd fnndsc.babymri.org
    bower install

### Start the default development server


This command serves the app at `http://localhost:8080`:

    polymer serve

## Build

This command builds the app at `/build/`. There is a `bundled` and `unbundled` build (for HTTP2). We currently use the `bundled` build.

    polymer build

## Preview the build

    polymer serve build/bundled

## Run tests

    polymer test

## Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
