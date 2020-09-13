import { useStaticQuery, graphql } from "gatsby"

export const useNavigationQuery = () => {
  const navigationData = useStaticQuery(graphql`
    query NavQuery {
      prismic {
        allNavigations {
          edges {
            node {
              branding
              navigation_links {
                label
                link {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return navigationData.prismic.allNavigations.edges[0].node
}
