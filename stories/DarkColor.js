import '../css/material/default.css';

import React from 'react';
import TimePickerWrapper from '../examples/TimePickerWrapper';
import { storiesOf } from '@kadira/storybook';

storiesOf('DarkColor', module)
  .addWithInfo('basic', () => (
    <TimePickerWrapper colorPalette="dark" />
  ))
  .addWithInfo('with default time', () => (
    <TimePickerWrapper
      colorPalette="dark"
      defaultTime="11:50"
    />
  ))
  .addWithInfo('focused at setup', () => (
    <TimePickerWrapper
      colorPalette="dark"
      focused
    />
  ))
  .addWithInfo('without icon', () => (
    <TimePickerWrapper
      focused
      withoutIcon
      colorPalette="dark"
    />
  ));
