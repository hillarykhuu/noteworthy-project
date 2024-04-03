import React from 'react'

export default function Button() {
  return (
    <div>Button</div>
  )
}

function smoothScroll(){
  document.querySelector('.your_class or #id here').scrollIntoView({
      behavior: 'smooth'
  });
}