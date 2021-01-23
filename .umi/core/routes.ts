// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/Philip/.config/yarn/global/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/apps",
    "exact": true,
    "component": require('@/pages/apps.tsx').default
  },
  {
    "path": "/connection",
    "exact": true,
    "component": require('@/pages/connection.js').default
  },
  {
    "path": "/datagrid",
    "exact": true,
    "component": require('@/pages/datagrid.js').default
  },
  {
    "path": "/formhooks-material-ui",
    "exact": true,
    "component": require('@/pages/formhooks-material-ui.js').default
  },
  {
    "path": "/formhooks",
    "exact": true,
    "component": require('@/pages/formhooks.js').default
  },
  {
    "path": "/geolocation",
    "exact": true,
    "component": require('@/pages/geolocation.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/textfield",
    "exact": true,
    "component": require('@/pages/textfield.js').default
  },
  {
    "path": "/users",
    "exact": true,
    "component": require('@/pages/users.js').default
  },
  {
    "path": "/video",
    "exact": true,
    "component": require('@/pages/video.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
