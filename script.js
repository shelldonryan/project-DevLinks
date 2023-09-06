function toggleMode() {
  const html = document.documentElement
  
  // pegar a tag img
  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")

    image.setAttribute("src", "assets/avatar-dark.png")
    image.setAttribute(
      "alt",
      "Foto de Shelldon Ryan com uma camisa azul, foto de frente ao espelho, sem bigode, expressando profissionalismo com uma expressão facial mais séria e com o corpo no sentido leste da foto, para a direita."
    )
  } else {
    html.classList.add('light')

    image.setAttribute("src", "assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Shelldon Ryan com uma camisa amarela, fundo de parede branco, com bigode, expressando profissionalismo com uma expressão facial mais séria e utilizando um colar de ouro"
    )
  }
}