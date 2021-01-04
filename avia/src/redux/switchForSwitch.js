export const switchForSwitchL = (stringActive) => {
    const leftSwitch = document.getElementsByClassName('left')
    /*leftSwitch.classList.toggle(stringActive.toString())
    leftSwitch.classList.remove('Switch-disabled')*/
    console.log(leftSwitch.classList, 'string is ', stringActive)
}
export const switchForSwitchR = (stringActive) => {
    const rightSwitch = document.getElementsByClassName('right')
    console.log(rightSwitch.classList)
    /*rightSwitch.classList.toggle(stringActive.toString())
    rightSwitch.classList.remove('Switch-disabled')*/
    
}