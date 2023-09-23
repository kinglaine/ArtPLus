const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/gallery')
  const data = await response.json()

  const giftContent = document.getElementById('gift-content')

  let art

  art = data.find(art => art.Id === requestedID)

  if (art) {
    document.getElementById('image').src =  art.Image_URL
    document.getElementById('Title').textContent = art.Title
    document.getElementById('CreatedBy').textContent = 'Created by: ' + art.Description
    document.getElementById('CreatedOn').textContent = 'Created on: ' + art.Date_Created
  }
  else {
    const message = document.createElement('h2')
    message.textContent = 'No Arts Available 😞'
    giftContent.appendChild(message)   
  }
}

renderGift()
