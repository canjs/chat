import QUnit from 'steal-qunit';
import { ViewModel } from './home';

// ViewModel unit tests
QUnit.module('canjs-chat/home');

QUnit.test('Has name', function(){
  var vm = new ViewModel({ name: 'Test' });
  QUnit.equal(vm.name, 'Test');
});
