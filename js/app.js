var $wrapper = $('#wrapper');
function createBoard(n) {
    for (var i = 0; i < n; i++) {
        var $row = $('<div>').addClass('rows');
        for (var j = 0; j < n; j++) {
            var $square = $('<div>').addClass('squares');
            $row.append($square);
        }
        $wrapper.append($row);   
    }
}
createBoard(3);
$squares = $('.squares');

var game = {
    players: [
        {
            symbol: 'X'
        },
        {
            symbol: 'O'
        }
    ],
    switchPlayer: function() {
        if(this.players[0] == this.currentPlayer) {
            this.currentPlayer = this.players[1];
        } else {
            this.currentPlayer = this.players[0];
        }
    },
    checkWinner: function(player) {
        if(this.checkRows(player.symbol) == true) {
            return true;
        } else if(this.checkColumns(player.symbol) == true) {
            return true;
        } else if (this.checkDiagonals(player.symbol) == true) {
            return true;
        } else {
            return false;
        }
    },
    checkRows: function(symbol) {
        if ($squares[0].innerText && $squares[1].innerText && $squares[2].innerText == symbol) {
            return true;
        } else if($squares[3].innerText && $squares[4].innerText && $squares[5].innerText == symbol) {
            return true;
        } else if($squares[6].innerText && $squares[7].innerText && $squares[8].innerText == symbol) {
            return true;
        } else {
            return false;
        }
    },
    checkColumns: function(symbol) {
        if ($squares[0].innerText && $squares[3].innerText && $squares[6].innerText == symbol) {
            return true;
        } else if($squares[1].innerText && $squares[4].innerText && $squares[7].innerText == symbol) {
            return true;
        } else if($squares[2].innerText && $squares[5].innerText && $squares[8].innerText == symbol) {
            return true;
        } else {
            return false;
        }
    },
    checkDiagonals: function(symbol) {
        if($squares[0].innerText && $squares[4].innerText && $squares[8].innerText == symbol) {
            return true;
        } else if($squares[2].innerText && $squares[4].innerText && $squares[6].innerText == symbol) {
            return true;
        } else {
            return false;
        }
    }
}

var $h1 = $('<h1>');

function startGame() {
    var pick = Math.ceil(Math.random() * 2) - 1;
    game.currentPlayer = game.players[pick];
    $h1.text('Player "' + game.currentPlayer.symbol + '" its your turn!');
    $wrapper.before($h1);
}
startGame();

function winner(win) {
    var $h1 = $('<h1>');
    $h1.text('"' + win + '" YOU WON!!!!!!!!!!!!');
    $('body').empty().append($h1).css({
        fontSize: 100,
        background: 'red',
        color: 'white'
    });
}

$squares.on('click', function() {
   
    if ($(this).text() == '') {
        $(this).text(game.currentPlayer.symbol);
        if (game.checkWinner(game.currentPlayer)) {
            winner(game.currentPlayer.symbol)
        } else {
            game.switchPlayer();            
        }
        $h1.text('Player "' + game.currentPlayer.symbol + '" its your turn!')
    } else {
        alert('That square has been chosen already please choose another')
    }

});



