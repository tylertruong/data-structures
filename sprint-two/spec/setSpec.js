describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not add additional values of the same value', function() {
    set.add('Susan Sarandon');
    set.add('Susan Sarandon');
    set.remove('Susan Sarandon');
    expect(set.contains('Susan Sarandon')).to.equal(false);
  });

  it('should be able to handle numbers', function() {
    set.add(5);
    set.add(10);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(10)).to.equal(true);  
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
    expect(set.contains(10)).to.equal(true);
  });

  it('should be able to handle input objects of any type', function() {
    set.add({a: 'apple', b: 'banana'});
    set.add({c: 'cat', d: 'dog'});
    expect(set.contains({a: 'apple', b: 'banana'})).to.equal(true);
    expect(set.contains({c: 'cat', d: 'dog'})).to.equal(true);  
    set.remove({a: 'apple', b: 'banana'});
    expect(set.contains({a: 'apple', b: 'banana'})).to.equal(false);
    expect(set.contains({c: 'cat', d: 'dog'})).to.equal(true);

  });

});
