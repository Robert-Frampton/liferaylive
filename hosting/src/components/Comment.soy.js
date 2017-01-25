/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Comment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Comment.
 * @public
 */

goog.module('Comment.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', opt_data.comment.id, null,
      'class', 'comment',
      'key', opt_data.comment.id);
    ie_open('div', null, null,
        'class', 'comment-topper');
      ie_open('span', null, null,
          'class', 'comment-user');
        var dyn0 = opt_data.comment.user.name;
        if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
      ie_close('span');
      ie_open('span', null, null,
          'class', 'comment-time');
        var dyn1 = opt_data.comment.displayTime;
        if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
      ie_close('span');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'comment-body');
      ie_open('span', null, null,
          'class', 'comment-text');
        var dyn2 = opt_data.comment.text;
        if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
      ie_close('span');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'comment-footer');
      $reaction(soy.$$assignDefaults({icon: 'thumbs-o-up', type: 'liked'}, opt_data), null, opt_ijData);
      $reaction(soy.$$assignDefaults({icon: 'thumbs-o-down', type: 'disliked'}, opt_data), null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Comment.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $reaction(opt_data, opt_ignored, opt_ijData) {
  ie_open('a', null, null,
      'class', 'reaction' + (opt_data.comment.currentUserReactions && opt_data.comment.currentUserReactions[opt_data.type] ? ' selected' : ''),
      'data-onclick', 'handleReactionClick_',
      'data-reactiontype', opt_data.type,
      'href', 'javascript:;');
    ie_void('i', null, null,
        'class', 'fa fa-' + opt_data.icon,
        'aria-hidden', 'true');
    if (opt_data.comment.reactions && opt_data.comment.reactions[opt_data.type]) {
      var reactionLength__soy29 = opt_data.comment.reactions[opt_data.type].length;
      if (reactionLength__soy29 > 0) {
        ie_open('span', null, null,
            'class', 'count-sticker');
          var dyn3 = reactionLength__soy29;
          if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
        ie_close('span');
      }
    }
  ie_close('a');
}
exports.reaction = $reaction;
if (goog.DEBUG) {
  $reaction.soyTemplateName = 'Comment.reaction';
}

exports.render.params = ["comment"];
exports.render.types = {"comment":"any"};
exports.reaction.params = ["comment","icon","type"];
exports.reaction.types = {"comment":"any","icon":"any","type":"any"};
templates = exports;
return exports;

});

class Comment extends Component {}
Soy.register(Comment, templates);
export { Comment, templates };
export default templates;
/* jshint ignore:end */
