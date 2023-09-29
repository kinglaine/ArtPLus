const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())
  console.log("requesting single art")
  
  const response = await fetch('/gallery')
  const data = await response.json()

  const giftContent = document.getElementById('gift-content')

  let art

  art = data.find(art => art.id === requestedID)

  if (art) {
    document.getElementById('image').src =  art.image_url
    document.getElementById('Title').textContent = art.title
    document.getElementById('CreatedBy').textContent = 'Created by: ' + art.description
    document.getElementById('CreatedOn').textContent = 'Created on: ' + art.date_created
  }else {
    const message = document.createElement('h2')
    message.textContent = 'No Artsss Available 😞'
    giftContent.appendChild(message)   
  }
}

renderGift()
