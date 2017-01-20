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

var $templateAlias1 = Soy.getTemplate('Comment.incrementaldom', 'render');


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
      if (opt_data.talk) {
        ie_open('h3');
          itext('Talk: ');
          var dyn4 = opt_data.talk.name;
          if (typeof dyn4 == 'function') dyn4(); else if (dyn4 != null) itext(dyn4);
        ie_close('h3');
      }
    ie_close('div');
    ie_open('div', null, null,
        'class', 'container');
      if (! opt_data.currentUser) {
        $signIn(opt_data, null, opt_ijData);
      } else if (opt_data.talk) {
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
function $comments(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'comments');
    var commentList63 = opt_data.comments;
    var commentListLen63 = commentList63.length;
    if (commentListLen63 > 0) {
      for (var commentIndex63 = 0; commentIndex63 < commentListLen63; commentIndex63++) {
        var commentData63 = commentList63[commentIndex63];
        $templateAlias1(soy.$$assignDefaults({comment: commentData63, key: 'comment_' + commentData63.id}, opt_data), null, opt_ijData);
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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $signIn(opt_data, opt_ignored, opt_ijData) {
  ie_open('section', null, null,
      'class', 'sign-in');
    ie_open('button', null, null,
        'class', 'btn btn-lg btn-primary',
        'data-onclick', 'handleSignInClick_');
      itext('Sign In');
    ie_close('button');
  ie_close('section');
}
exports.signIn = $signIn;
if (goog.DEBUG) {
  $signIn.soyTemplateName = 'LiferayLive.signIn';
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
    var talkList83 = opt_data.talks;
    var talkListLen83 = talkList83.length;
    if (talkListLen83 > 0) {
      for (var talkIndex83 = 0; talkIndex83 < talkListLen83; talkIndex83++) {
        var talkData83 = talkList83[talkIndex83];
        ie_open('a', talkData83.id, null,
            'class', 'talk',
            'data-onclick', 'handleTalkClick_',
            'data-talkid', talkData83.id,
            'data-talkname', talkData83.name,
            'href', 'javascript:;',
            'key', talkData83.id);
          ie_open('span', null, null,
              'class', 'talk-name');
            var dyn5 = talkData83.name;
            if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
          ie_close('span');
        ie_close('a');
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

exports.render.params = ["comments","currentUser","talk","talks"];
exports.render.types = {"comments":"any","currentUser":"any","talk":"any","talks":"any"};
exports.commentForm.params = [];
exports.commentForm.types = {};
exports.comments.params = ["comments"];
exports.comments.types = {"comments":"any"};
exports.signIn.params = [];
exports.signIn.types = {};
exports.talkForm.params = [];
exports.talkForm.types = {};
exports.talks.params = ["talks"];
exports.talks.types = {"talks":"any"};
templates = exports;
return exports;

});

class LiferayLive extends Component {}
Soy.register(LiferayLive, templates);
export { LiferayLive, templates };
export default templates;
/* jshint ignore:end */
