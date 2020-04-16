function mm_open (event, classname) {
    var target = event.target;
    var par = target.offsetParent;
    var elemCol = par.getElementsByClassName(classname);
    var elem = elemCol[0];
    var elemStyle = elem.style;
    elemStyle.display = 'flex';
    elemStyle.position = 'absolute';
    
    elemStyle.left = '40px';
    elemStyle.right = '0px';
    elemStyle.width = '150px';
    elemStyle.margin = '3px 0px 3px 0px;'

}

function mm_open_child (event, classname) {
    var target = event.target;
    var par = target.offsetParent;
    var elemCol = par.getElementsByClassName(classname);
    var elem = elemCol[0];
    var elemStyle = elem.style;
    elemStyle.display = 'flex';
    elemStyle.position = 'absolute';
    elemStyle.left = '40px';
    elemStyle.right = '0px';
    elemStyle.width = '150px';
    elemStyle.margin = '3px 0px 3px 0px;'

}