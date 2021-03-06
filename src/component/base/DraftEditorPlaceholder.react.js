/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DraftEditorPlaceholder.react
 * @typechecks
 * @flow
 */

'use strict';

const React = require('React');

const cx = require('cx');

import type {DraftTextAlignment} from 'DraftTextAlignment';
import type EditorState from 'EditorState';

type Props = {
  editorState: EditorState,
  text: string,
  textAlignment: DraftTextAlignment,
};

/**
 * This component is responsible for rendering placeholder text for the
 * `DraftEditor` component.
 *
 * Override placeholder style via CSS.
 */
class DraftEditorPlaceholder extends React.Component {
  shouldComponentUpdate(nextProps: Props): boolean {
    return (
      this.props.text !== nextProps.text ||
      (
        this.props.editorState.getSelection().getHasFocus() !==
        nextProps.editorState.getSelection().getHasFocus()
      )
    );
  }

  render(): ReactElement {
    const hasFocus = this.props.editorState.getSelection().getHasFocus();

    const className = cx({
      'public/DraftEditorPlaceholder/root': true,
      'public/DraftEditorPlaceholder/hasFocus': hasFocus,
    });

    return (
      <div className={className}>
        <div className={cx('public/DraftEditorPlaceholder/inner')}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

module.exports = DraftEditorPlaceholder;
