import * as React from "react"
import '../scss/styles.scss';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Leaf, MapPin } from 'lucide-react';

export const Head = () => <title>Home Page</title>

const IndexPage = ({data}) => {
  // console.log(data);
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
      <section className="woning">
        <h2 className="woning__headerTitle">Projecten in de kijker</h2>
        <div className="woning__row">
            <article className="woning__card">
              <div className="woning__card-image">
                <Link to="/">
                  <img src="https://thermohouse.co.uk/wp-content/uploads/2019/04/hero-image.jpg" alt="Woning" className="woning__card-img"></img>
                </Link>
                <p className="woning__card-tag">Kijk dag 16/03</p>
              </div>
              <div className="woning__card-top">
                <h2 className="woning__card-title"><span className="woning__card-title woning__card-title--city">Hasselt</span> Quartier Bleu</h2>
                <ul className="woning__card-list">
                  <li className="woning__card-listItem">
                    Stijlvol wonen op een unieke locatie aan het water, centrum Hasselt
                  </li>
                  <li className="woning__card-listItem">
                    Stadswoningen, appartementen en penthouses
                  </li>
                </ul>
              </div>
              <div className="woning__card-location">
                <MapPin />
                <p className="woning__card-textBold">Broekermolenplein 2, Hasselt</p>
              </div>
              <div className="woning__card-other">
                <p><span className="woning__card-textBold">19</span> appartementen</p>
              </div>
            </article>
            <article className="woning__card">
              <div className="woning__card-image">
                <Link to="/">
                  <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="Woning" className="woning__card-img"></img>
                </Link>
                <p className="woning__card-tag">Kijk dag 16/03</p>
              </div>
              <div className="woning__card-top">
                <h2 className="woning__card-title"><span className="woning__card-title woning__card-title--city">Hasselt</span> Quartier Bleu</h2>
                <ul className="woning__card-list">
                  <li className="woning__card-listItem">
                    Stijlvol wonen op een unieke locatie aan het water, centrum Hasselt
                  </li>
                  <li className="woning__card-listItem">
                    Stadswoningen, appartementen en penthouses
                  </li>
                </ul>
              </div>
              <div className="woning__card-location">
                <MapPin />
                <p className="woning__card-textBold">Broekermolenplein 2, Hasselt</p>
              </div>
              <div className="woning__card-other">
                <p><span className="woning__card-textBold">19</span> appartementen</p>
              </div>
            </article>
            <article className="woning__card">
              <div className="woning__card-image">
                <Link to="/">
                  <img src="https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg" alt="Woning" className="woning__card-img"></img>
                </Link>
                <p className="woning__card-tag">Kijk dag 16/03</p>
              </div>
              <div className="woning__card-top">
                <h2 className="woning__card-title"><span className="woning__card-title woning__card-title--city">Hasselt</span> Quartier Bleu</h2>
                <ul className="woning__card-list">
                  <li className="woning__card-listItem">
                    Stijlvol wonen op een unieke locatie aan het water, centrum Hasselt
                  </li>
                  <li className="woning__card-listItem">
                    Stadswoningen, appartementen en penthouses
                  </li>
                </ul>
              </div>
              <div className="woning__card-location">
                <MapPin />
                <p className="woning__card-textBold">Broekermolenplein 2, Hasselt</p>
              </div>
              <div className="woning__card-other">
                <p><span className="woning__card-textBold">19</span> appartementen</p>
              </div>
            </article>
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

