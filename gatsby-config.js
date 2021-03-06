/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Resuminator | Build Beautiful Single-Page Resumes`,
    siteUrl: `https://www.resuminator.in`,
    description: `Build beautiful single-page resumes; without the hassle!`,
    image: "/images/Link-Image_1.png",
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    authorName: `Vivek Nigam`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          // disableMinification: true
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Resuminator",
        short_name: "Resuminator",
        start_url: "/",
        background_color: "#fffafa",
        theme_color: "#1a237e",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Manrope",
              variants: ["400", "500", "600", "700", "800"],
            },
            {
              family: "Karla",
              variants: ["400", "700"],
            },
            {
              family: "Inter",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
        formats: ["woff2", "woff"],
      },
    },
  ],
}
