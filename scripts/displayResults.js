import { getShowData } from 'scripts/services.js'

export default async function displayShows(showType, searchQuery) {
  removeResults()

  const shows = await getShowData(showType, searchQuery)
  const noResultsStrings = [
    "Is it a Movie or a TV Show? Try again!",
    "Please Check Your Spelling and Try Again!"
  ]

  if (shows.length > 0) {
    shows.map((show) => {
      if (show.poster_path) {
        document.querySelector('body').insertAdjacentHTML('beforeend', showTemplate(show, showType) ?? '')
      }
    })
  } else {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<p id="noResultsString">${noResultsStrings[Math.floor(Math.random() * noResultsStrings.length)]}</p>`)
  }

  document.activeElement.blur()
}

function showTemplate(show, showType) {
  const image = `https://image.tmdb.org/t/p/w300${show.poster_path}`
  return `
      <a href='show.html?showId=${show.id}&showType=${showType}&title=${showType === 'tv' ? show.name : show.original_title}&releaseYear=${showType === 'tv' ? show.first_air_date.slice(0, 4) : show.release_date.slice(0, 4)}&imageUrl=${image}' class='show'>
        <img src='${image}'/>
      </a>
    `
}

function removeResults() {
  if (document.querySelector('.show') || document.querySelector('#noResultsString')) {
    document.querySelectorAll('.show')?.forEach((show) => show.remove())
    document.querySelector('#noResultsString')?.remove()
  }
}