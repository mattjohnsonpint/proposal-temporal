// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.time.prototype.equals
features: [Symbol]
---*/

const equals = Temporal.Time.prototype.equals;

assert.sameValue(typeof equals, "function");

assert.throws(TypeError, () => equals.call(undefined), "undefined");
assert.throws(TypeError, () => equals.call(null), "null");
assert.throws(TypeError, () => equals.call(true), "true");
assert.throws(TypeError, () => equals.call(""), "empty string");
assert.throws(TypeError, () => equals.call(Symbol()), "symbol");
assert.throws(TypeError, () => equals.call(1), "1");
assert.throws(TypeError, () => equals.call({}), "plain object");
assert.throws(TypeError, () => equals.call(Temporal.Time), "Temporal.Time");
assert.throws(TypeError, () => equals.call(Temporal.Time.prototype), "Temporal.Time.prototype");
