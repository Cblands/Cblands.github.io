import React from 'react';
import { Link } from "gatsby"

function TabBar() {

  const tabs = [
    { title: 'Home', value: '/home/', key: 'home' },
    { title: 'Projects', value: '/projects', key: 'project' },
    { title: 'Resume', value: '/resume/', key: 'resume' },
  ]

  return (
    <div className='tabs-container'>
      {tabs.map((tab, i) => {
        return (
          <Link to={tab.value} className='individual-tab' key={i}>
            {tab.title}
          </Link>
        );
      })}
    </div>
  )
}

export default TabBar