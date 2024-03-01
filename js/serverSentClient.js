console.log('👀',' server sent client')



const eventSource = new EventSource('http://localhost:8000/api/v1/sse/publish')

const divContainer = document.querySelector('.data-container')

const updateMessage = (data)=>{
    const pItem = document.createElement('h2')
    pItem.textContent = data
    divContainer.appendChild(pItem)
}

// on s'abonne
eventSource.onmessage = function (event) {
    updateMessage(event.data)
}

// on gère la déco du server
eventSource.onerror = function () {
    updateMessage('🟥 Server closed connection')
    eventSource.close()
}