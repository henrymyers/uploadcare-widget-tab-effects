import {createNode} from 'tools'
import cn from './Icon.pcss'
import * as icons from 'images'

const Icon = (name) => {
  if (!icons[name]) {
    throw new Error(`Icon with name "${name}" doesn't exist.`)
  }

  let $element

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const render = () => {
    $element = createNode(icons[name])

    $element.classList.add(cn['icon'])
  }

  return {getElement}
}

export default Icon
