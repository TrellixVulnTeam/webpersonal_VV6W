import view from '../views/about.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view

    return divElement
}