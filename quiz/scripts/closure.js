function setColor(set) {
        let changeColor = set;
        if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
        
}

document.getElementById('btn').addEventListener('click', setColor);
