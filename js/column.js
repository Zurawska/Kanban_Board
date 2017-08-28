function Column(name) {
  var self = this;
  this.id = randomString();
  this.name = name;
  this.$element = createColumn();

  function createColumn() {
    var $column = $('<div>').addClass('column');
    var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
    var $columnCardList = $('<ul>').addClass('column-card-list');
    var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
    var $columnDelete = $('<button>').addClass('btn-delete').html("<i class='fa fa-trash-o' aria-hidden='true'></i>");

    function addHover(button) {
      button.mouseenter(function() {
        $(this).animate({ backgroundColor: '#14333d' }, 'fast');
      });
      button.mouseleave(function() {
        $(this).animate({ backgroundColor: '#03455b' }, 'fast');
      });
    }

    addHover($columnAddCard);
    addHover($columnDelete);

    $columnDelete.click(function() {
      self.removeColumn();
    });

    $columnAddCard.click(function() {
      self.addCard(new Card(prompt("Enter the name of the card")));
    });

    $column.append($columnTitle)
      .append($columnAddCard)
      .append($columnDelete)
      .append($columnCardList);
      return $column;
  }
}

Column.prototype = {
  addCard: function(card) {
    this.$element.children('ul').append(card.$element);
  },
  removeColumn: function() {
    this.$element.remove();
  }
};
