const container = document.querySelector('.container')
container.addEventListener('click',(e) =>
  {
    let elementClass = e.target.className;
    if (elementClass !== '') {
        if(e.target.parentElement.className === 'inline'){
            if(e.target.parentElement.parentElement.parentElement.className === 'update'){
                console.log(e.target.parentElement.parentElement.parentElement.className)
            
                e.target.parentElement.parentElement.parentElement.setAttribute('class', 'read-update')
                console.log(e.target.parentElement.parentElement.parentElement.className)
            }
        }
    }
    if(elementClass === 'read'){
        document.querySelectorAll('.update').forEach(e => e.classList.replace('update', 'read-update'))
    }
  }
)


