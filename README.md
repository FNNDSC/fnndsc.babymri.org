# fnndsc.babymri.org

- [fnndsc.babymri.org](#fnndscbabymriorg)
  - [Install npm](#install-npm)
  - [Get the source code](#get-the-source-code)
  - [Easy setup](#easy-setup)
    - [Start the docker development server](#start-the-docker-development-server)
    - [Save changes](#save-changes)
  - [Default setup](#default-setup)
    - [Get the polymer cli](#get-the-polymer-cli)
    - [Install the bower dependencies](#install-the-bower-dependencies)
    - [Start the default development server](#start-the-default-development-server)
    - [Build](#build)
    - [Preview the build](#preview-the-build)
    - [Run tests](#run-tests)
    - [Deploy](#deploy)
  - [Add a view](#add-a-view)
    - [Add a member](#add-a-member)
    - [Add a section](#add-a-section)
    - [Add a page in a section](#add-a-page-in-a-section)
    - [Add a table of content in a page](#add-a-table-of-content-in-a-page)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Install npm

**NPM** is required to save the code on the Github server easily.

## Get the source code

Use **Git** to fetch the source code.

    git clone https://github.com/FNNDSC/fnndsc.babymri.org.git

## Easy setup

Easy setup leverages **Docker** to easily modify content. It is recommended if you just intend to add/remove pages or content. For more advanced development, please follow the default setup.

### Start the docker development server

This command serves the app at `http://localhost:8060`:

    cd fnndsc.babymri.org
    docker-compose up

### Save changes

**If the command does not work, please contact somebody from the dev team for help.**

Working with **Git** can be confusing and we provide a simple command to work around it.

5 steps that were merged into 1 command:

1. Fetch the latest version of the source code
2. Merge/solve conflicts
3. Adds new files
4. Commits modified files
5. Push everything to **Github**

Update to **MESSAGE** by a summary of the modifications you did.

    cd fnndsc.babymri.org/
    MESSAGE="Added user and modified the overview page." npm run save

## Default setup

### Get the polymer cli

    npm install -g polymer-cli

### Install the npm/bower dependencies

    cd fnndsc.babymri.org
    bower install
    npm install

### Start the default development server


This command serves the app at `http://localhost:8080`:

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

## Add a view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.

### Add a member

Add an entry in `ssrc/data/members-behavior.html`. The app will load it the appropriate section based on the `MRITeam`, `MEGTeam`, `NIRSTeam`, `DEVTeam`, `AlumniTeam` flags.

For instance to add a member that belongs is `Alumni` and used to work in the `MEG` and `MRI` teams:

``` javascript

// A cool alumni
{
    'id': 'coolalumni',
    'firstname': 'Cool',
    'middlename': '',
    'lastname': 'Alumni',
    'degree': 'PhD',
    'position': 'Assistant Professor',
    'laboratory': '-',
    'institution': 'University of Hawaii',
    'academicposition': '-',
    'academicinstitution': '-',
    'picture': '/images/team/mr_coolpicture_110x135.jpg',
    'email': 'iamthe@email.address',
    'phone': '(666) 666-6666',
    'fax': '(666) 666-6666',
    'address': '6th floor, 123 Brigham Circle',
    'city': 'Boston, 02120 MA',
    'country': 'United States',
    'publications': 'https://hms-harvard.academia.edu/MrCool',
    'MRITeam': true,
    'MEGTeam': true,
    'NIRSTeam': false,
    'DEVTeam': false,
    'AlumniTeam': true,
},

```

### Add a section

Create a directory that contains the section.

    cd src/
    mkdir fancy-element/

Create base element into this directory

    cd fancy-element/
    vim fancy-element.html

``` html

<link rel="import" href="../../bower_components/polymer/polymer.html">
<link rel="import" href="../common-element/section-behavior.html">

<dom-module id="fancy-element">
  <template>
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }
    </style>


    Hello fancy-element.

  </template>

  <script>
    Polymer({
      is: 'fancy-element',
      behaviors: [SectionBehavior],
      properties: {
        section: {
          type: String,
          value: 'fancy',
        },
      },
    });
  </script>
</dom-module>

```

Update the of `fnndsc-app.html`.

    cd src/
    vim fnndsc-app.html

``` html

<!-- Add submenu-->
<paper-submenu>
    <paper-icon-item class="menu-trigger">
    <iron-icon icon="icons:star" item-icon></iron-icon>
    FANCY
    </paper-icon-item>
    <paper-menu class="menu-content">
    <a data-route="fancy/overview" href$="{{prefixUrl}}/fancy/overview" on-tap="_scrollTop">
        <paper-item>Overview</paper-item>
    </a>
    </paper-menu>
</paper-submenu>

<!-- Add element in iron-pages-->
<fancy-element name="fancy" current-section="[[page]]" route="[[subroute]]"></fancy-element>
```

Add the section in the `polymer.json` fragments to make sure the build works.

    cd fnndsc.babymri.org/
    vim polymer.json

``` json

{
  "entrypoint": "index.html",
  "shell": "src/fnndsc-app.html",
  "fragments": [
    ...,
    "src/fancy-element/fancy-element.html"
  ],

```

### Add a page in a section

Beef up the `fancy-element.html`.

    cd fancy-element/
    vim fancy-element.html

``` html

<link rel="import" href="../../bower_components/polymer/polymer.html">

<link rel="import" href="../../bower_components/app-route/app-route.html">
<link rel="import" href="../../bower_components/iron-pages/iron-pages.html">
<link rel="import" href="../../bower_components/iron-selector/iron-selector.html">

<link rel="import" href="../common-element/section-behavior.html">

<dom-module id="fancy-element">
  <template>
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      iron-pages {
        padding: 48px 62px;
      }
    </style>

    <app-route
        route="[[route]]"
        pattern="/:page"
        data="{{routeData}}",
        tail="{{subroute}}">
    </app-route>

    <app-route
        route="[[subroute]]"
        pattern="/:uid"
        data="{{subrouteData}}">
    </app-route>

    <iron-pages fullbleed
            selected="[[page]]"
            attr-for-selected="name"
            fallback-selection="error404"
            role="main">
            <mri-overview name="overview"></mri-overview>
            <mri-error404 name="error404"></mri-error404>
        </iron-pages>

  </template>

  <script>
    Polymer({
      is: 'fancy-element',
      behaviors: [SectionBehavior],
      properties: {
        section: {
          type: String,
          value: 'fancy',
        },
      },
    });
  </script>
</dom-module>

```

Add `fancy-overview.html` page.

    cd fancy-element/
    vim fancy-overview.html

``` html

<link rel="import" href="../../bower_components/polymer/polymer.html">

<link rel="import" href="../common-element/common-styles.html">

<dom-module id="fancy-overview">
  <template>
    <style include="common-styles"></style>
    <style>
      :host {
        display: block;
      }
    </style>

    <article class="flow">
      <header class="center">
        <h1 class="maxflow centerText">Welcome to the DEV Team</h1>
        <h2 class="maxflow ">@ FNNDSC</h2>
      </header>

      <main>

        <section class="center">

          <div class="imageContainer maxflow">
            <div>
              <img src="/images/art/22_cropped.png">
            </div>
            <div>
              <h3>Who we are</h3>
              <p>We are the etal Neonatal Neuroimaging and Developmental Science Center (FNNDSC) from Boston Children's Hospital.</p>
              <p>We bring together a multidisciplinary team of researchers from the fields of medicine, engineering, computer science, and neuroscience.</p>
            </div>
          </div>

        </section>

        <section class="center primary">
          <div class="imageContainer maxflow">
            <div>
              <img src="/images/art/mri_T1_SAG.jpg">
            </div>
            <div>
              <h3>What we do</h3>
              <p>We push the boundaries of research in Magnetic Resonance Imaging (MRI), Magnetoencephalography (MEG), and Near-infrared Spectroscopy (NIRS).</p>
              <p>We develop new technologies that can lead to improvements in healthcare for infants and children.</p>
            </div>
          </div>
        </section>

        <section class="center primaryInverted">
          <h3 class="maxflow centerText">Join a study!</h3>
        </section>

      </main>

      <footer class="center">
        <h4 class="maxflow">Copyright</h4>
        <p class="maxflow">FNNDSC 2017</p>
      </footer>
    </article>

  </template>

  <script>
    Polymer({
      is: 'fancy-overview',
    });
  </script>
</dom-module>

```

Add a `fancy-error404.html` page.

    cd fancy-element/
    vim fancy-error404.html

``` html

<link rel="import" href="../../bower_components/polymer/polymer.html">

<dom-module id="fancy-error404">
  <template>
    <style>
      :host {
        display: block;

        padding: 10px 20px;
      }
    </style>
    Oops you hit a Fancy 404. <a href="/">Head back to home.</a>
  </template>

  <script>
    Polymer({
      is: 'fancy-error404',
    });
  </script>
</dom-module>

```

Add the pages in the `polymer.json` fragments to make sure the build works.

    cd fnndsc.babymri.org
    vim polymer.json

``` json

{
  "entrypoint": "index.html",
  "shell": "src/fnndsc-app.html",
  "fragments": [
    ...,
    "src/fancy-element/fancy-element.html",
    "src/fancy-element/fancy-overview.html",
    "src/fancy-element/fancy-error404.html"
  ],

```

### Add a table of content in a page

Add the TOC behavior to `fancy-overview.html`.

```html

<link rel="import" href="../common-element/toc-behavior.html">

...

Polymer({
    is: 'fancy-overview',
    behaviors: [TOCBehavior],
});

```

Add some markup. Make sure the `href` and `label` of the `li` match the `id` of the element we want to scroll to on click.

```html

<nav>
    <div>Contents</div>
    <ul>
        <li><a href="#wwd" label="wwd" on-tap="__scrollTo">What we do</a></li>
    </ul>
</nav>

...

<h3 id="wwd">What we do</h3>

```
