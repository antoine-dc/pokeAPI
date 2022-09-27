// On peut utiliser le await sans être dans une fonction async si notre fichier JS est un module
const reponse = await fetch("../data/data.json")
const listPokemon = await reponse.json()

for (const pokemon of listPokemon) {
  let article = document.createElement("article")

  article.innerHTML = `
        <figure>
          <picture>
            <img src="${pokemon.image}" alt="Image ${pokemon.name}" />
          </picture>
          <figcaption>
            <span class="types">${pokemon.apiTypes[0].name}</span>
            <h2>Bulbizarre</h2>
            <ol>
              <li>Points de vie : ${pokemon.stats.HP}</li>
              <li>Attaque : ${pokemon.stats.attack}</li>
              <li>Défense : ${pokemon.stats.defense}</li>
              <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
              <li>Vitesse : ${pokemon.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`

  let color
  switch (pokemon.apiTypes[0].name) {
    case "Plante":
      color = "green"
      break
    case "Feu":
      color = "orange"
      break

    case "Eau":
      color = "blue"
      break

    default:
      color = "grey"
      break
  }

  article.style.borderColor = color
  article.style.backgroundColor = color

  let main = document.querySelector("main")
  main.appendChild(article)
}
