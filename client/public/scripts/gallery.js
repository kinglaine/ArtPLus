const renderGifts = async () => {
  const response = await fetch('/gallery')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(art => {
      const card = document.createElement('div')
      card.classList.add('card')

      const topContainer = document.createElement('div')
      topContainer.classList.add('top-container')

      const bottomContainer = document.createElement('div')
      bottomContainer.classList.add('bottom-container')

      topContainer.style.backgroundImage = `url(${art.image_url})`

      const name = document.createElement('h3')
      name.textContent = art.title
      bottomContainer.appendChild(name)

      const pricePoint = document.createElement('p')
      pricePoint.textContent = 'Title: ' + art.text
      bottomContainer.appendChild(pricePoint)

      const audience = document.createElement('p')
      audience.textContent = 'Created By: ' + art.description
      bottomContainer.appendChild(audience)

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.setAttribute('role', 'button')
      link.href = `gallery/${art.id}`
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      mainContent.appendChild(card)
    })
  }
  else {
    const message = document.createElement('h2')
    message.textContent = 'No Arts Available 😞'
    mainContent.appendChild(message)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderGifts()
}
