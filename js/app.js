function randomString() {
  var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
  var str = '';
  for (i = 0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

// CREATE NEW COLUMNS
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// ADD COLUMNS TO BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATE NEW CARDS
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// ADD CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);