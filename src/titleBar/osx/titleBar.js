import React, { Component, PropTypes } from 'react';
import Controls from './controls/controls';
import styles from './styles/osx10_11';
import DesktopComponent, { WindowFocus } from '../../desktopComponent';

@DesktopComponent(WindowFocus)
class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    controls: PropTypes.bool,
    isFullscreen: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onMinimizeClick: PropTypes.func,
    onMaximizeClick: PropTypes.func,
    onResizeClick: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  componentDidUpdate() {
    this.resize();
  }

  resize = () => {
    const barRect = this.refs.element.getBoundingClientRect();
    this.refs.title.style.overflow = 'visible';
    this.refs.title.style.paddingRight = 0;
    this.refs.title.style.flexGrow = 0;
    const titleRect = this.refs.title.getBoundingClientRect();
    this.refs.title.style.overflow = 'hidden';
    this.refs.title.style.flexGrow = 1;

    const barWidth = barRect.width - 6;
    const contentWidth = titleRect.width + (this.props.controls ? 60 : 0);

    let padding = barWidth - contentWidth;
    if (padding > 60) padding = 60;

    this.refs.title.style.paddingRight = (padding) + 'px';
  };

  render() {
    let { children, controls, title, ...props } = this.props;

    let componentStyle = { ...styles.titleBar };
    if (children) {
      componentStyle = { ...componentStyle, ...styles.toolbar };
    }

    let titleStyle = styles.title;

    if (!this.state.windowFocused) {
      componentStyle = { ...componentStyle, ...styles.unfocusedTitleBar };
      titleStyle = { ...titleStyle, ...styles.unfocusedTitle }
    }

    controls = !controls || <Controls ref="controls" {...this.props}/>;
    title = !title || (
        <div ref="title" style={titleStyle}>
          {this.props.title}
        </div>
      );

    return (
      <div
        ref="element"
        style={componentStyle}
        {...props}
      >
        {controls}
        {title}
        {children}
      </div>
    );
  }
}

export default TitleBar;
