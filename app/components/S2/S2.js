// @spa$:S2

// componentName: S2

// available spa.$fn aliases: spa.$render as render; spa.$refresh as refresh; spa.merge as merge; spa.extend as extend;

/* private properties */

var _target = '#targetContainer';

var _dataUrl = '';

function _renderCallback () { // DO NOT USE ARROW FUNCTION

  var templateData = this.$data; // or app.S2.$data

  console.log('Component S2 has been rendered with Data:', templateData);

  doSomething();
};

// var _events = [
//   { target: '#btnSubmit',
//     onClick: function () { // DO NOT USE ARROW FUNCTION
//       doSomething();
//     }
//   }
// ];

/* local variables and functions */

function doSomething () {
  console.log('Doing Something...');
}

/* export local variables or functions as properties accessible through component:S2 as app.S2.actionX(); */
var props = {

  actionX: doSomething

};