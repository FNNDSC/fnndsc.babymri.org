(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#fnndscbabymriorg');
  app.logo = 'images/images/logo.png';
  app.label = 'fnndsc.babymri.org';
  // 500 100 700
  // 200 100 400
  app.chapters = [
            {id: 'welcome', label: 'Welcome',
            style: {
              primary: {
                normal : {
                  color: '#3F51B5',
                  font: '#ffffff'},
                light : {
                  color: '#C5CAE9',
                  font: '#ffffff'},
                dark : {
                  color: '#303F9F',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#E91E63',
                  font: '#ffffff'},
                light : {
                  color: '#F8BBD0',
                  font: '#000000'},
                dark : {
                  color: '#C2185B',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'home',
              label: 'Home',
              element: 'home-element',
              key: '1ZIXvH4lmPGYzGkVxbfBvr-kc6dbIiqwbs95VcjqvzWY'
            },
            {id:'challenges',
              label: 'Challenges',
              element: 'home-element',
              key: '1UDJ_SgF744k_xK90iISx7Gxt_-luxD7W8bvVB-f6jW8'
            }
            ]},
            {id: 'mri', label: 'Magnetic resonance imaging',
            style: {
              primary: {
                normal : {
                  color: '#E91E63',
                  font: '#ffffff'},
                light : {
                  color: '#F8BBD0',
                  font: '#000000'},
                dark : {
                  color: '#C2185B',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#69F0AE',
                  font: '#000000'},
                light : {
                  color: '#B9F6CA',
                  font: '#000000'},
                dark: {
                  color: '#00E676',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1_DbTw4bsj82m6aVLm-Q3ujKZJ5z678s0Jm6pdlp--BM'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1SthCokDqdHWO7coUO1yT2dcT0ioOJ1RGJ9po5vbueNs'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1LgZmITZQA9UkxCSPLTB4aO1iXw4pASruUuTtFRAsX0o'
            }
            ]},
            {id: 'meg', label: 'Magnetoencephalography',
            style: {
              primary: {
                normal : {
                  color: '#8BC34A',
                  font: '#ffffff'},
                light : {
                  color: '#DCEDC8',
                  font: '#000000'},
                dark : {
                  color: '#689F38',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#E040FB',
                  font: '#ffffff'},
                light : {
                  color: '#EA80FC',
                  font: '#ffffff'},
                dark : {
                  color: '#D500F9',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '15WlhjU0mMmQb6Ln1Bghbjn9_0BirOBwjbYSDWf2zo70'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '18wLiTBCiVIOE-ByELf4Ov0H-r1I18T_2bl5fMzBQifo'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1ZPliddJ9NietZa4IkJeQSKYGW4CS83Y_JnwMSaW3_Hk'
            }
            ]},
            {id: 'nirs', label: 'Near-infrared spectroscopy',
            style: {
              primary: {
                normal : {
                  color: '#673AB7',
                  font: '#ffffff'},
                light : {
                  color: '#D1C4E9',
                  font: '#000000'},
                dark : {
                  color: '#512DA8',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#FF6E40',
                  font: '#000000'},
                light : {
                  color: '#FF9E80',
                  font: '#000000'},
                dark : {
                  color: '#FF3D00',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages: [
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1TEFMDODoWJimTCHV9ZqogUwSDQkav-2eegzJmSubA_s'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1oZQ9ZP6R7o1_3WwWkirr7Gs4EXjgODRW-OMLNN3pzjg'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '16RIvt08KxYyJdpO9nApZhjD2LTm23uM5HktrVwsMa0Y'
            }
            ]},
            {id: 'softwares', label: 'Softwares',
            style: {
              primary: {
                normal : {
                  color: '#607D8B',
                  font: '#ffffff'},
                light : {
                  color: '#CFD8DC',
                  font: '#000000'},
                dark : {
                  color: '#455A64',
                  font: '#000000'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                },
              accent: {
                normal : {
                  color: '#64FFDA',
                  font: '#000000'},
                light : {
                  color: '#A7FFEB',
                  font: '#000000'},
                dark : {
                  color: '#1DE9B6',
                  font: '#ffffff'},
                bw : {
                  color: '#212121',
                  font: '#f9f9f9'},
                wb : {
                  color: '#f9f9f9',
                  font: '#212121'}
                }
              },
            pages:[
              {id:'introduction',
              label: 'Introduction',
              element: 'home-element',
              key: '1q6BcByK7665nA9Eyn7BYGzudYfXX9knA37W8IymDUZs'
            },
              {id:'members',
              label: 'Members',
              element: 'members-element',
              key: '1RTgmAK-KCsXmf_a-W5CNT9oykyrMR0KbUoL6wBjZhD4'
            },
              {id:'contact',
              label: 'Contact',
              element: 'contact-element',
              key: '1C3ri1r_6k1Z1pZYKF2IOwuI1kRs82F1zh_zcZLOudlE'
            }
            ]},];

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  // app.addEventListener('template-bound', function() {
  //   console.log('Our app is ready to rock!');
  // });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
