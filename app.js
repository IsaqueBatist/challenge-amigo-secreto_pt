//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let names = []

const addFriend = () => {
  const nameOfFriend = document.getElementById('amigo').value
  names.push(nameOfFriend)
  updateListOfFriends(nameOfFriend)
}

const updateListOfFriends = (newName) => {
  const list = document.getElementById('listaAmigos')
  list.innerHTML += `<li>${newName}</li>`
}