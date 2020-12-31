export const checkboxesHandler = (checkboxes, checkboxID) => {
    checkboxes.forEach(
        checkbox=>{
            if (checkbox.id===checkboxID) {
                checkbox.checked=!checkbox.checked
            }
        }
    )
    return checkboxes
}