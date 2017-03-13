# fnndsc.babymri.org

- [Pre-requisites](#pre-requisites)
  - [Install npm](#install-npm)
  - [Get the source code](#get-the-source-code)
- [For users](#for-users)
  - [Start the server](#start-the-server)
  - [Edit the content](#edit-the-content)
    - [General workflow](#general-workflow)
    - [Add a member](#add-a-member)
    - [Add a section (i.e. FNNDSC, MRI, etc.)](#add-a-section--ie-fnndsc--mri--etc-)
    - [Add a page within a section (i.e. Overview, Team, etc.)](#add-a-page-within-a-section--ie-overview--team--etc-)
    - [Add a table of content in a page](#add-a-table-of-content-in-a-page)
  - [Save you changes to Github](#save-you-changes-to-github)
- [For developers](#for-developers)
  - [Get the polymer cli](#get-the-polymer-cli)
  - [Install the npm/bower dependencies](#install-the-npm-bower-dependencies)
  - [Start the default development server](#start-the-default-development-server)
  - [Build](#build)
  - [Preview the build](#preview-the-build)
  - [Run tests](#run-tests)
  - [Deploy](#deploy)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)


## Pre-requisites

### Install npm

[NPM Official Website](https://nodejs.org/en/download/)

### Get the source code

Use **Git** to fetch the source code.

    cd
    mkdir src
    cd src
    git clone https://github.com/FNNDSC/fnndsc.babymri.org.git

## For users

### Start the server

**If the command does not work, please contact somebody from the dev team for help.**

This command serves the app at [http://localhost:8060](http://localhost:8060):

    cd
    cd src/fnndsc.babymri.org
    npm run serve

Go to [http://localhost:8060](http://localhost:8060).

You should see the `FNNDSC Overview` of the website.

    Pro-tip: Hit `control` key + `c` key at the same time to stop the server.

### Edit the content

#### General workflow

- Do your edits
- Save edits
- Refresh the page @ [http://localhost:8060](http://localhost:8060)

Your updates should be visible @ [http://localhost:8060](http://localhost:8060).

#### [Add a member](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-member)

#### [Add a section (i.e. FNNDSC, MRI, etc.)](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-section)

#### [Add a page within a section (i.e. Overview, Team, etc.)](https://github.com/FNNDSC/fnndsc.babymri.org/wiki/add-page)

#### [Add a table of content in a page]()

### Save you changes to Github

**If the command does not work, please contact somebody from the dev team for help.**

Replace `message content` by a summary of the modifications you did.

    cd
    cd src/fnndsc.babymri.org/
    MESSAGE="message content" npm run save

    # for instance:
    # MESSAGE="Modified FNNDSC overview" npm run save

## For developers

### Get the polymer cli

    npm install -g polymer-cli

### Install the npm/bower dependencies

    cd fnndsc.babymri.org/
    bower install
    npm install

### Start the default development server

This command serves the app at [http://localhost:8080](http://localhost:8080):

    polymer serve

### Build

This command builds the app at `/build/`. There is a `bundled` and `unbundled` build (for HTTP2). We currently use the `bundled` build.

    polymer build

### Preview the build

    polymer serve build/bundled

### Run tests

    polymer test

### Deploy

This command builds the app at `/build/` then pushes `/build/bundled/` to the `gh-pages`.

    npm run deploy
