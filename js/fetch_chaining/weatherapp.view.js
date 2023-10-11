/**
 * Funktion til udskrift af view
 * @param {object} data 
 */
export const weatherView = async data => {
	const section = document.createElement('section')

	data.items.map(item => {
		const div = document.createElement('div')
		div.innerText = item.title
		section.append(div)
	})

	document.getElementById('root').append(section)
}