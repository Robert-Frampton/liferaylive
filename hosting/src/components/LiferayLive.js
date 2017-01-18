'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './LiferayLive.soy';

const COLLECTION_COMMENTS = 'comments';

const COLLECTION_TALKS = 'talks';

class LiferayLive extends Component {
	attached() {
		const {origin} = location;

		const authUrl = origin
			.replace('//hosting.', '//')
			.replace('//', '//auth.');

		const dataUrl = origin
			.replace('//hosting.', '//')
			.replace('//', '//data.');

		const auth = WeDeploy.auth(authUrl);
		const data = WeDeploy.data(dataUrl);

		this.auth = auth;
		this.data = data;

		this.signIn();
	}

	afterFetchTalks_(talks) {
		this.talks = talks;
	}

	afterFetchComments_(comments) {
		this.comments = comments;
	}

	fetchComments_() {
		const {data, talkId} = this;

		data.where('talkId', talkId)
			.orderBy('time', 'desc')
			.get(COLLECTION_COMMENTS)
			.then(this.afterFetchComments_.bind(this));
	}

	fetchTalks_() {
		const {data} = this;

		data.get(COLLECTION_TALKS)
			.then(this.afterFetchTalks_.bind(this));
	}

	handleCommentSubmit_(event) {
		event.preventDefault();

		const {data, talkId} = this;
		const {target} = event;

		const text = target.text.value;

		const time = Date.now();

		if (text) {
			data.create('comments', {
				talkId,
				text,
				time
			});

			target.text.value = '';
		}
	}

	handleSignedIn(currentUser) {
		this.currentUser = currentUser;

		this.fetchTalks_();
		this.watchTalks_();
	}

	handleTalkClick_(event) {
		const {delegateTarget} = event;

		const talkId = delegateTarget.getAttribute('data-talkid');

		this.talkId = talkId;
	}

	syncTalkId(talkId) {
		if (talkId) {
			this.fetchComments_();
			this.watchComments_();
		}
		else {
			this.comments = [];
		}
	}

	handleTalkSubmit_(event) {
		event.preventDefault();

		const {data} = this;
		const {target} = event;

		const name = target.name.value;

		if (name) {
			data.create('talks', {
				name: target.name.value
			});
		}
	}

	signIn() {
		const {auth} = this;

		const {currentUser} = auth;

		if (currentUser) {
			this.handleSignedIn(currentUser);
		}
		else {
			const redirectUrl = location.origin;

			const provider = new auth.provider.Google();

			provider.setProviderScope('email');
			provider.setRedirectUri(redirectUrl);

			auth.signInWithRedirect(provider);

			auth.onSignIn(this.handleSignIn.bind(this));
		}
	}

	watchComments_() {
		const {data, talkId} = this;

		this.commentWatcher = data.where('talkId', talkId)
			.orderBy('time', 'desc')
			.watch('comments')
			.on('changes', this.afterFetchComments_.bind(this));
	}

	watchTalks_() {
		const {data} = this;

		this.talkWatcher = data.watch('talks')
			.on('changes', this.afterFetchTalks_.bind(this));
	}
}

LiferayLive.STATE = {
	comments: {
		value: []
	},

	currentUser: {
		value: null
	},

	talkId: {
		value: null
	},

	talks: {
		value: []
	}
};

Soy.register(LiferayLive, templates);

export default LiferayLive;
