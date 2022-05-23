import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer ({ 
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
      open={open}
      onClose={toggleHandler}
      className={`drawer ${className || ''}`.trim()}
      width={width}
      placement={placement}
      handler={false}
      level={null}
      duration={'0.4s'}
      {...props}
      >

      </RcDrawer>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};