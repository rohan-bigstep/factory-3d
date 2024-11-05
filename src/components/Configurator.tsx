import { useProductStore } from "../store"

import { MainMaterial, FrameMaterial } from "../store"

const availableColors = ['#151515', '#f0f0f0', '#f01515', '#15f015', '#1515f0', '#964B00']
const availableMaterials: MainMaterial[] = ['Fabric', 'Leather']
const availableFrames: FrameMaterial[] = ['Wood', 'Metal']

export function Configurator() {
  const color = useProductStore(select => select.color)
  const setColor = useProductStore(select => select.setColor)
  const mainMaterial = useProductStore(select => select.mainMaterial)
  const setMainMaterial = useProductStore(select => select.setMainMaterial)
  const frameMaterial = useProductStore(select => select.frameMaterial)
  const setFrameMaterial = useProductStore(select => select.setFrameMaterial)

  return (
    <div className='overlay'>
      <h3>Configure Chair</h3>
      <div>
        <h4>Color</h4>
        {availableColors.map((myColor) => <button
          className={color === myColor ? 'buttonColor buttonColorSelected' : 'buttonColor'}
          style={{ backgroundColor: myColor }}
          onClick={() => setColor(myColor)}
          key={myColor}
        />)}
      </div>
      <div>
        <h4>Main material</h4>
        {availableMaterials.map((myMaterial) =>
          <button
            className={mainMaterial === myMaterial ? 'buttonColor buttonColorSelected' : 'buttonColor'}
            onClick={() => setMainMaterial(myMaterial)}
            key={myMaterial}
          >
            {myMaterial}
          </button>)}
      </div>
      <div>
        <h4>Frame material</h4>
        {availableFrames.map((myMaterial) =>
          <button
            className={frameMaterial === myMaterial ? 'buttonColor buttonColorSelected' : 'buttonColor'}
            onClick={() => setFrameMaterial(myMaterial)}
            key={myMaterial}
          >
            {myMaterial}
          </button>)}
      </div>
    </div>)
}