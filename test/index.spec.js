import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import ReactScrollContext from '../src';

const child = <div className="child"></div>;

describe('ReactScrollContext component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ReactScrollContext>{child}</ReactScrollContext>);
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = '0px';
    });

    it('renders children', () => {
        assert.strictEqual(wrapper.find('.child').length, 1);
    });

    it('hides overflow on body when users mouse hovers over container', () => {
        wrapper.find('.child').first().simulate('mouseOver');
        assert.strictEqual(document.body.style.overflow, 'hidden');
    });

    it('allows scroll when users mouse hovers over container', () => {
        wrapper.find('.child').first().simulate('mouseOver');
        wrapper.find('.child').first().simulate('mouseOut');
        assert.strictEqual(document.body.style.overflow, 'auto');
    });

    it('enables scroll again when it is unmounted', () => {
        wrapper.find('.child').first().simulate('mouseOver');
        wrapper.unmount();
        assert.strictEqual(document.body.style.overflow, 'auto');
    });

    describe('when enable prop is set', () => {
        it('does not trigger mouseEvent', () => {
            wrapper.setProps({
                enable: false,
            });
            wrapper.find('.child').first().simulate('mouseOver');
            assert.strictEqual(document.body.style.overflow, 'auto');
        });
    });
});
