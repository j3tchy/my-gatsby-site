import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'


const LayoutPage = ({ data }) => (
    <div>
        {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <MDXRenderer>
                    {node.body}
                </MDXRenderer>
              </article>
            ))
          }
    </div>
);

export const query = graphql`
query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        body
      }
    }
  }
  
`

export default LayoutPage;