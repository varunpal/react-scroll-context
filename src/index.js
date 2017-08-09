import React, { Component } from 'react';

class ScrollContext extends Component {
    constructor(props) {
        super(props);
        this.checkScroll(this.props.enable);
    }

    checkScroll(isEnabled) {
        if (typeof window !== 'undefined') {
            if (isEnabled === true) {
                this.disableBodyScroll();
            } else if (isEnabled === false) {
                this.enableBodyScroll();
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.checkScroll(nextProps.enable);
    }

    componentWillUnmount() {
        this.enableBodyScroll();
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
        const { styles, children, enable } = this.props;
        return (
            <div
                onMouseOver={() => {
                    if (typeof enable === 'boolean') {
                        return;
                    }
                    this.disableBodyScroll();
                }}
                onMouseOut={() => {
                    if (typeof enable === 'boolean') {
                        return;
                    }
                    this.enableBodyScroll();
                }}
                className={styles}
            >
                {children}
            </div>
        );
    }
}

export default ScrollContext;
