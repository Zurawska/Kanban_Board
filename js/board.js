var board = {
  name: 'Kanban Board',
  addColumn: function(column) {
    this.$element.append(column.$element);
    initSortable();
  },
  $element: $('#board .column-container')
};

$('.create-column').click(function() {
  var name = prompt('Enter a column name');
  var column = new Column(name);
  board.addColumn(column);
}).mouseenter(function() {
  $(this).animate({ backgroundColor: '#14333d' }, 'fast');
}).mouseleave(function() {
  $(this).animate({ backgroundColor: '#03455b' }, 'fast');
});

function initSortable() {
  $('.column-card-list').sortable({
    connectWith: '.column-card-list',
    placeholder: 'card-placeholder',
    start: function(event, ui) {
      var itemHeight = ui.item.outerHeight();
      ui.placeholder.height(itemHeight);
    }
  }).disableSelection();
}
