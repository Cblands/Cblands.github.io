import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styling/home.css'

const HomePage = () => (
  <Layout>
    <div id='home-page-photo-1' className='home-page-photo-1'>
      <div className='caption'>
        <span className='border'>About Me</span>
      </div>
    </div>
    <div className='home-page-bio-1' >
      <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
    </div>
    <div id='home-page-photo-2' className='home-page-photo-2' >
      <div className='home-page-bio-2'>
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
      </div>
    </div>
    <div id='home-page-photo-3' className='home-page-photo-3' >
      <div className='home-page-bio-2'>
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
      </div>
    </div>
    <SEO title="Home" />
  </Layout>
)

export default HomePage