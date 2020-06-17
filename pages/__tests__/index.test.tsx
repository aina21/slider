import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
    it('should have App component', () => {
        const subject = mount(<Index />);

        expect(subject.find('Head')).toHaveLength(1);
    });
});
