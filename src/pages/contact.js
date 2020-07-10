import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <section id="contact" class="bg-dark">
      <div class="contact">
        <h2 class="m-heading text-center">
          <span class="text-primary">Contact</span>
        </h2>
        <div class="items">
          <div class="item">
            <a
              href="mailto:web@leasucikova.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fas fa-envelope fa-2x"></i>
            </a>
          </div>
          <div class="item">
            <a
              href="https://www.instagram.com/leascreativestudio/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Link to="/">Back to the homepage</Link>
  </Layout>
)

export default ContactPage
