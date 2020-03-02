console.log('test message')

progress = []


function play(clickedId) {
    playerSpan = document.getElementById('player')
    clickedElement = document.getElementById(clickedId)
    console.log(progress[0])
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X'
        progress[clickedId] = 'X'
    } else {
        playerSpan.innerText ='X'
        clickedElement.innerText = 'O'
        progress[clickedId] = 'O'
    }
    if (progress[0] === 'X' && progress[1] === 'X' && progress[2] === 'X') {
        window.alert('THE WINNER IS X')} 
        else if 
        (progress[3] === 'X' && progress[4] === 'X' && progress[5] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[6] === 'X' && progress[7] === 'X' && progress[8] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[0] === 'X' && progress[3] === 'X' && progress[6] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[1] === 'X' && progress[4] === 'X' && progress[7] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[2] === 'X' && progress[5] === 'X' && progress[8] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[0] === 'X' && progress[4] === 'X' && progress[8] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[2] === 'X' && progress[4] === 'X' && progress[6] === 'X') {
            window.alert('THE WINNER IS X')
        }else if 
        (progress[0] === 'O' && progress[1] === 'O' && progress[2] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[3] === 'O' && progress[4] === 'O' && progress[5] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[6] === 'O' && progress[7] === 'O' && progress[8] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[0] === 'O' && progress[3] === 'O' && progress[6] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[1] === 'O' && progress[4] === 'O' && progress[7] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[2] === 'O' && progress[5] === 'O' && progress[8] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[0] === 'O' && progress[4] === 'O' && progress[8] === 'O') {
            window.alert('THE WINNER IS O')
        }else if 
        (progress[2] === 'O' && progress[4] === 'O' && progress[6] === 'O') {
            window.alert('THE WINNER IS O')
        } else if
        (progress[0] && progress[1] && progress[2] && progress[3] && progress[4] && progress[5] && progress[6] && progress[7] && progress[8]) {
            window.alert ('CAT!!')        
        }
    } 
