import * as React from "react"
import '../scss/styles.scss';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Leaf } from 'lucide-react';

export const Head = () => <title>Home Page</title>

const IndexPage = ({data}) => {
  return (
    <Layout>
      <section className="nieuwsBlok">
        <div className="nieuwsBlok__container">
          <div className="nieuwsBlok__top">
            <h2 className="nieuwsBlok__headingTitle">Nieuws en artikels</h2>
            <Link className="nieuwsBlok__link" to="/">Bekijk alle</Link>
          </div>
          <div className="nieuwsBlok__content">
          {
              data.allContentfulNieuws.nodes.map((node) => {
                const image = getImage(node.image); // Get image from each node
                
                return (
                  <article key={node.id} className="nieuwsBlok__item">
                    <div className="nieuwsBlok__imageContainer">
                      <GatsbyImage 
                        image={image} 
                        alt={node.image.title || "Nieuws afbeelding"} 
                        className="nieuwsBlok__image"
                      />
                      {
                        node.duurzaam ?  <Leaf className="nieuwsBlok__icon" /> : null
                      }
                    </div>
                    <div className="nieuwsBlok__text">
                      {
                        node.duurzaam ? <p className="nieuwsBlok__tag nieuwsBlok__tag-duurzaam">{node.tag}</p> : <p className="nieuwsBlok__tag">{node.tag}</p>
                      }
                      <h4 className="nieuwsBlok__title">{node.title}</h4>
                    </div>
                  </article>
                );
              })
            }
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const queryNieuws = graphql`
query MyQuery {
  allContentfulNieuws {
    nodes {
      tag
      title
      id
      duurzaam
      image {
        title
        filename
        url
        gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 250)
      }
    }
  }
}`

