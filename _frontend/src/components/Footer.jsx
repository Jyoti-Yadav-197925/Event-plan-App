import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1 style={{ fontFamily: 'sans-serif', color: 'white', fontWeight: 600, fontSize: '30px' }}>EVENT PLANNER</h1>
          <p>Partying & Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type='text' placeholder='E-mail' />
            <button>Subscribe</button>

          </div>
          <p>"Stay in the loop with our newsletter for all things events and weddings!" </p>
        </div>
      </div>
    </footer>
  )
}
