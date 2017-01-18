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
        'class', 'topper');
      ie_open('h1');
        ie_open('a', null, null,
            'href', '/');
          itext('Liferay Live');
        ie_close('a');
      ie_close('h1');
      if (opt_data.currentUser) {
      }
    ie_close('div');
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
      ie_open('div', null, null,
          'class', 'input-submit-group');
        ie_open('input', null, null,
            'class', 'form-control',
            'id', 'text',
            'name', 'text',
            'placeholder', 'Comment...',
            'type', 'text');
        ie_close('input');
        ie_open('button', null, null,
            'class', 'btn btn-primary',
            'type', 'submit');
          itext('+');
        ie_close('button');
      ie_close('div');
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
      ie_open('div', null, null,
          'class', 'input-submit-group');
        ie_open('input', null, null,
            'class', 'form-control',
            'id', 'name',
            'name', 'name',
            'placeholder', 'Name of talk...',
            'type', 'text');
        ie_close('input');
        ie_open('button', null, null,
            'class', 'btn btn-primary',
            'type', 'submit');
          itext('+');
        ie_close('button');
      ie_close('div');
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
    var talkList29 = opt_data.talks;
    var talkListLen29 = talkList29.length;
    if (talkListLen29 > 0) {
      for (var talkIndex29 = 0; talkIndex29 < talkListLen29; talkIndex29++) {
        var talkData29 = talkList29[talkIndex29];
        ie_open('div', talkData29.id, null,
            'class', 'talk',
            'key', talkData29.id);
          ie_open('a', null, null,
              'class', 'talk-name',
              'data-onclick', 'handleTalkClick_',
              'data-talkid', talkData29.id,
              'href', 'javascript:;');
            var dyn0 = talkData29.name;
            if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
          ie_close('a');
        ie_close('div');
      }
    } else {
      ie_open('div', null, null,
          'class', 'empty-label');
        itext('No talks yet...');
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
    var commentList45 = opt_data.comments;
    var commentListLen45 = commentList45.length;
    if (commentListLen45 > 0) {
      for (var commentIndex45 = 0; commentIndex45 < commentListLen45; commentIndex45++) {
        var commentData45 = commentList45[commentIndex45];
        ie_open('div', commentData45.id, null,
            'class', 'comment',
            'key', commentData45.id);
          ie_open('div', null, null,
              'class', 'comment-topper');
            ie_open('span', null, null,
                'class', 'comment-user');
              var dyn1 = commentData45.user.name;
              if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
            ie_close('span');
            ie_open('span', null, null,
                'class', 'comment-time');
              var dyn2 = commentData45.time;
              if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
            ie_close('span');
          ie_close('div');
          ie_open('span', null, null,
              'class', 'comment-text');
            var dyn3 = commentData45.text;
            if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
          ie_close('span');
        ie_close('div');
      }
    } else {
      ie_open('div', null, null,
          'class', 'empty-label');
        itext('No comments yet...');
      ie_close('div');
    }
  ie_close('section');
}
exports.comments = $comments;
if (goog.DEBUG) {
  $comments.soyTemplateName = 'LiferayLive.comments';
}

exports.render.params = ["comments","currentUser","talkId","talks"];
exports.render.types = {"comments":"any","currentUser":"any","talkId":"any","talks":"any"};
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
