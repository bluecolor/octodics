/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/octopus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Octopus' /* title for your website */,
  tagline: 'Open source task scheduler',
  url: 'https://bluecolor.github.io/octopus' /* your website url */,
  baseUrl: '/octopus/' /* base url for your project */,
  projectName: 'octopus',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    // {doc: 'doc5', label: 'Rest API'},
    {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/octopus.svg',
  footerIcon: 'img/octopus.svg',
  favicon: 'img/octopus.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' blue',
  organizationName: 'bluecolor', // or set an env variable ORGANIZATION_NAME
  projectName: 'octopus', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/bluecolor/octopus',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
