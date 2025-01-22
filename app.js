//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let names = []

const updateListOfFriends = (newName) => {
  const list = document.getElementById('friendsList')
  list.innerHTML += `<li>${newName}</li>`
}

const showSelectedFriend = (friend) => {
  const selectedFriendContainer = document.getElementById('result')
  selectedFriendContainer.innerHTML = `<li>${friend}</li>`
}

const addFriend = () => {
  const nameOfFriend = document.getElementById('amigo')
  if(nameOfFriend.value.trim() === '') return window.alert("Por favor, preencha o campo")
  names.push(nameOfFriend.value)
  updateListOfFriends(nameOfFriend.value)
  nameOfFriend.value = ''
}

const drawFriend = () => {
  const randomNum = Math.floor(Math.random() * (names.length - 0 + 0) + 0);
  const selectedFriend = names[randomNum]
  showSelectedFriend(selectedFriend)
}