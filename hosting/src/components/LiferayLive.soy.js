/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from LiferayLive.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LiferayLive.
 * @public
 */

goog.module('LiferayLive.incrementaldom');

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
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'liferay-live');
    ie_open('div', null, null,
        'class', 'container');
      if (opt_data.talkId) {
        $commentForm(opt_data, null, opt_ijData);
        $comments(opt_data, null, opt_ijData);
      } else {
        $talkForm(opt_data, null, opt_ijData);
        $talks(opt_data, null, opt_ijData);
      }
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LiferayLive.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $commentForm(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'comment-form');
    ie_open('form', null, null,
        'data-onsubmit', 'handleCommentSubmit_');
      ie_open('label', null, null,
          'for', 'text');
        itext('Comment');
      ie_close('label');
      ie_open('input', null, null,
          'id', 'text',
          'name', 'text');
      ie_close('input');
    ie_close('form');
  ie_close('section');
}
exports.commentForm = $commentForm;
if (goog.DEBUG) {
  $commentForm.soyTemplateName = 'LiferayLive.commentForm';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $talkForm(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'talk-form');
    ie_open('form', null, null,
        'data-onsubmit', 'handleTalkSubmit_');
      ie_open('label', null, null,
          'for', 'name');
        itext('Name');
      ie_close('label');
      ie_open('input', null, null,
          'id', 'name',
          'name', 'name');
      ie_close('input');
    ie_close('form');
  ie_close('section');
}
exports.talkForm = $talkForm;
if (goog.DEBUG) {
  $talkForm.soyTemplateName = 'LiferayLive.talkForm';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $talks(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'talks');
    var talkList23 = opt_data.talks;
    var talkListLen23 = talkList23.length;
    for (var talkIndex23 = 0; talkIndex23 < talkListLen23; talkIndex23++) {
      var talkData23 = talkList23[talkIndex23];
      ie_open('div', null, null,
          'class', 'talk',
          'data-onclick', 'handleTalkClick_',
          'data-talkid', talkData23.id);
        ie_open('span', null, null,
            'class', 'talk-name');
          var dyn0 = talkData23.name;
          if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
        ie_close('span');
      ie_close('div');
    }
  ie_close('section');
}
exports.talks = $talks;
if (goog.DEBUG) {
  $talks.soyTemplateName = 'LiferayLive.talks';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $comments(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'comments');
    var commentList31 = opt_data.comments;
    var commentListLen31 = commentList31.length;
    for (var commentIndex31 = 0; commentIndex31 < commentListLen31; commentIndex31++) {
      var commentData31 = commentList31[commentIndex31];
      ie_open('div', null, null,
          'class', 'comment');
        ie_open('span', null, null,
            'class', 'comment-text');
          var dyn1 = commentData31.text;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('span');
      ie_close('div');
    }
  ie_close('section');
}
exports.comments = $comments;
if (goog.DEBUG) {
  $comments.soyTemplateName = 'LiferayLive.comments';
}

exports.render.params = ["comments","talkId","talks"];
exports.render.types = {"comments":"any","talkId":"any","talks":"any"};
exports.commentForm.params = [];
exports.commentForm.types = {};
exports.talkForm.params = [];
exports.talkForm.types = {};
exports.talks.params = ["talks"];
exports.talks.types = {"talks":"any"};
exports.comments.params = ["comments"];
exports.comments.types = {"comments":"any"};
templates = exports;
return exports;

});

class LiferayLive extends Component {}
Soy.register(LiferayLive, templates);
export { LiferayLive, templates };
export default templates;
/* jshint ignore:end */
