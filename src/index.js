import React, { Component } from 'react';

class ScrollContext extends Component {
    constructor(props: Props) {
        super(props);
        if (typeof window !== 'undefined') {
            if (this.props.enable) {
                this.disableBodyScroll();
            } else {
                this.enableBodyScroll();
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.enable) {
            this.disableBodyScroll();
        } else {
            this.enableBodyScroll();
        }
    }

    disableBodyScroll = () => {
        const body = window.document.body;
        const margin = window.innerWidth - body.clientWidth;
        body.style.marginRight = `${margin}px`;
        body.style.overflow = 'hidden';
    };

    enableBodyScroll = () => {
        const body = window.document.body;
        body.style.marginRight = '0px';
        body.style.overflow = 'auto';
    };

    render() {
        const { styles, children } = this.props;
        return (
            <div
                onMouseOver={this.disableBodyScroll}
                onMouseOut={this.enableBodyScroll}
                className={styles}
            >
                {children}
            </div>
        );
    }
}

export default ScrollContext;
