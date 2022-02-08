module.exports = {
    siteMetadata: {
      title: `concourse-build`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: `${__dirname}/src/pages`,
        }
      },
      'gatsby-plugin-mdx'
    ]
}