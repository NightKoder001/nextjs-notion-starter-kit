import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1f467d3f256b801fa09fd7696b07aef1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Nightkoder Blog',
  domain: 'nightkoder.com',
  author: 'Nightkoder',

  // open graph metadata (optional)
  description: 'Solving real-world problems by night',

  // social usernames (optional)
  twitter: 'thenightkoder',
  github: 'Nightkoder001',
  linkedin: 'gautam-j-16374528b',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
   // navigationStyle: 'default',
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'Home',
       pageId: '1f467d3f256b801fa09fd7696b07aef1'
     },
     {
       title: 'Blog',
       pageId: '1f667d3f256b80ca9978fbefd94f0664'
     },
     {
       title: 'Lab',
       pageId: '1f667d3f256b804a90a1fefa3d823ac2'
     },
     {
       title: 'Tutorials',
       pageId: '1f667d3f256b807d832dc3c818eed00d'
     },
     {
       title: 'About',
       pageId: '1f667d3f256b80c58e53f3ab11f70c37'
     }
   ]
})
