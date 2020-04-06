/*
 * Notepad 主程序
 */
var np = {};

np.config = {
  'appContainer': '.notepad-app'
};

np.bShowStatusBar = false;   
np.bWrap          = false;  
np.fontFamily     = 'Arial';
np.fontStype      = '常规';
np.fontSize       = '16'; 

np.fontHandler = function(e) {
  np.fontFamily = e.family;
  np.fontStype = e.style;
  np.fontSize = e.size;

  $editor.setFont(e);
};
$(function() {
  $menubar.show(np.menuData);
  $editor.show({
    posHandler: function(row, col) {
      $statusBar.setRowCol(row, col);
    },
    contentHandler: function(isEmpty) {
      $menubar.enabled(1, 6, isEmpty);
    }
  });
  $editor.setFont({
    family: np.fontFamily,
    style: np.fontStype,
    size: np.fontSize
  });
  $statusBar.init();
  $statusBar.display(false);

  var $app = $('body');

  $app.click(function() {
    $menubar.hideMenu();
    $editor.focus();
  });
});
