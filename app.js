const width = document.querySelector('#width')
const borderRadius = document.querySelector('#border-radius')
const baseColor = document.querySelector('#base-color')
const textColor = document.querySelector('#text-color')
const padding = document.querySelector('#padding')
const blury = document.querySelector('#blury')
const image = document.querySelector('.image__contain')
const container = document.querySelector('.container')

width.addEventListener('input', () => {
    const widthChange = width.value;
    image.style.width = `${widthChange}%`
})

borderRadius.addEventListener('input', () => {
    const borderRadiusChange = borderRadius.value;
    image.style.borderRadius = `${borderRadiusChange}%`
})

baseColor.addEventListener('input', () => {
    const containerColorChanged = baseColor.value;
    container.style.backgroundColor = `${containerColorChanged}`
})

textColor.addEventListener('input', () => {
    const containerColorChanged = textColor.value;
    container.style.color = `${containerColorChanged}`
})

padding.addEventListener('input', () => {
    const paddingChanged = padding.value;
    image.style.padding = `${paddingChanged}%`
})

blury.addEventListener('input', () => {
    const blurChanged = blury.value;
    image.style.filter = `blur(${blurChanged}px)`
})