"use strict"

describe('Blot', function() {
  it('offset()', function() {
    let blockNode = document.createElement('p');
    blockNode.innerHTML = '<span>01</span><em>23<strong>45</strong></em>';
    let blockBlot = Registry.create(blockNode);
    let boldBlot = blockBlot.children.tail.children.tail;
    expect(boldBlot.offset()).toEqual(2);
    expect(boldBlot.offset(blockBlot)).toEqual(4);
  });

  it('wrap()', function() {
    let parent = Registry.create('block');
    let head = Registry.create('bold');
    let text = Registry.create('text', 'Test');
    let tail = Registry.create('bold');
    parent.appendChild(head);
    parent.appendChild(text);
    parent.appendChild(tail);
    expect(parent.domNode.innerHTML).toEqual('<strong></strong>Test<strong></strong>');
    let wrapper = text.wrap('italic', true);
    expect(parent.domNode.innerHTML).toEqual('<strong></strong><em>Test</em><strong></strong>');
    expect(parent.children.head).toEqual(head);
    expect(parent.children.head.next).toEqual(wrapper);
    expect(parent.children.tail).toEqual(tail);
  });
});
