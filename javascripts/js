window.onload = function() {
    var elem = document.getElementById('board-game'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d'),
        colour = '#baada0',
        width = 40,
        height = 40,
        pl = 1,
        result,
        moveCount = 0,
        board = [-1,-1,-1,-1,-1,-1,-1,-1,-1],
        state = {blank: -1, X: 1, O: 2},
        elements = [];
    
    elem.addEventListener('click', clickEvent, false);
                
    function clickEvent(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        context.strokeStyle = "#9d2151";
        context.lineWidth = "3";
        elements.forEach(function(element) {
            if (y > element.top && y < element.top + height &&
               x > element.left && x < element.left + width) {
                var n = element.top + element.left;
                switch (n) {
                    case 35: n = 0; break;
                    case 215: n = 8; break;
                    case 80: if (element.top == 20) n = 1;
                        else n = 3; break;
                    case 170: if (element.top == 65) n = 5;
                        else n = 7; break;
                    default: if (element.top == 20) n = 2;
                        else if (element.top == 65) n = 4;
                        else n = 6;
                }
                if (pl) {
                    if(board[n] == state.blank) {
                        context.beginPath();
                        context.moveTo(element.left+10, element.top+10);
                        context.lineTo(element.left+30, element.top+30);
                        context.moveTo(element.left+30, element.top+10);
                        context.lineTo(element.left+10, element.top+30);
                        context.stroke();
                        board[n] = state.X;
                        result = move(n, state.X);
                        console.log(result);
                        if (result == 0) 
                            getResult(state.blank)
                        else if (result == state.X)
                            getResult(state.X);
                        pl = 0;
                    }
                }
                else {
                    if (board[n] == state.blank) {
                        context.beginPath();
                        context.arc(element.left+20, element.top+20, 12, 0, 2 * Math.PI);
                        context.stroke();
                        board[n] = state.O;
                        result = move(n, state.O);
                        console.log(result);
                        if (result == 0)
                            getResult(state.blank);
                        else if (result == state.O)
                            getResult(state.O);
                        pl = 1;
                    }
                }
            }
        });
    }
    
    function getResult(s) {
        elem.removeEventListener('click', clickEvent, false);
        show(s);
    }
    
    var show = function(s) {
        var par = document.getElementsByTagName('p')[0],
            b = document.getElementsByTagName('button')[0];
        if (s == 1)
            s = "X";
        else
            s == 2 ? s = "O" : s = "Draw";
        if (s == "Draw")
            par.textContent = s;
        else
            par.textContent = s + " won";
        par.style.display = "block";
        b.style.display = "block";
        
        b.addEventListener('click', function() {
            draw();
            for(var i = 0; i < 9; i++)
                board[i] = -1;
            for(var i = 0; i < 9; i++)
                console.log(board[i]);
            moveCount = 0;
            par.style.display = "none";
            b.style.display = "none";
            elem.addEventListener('click', clickEvent, false);
        })
    }
    
    var move = function(x, s) {
        moveCount++;
        
        for (var i = 0; i < 3; i++) {
            if (board[i] != s)
                continue;
            else {
                for (var p = i+3; p < 9; p += 3) {
                    if(board[p] != s)
                        break;
                    if (p == i+6)
                        return s;
                }
            }
        }
        for (var i = 0; i < 7; i+=3) {
            if (board[i] != s)
                continue;
            else {
                for (var p = i+1; p < i+3;p++) {
                    if (board[p] != s)
                        break;
                    if (p == i+2)
                        return s;
                }
            }
        }
        for (var i = 0; i < 9; i+=4) {
            if (board[i] != s)
                break;
            if (i == 8) 
                return s;
        }
        for (var i = 2; i < 7; i+=2) {
            if (board[i] != s)
                break;
            if (i == 6) 
                return s;
        }
        if (moveCount == 9) {
            return 0;
        }
        return -1;
    }
    
     elements.push({
            top: 20,
            left: 15},
            {top: 65,
            left: 15},
            {top:110,
            left: 15}
        );

        elements.push({
            top: 20,
            left: 60},
            {top: 65,
            left: 60},
            {top:110,
            left: 60
        })

        elements.push({
            top: 20,
            left: 105},
            {top: 65,
            left: 105},
            {top:110,
            left: 105
        })
    
    function draw() {
        elements.forEach(function(element) {
            context.fillStyle = colour;
            context.fillRect(element.left, element.top, width,
                            height);
        });
    }
    draw();
}
