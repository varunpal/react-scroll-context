import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import ReactScrollContext from '../src';

const child = <div className="child"></div>;

describe('ReactScrollContext component', () => {
    const wrapper = mount(<ReactScrollContext>{child}</ReactScrollContext>);
    it('renders children', () => {
        assert.strictEqual(wrapper.find('.child').length, 1);
    });

    it('hides overflow on body when users mouse hovers over container', () => {
        wrapper.find('.child').first().simulate('mouseOver');
        assert.strictEqual(document.body.style.overflow, 'hidden');
    });

    it('allows scroll when users mouse hovers over container', () => {
        wrapper.find('.child').first().simulate('mouseOut');
        assert.strictEqual(document.body.style.overflow, 'auto');
    });
});