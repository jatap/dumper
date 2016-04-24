import {expect} from 'chai';
import * as sinon from 'sinon';
import {dumper} from '../lib/dumper.js';

let sandbox = sinon.sandbox.create();

describe('dumper', () => {
  beforeEach(() => {
    sandbox.stub(console, 'log');
  });

  it('should log a header top line', () => {
    dumper({ foo: 'bar' });
    expect(console.log.calledWithMatch(/DEBUG - Init/)).to.be.true;
    sandbox.restore();
  });

  it('should log a subheader top line', () => {
    dumper({ foo: 'bar' });
    expect(console.log.calledWithMatch(/inspect/)).to.be.true;
    sandbox.restore();
  });

  it('should log a footer top line', () => {
    dumper({ foo: 'bar' });
    expect(console.log.calledWithMatch(/DEBUG - End/)).to.be.true;
    sandbox.restore();
  });

  it('should log a function', () => {
    dumper(() => {});
    expect(console.log.calledWithMatch(/Function/)).to.be.true;
    sandbox.restore();
  });

  it('should log a string', () => {
    dumper('Dummy data');
    expect(console.log.calledWithMatch(/String/)).to.be.true;
    sandbox.restore();
  });

  it('should log a number', () => {
    dumper(123);
    expect(console.log.calledWithMatch(/Number/)).to.be.true;
    sandbox.restore();
  });

  it('should log a boolean', () => {
    dumper(true);
    expect(console.log.calledWithMatch(/Boolean/)).to.be.true;
    sandbox.restore();
  });

  it('should log even without a variable', () => {
    dumper();
    expect(console.log.calledWithMatch(/Undefined/)).to.be.true;
    sandbox.restore();
  });

  it('should log an undefined variable', () => {
    var undefinedVariable;
    dumper(undefinedVariable);
    expect(console.log.calledWithMatch(/Undefined/)).to.be.true;
    sandbox.restore();
  });

  it('should log a null', () => {
    var nullVariable = null;
    dumper(null);
    expect(console.log.calledWithMatch(/Null/)).to.be.true;
    sandbox.restore();
  });

  it('should log an object', () => {
    dumper(new Date());
    expect(console.log.calledWithMatch(/inspect/)).to.be.true;
    sandbox.restore();
  });
});
