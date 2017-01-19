'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './LiferayLive.soy';

const COLLECTION_COMMENTS = 'comments';

const COLLECTION_TALKS = 'talks';

class LiferayLive extends Component {
	created() {
		const {origin} = location;

		const authUrl = origin
			.replace('//hosting.', '//')
			.replace('//', '//auth.');

		const dataUrl = origin
			.replace('//hosting.', '//')
			.replace('//', '//data.');

		const auth = WeDeploy.auth(authUrl);
		const data = WeDeploy.data(dataUrl);

		this.currentUser = auth.currentUser;

		auth.onSignIn(this.handleSignedIn.bind(this));

		this.auth = auth;
		this.data = data;

		navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	}

	applyHash() {
		const {data} = this;
		const {hash} = location;

		if (hash) {
			data.get(`talks/${hash.substring(1, hash.length)}`)
				.then(talk => {
					this.talk = talk;
				});
		}
	}

	afterFetchTalks_(talks) {
		this.talks = talks;
	}

	afterFetchComments_(comments) {
		comments = comments.map(comment => {
			const time = new Date(comment.time);

			comment.time = `${time.getHours()}:${time.getMinutes()}`;

			return comment;
		});

		this.notify_();

		this.comments = comments;
	}

	fetchComments_() {
		const {data, talk} = this;

		data.where('talkId', talk.id)
			.orderBy('time', 'desc')
			.get(COLLECTION_COMMENTS)
			.then(this.afterFetchComments_.bind(this));
	}

	fetchTalks_() {
		const {auth, data} = this;

		data.get(COLLECTION_TALKS)
			.then(this.afterFetchTalks_.bind(this));
	}

	handleCommentSubmit_(event) {
		event.preventDefault();

		const {currentUser, data, talk} = this;
		const {target} = event;

		const text = target.text.value;
		const time = Date.now();
		const {name, id} = currentUser;

		if (text) {
			data.create('comments', {
				talkId: talk.id,
				text,
				time,
				user: {
					id,
					name
				}
			});

			target.text.value = '';
		}
	}

	handleSignOutClick_() {
		const {auth} = this.auth;

		auth.signOut();
	}

	handleSignedIn(currentUser) {
		this.currentUser = currentUser;

		this.applyHash();

		this.fetchTalks_();
		this.watchTalks_();
	}

	handleSignInClick_() {
		this.signIn();
	}

	handleTalkClick_(event) {
		const {delegateTarget} = event;

		const id = delegateTarget.getAttribute('data-talkid');
		const name = delegateTarget.getAttribute('data-talkname');

		location.hash = id;

		this.talk = {
			id,
			name
		};
	}

	handleTalkSubmit_(event) {
		event.preventDefault();

		const {data} = this;
		const {target} = event;

		const name = target.name.value;

		if (name) {
			data.create('talks', {
				name
			});

			target.name.value = '';
		}
	}

	notify_() {
		if (navigator.vibrate) {
			navigator.vibrate(400);
		}
	}

	syncTalk(talk) {
		if (talk) {
			this.fetchComments_();
			this.watchComments_();
		}
		else {
			this.comments = [];
		}
	}

	signIn() {
		const {auth} = this;

		const redirectUrl = location.origin;

		const provider = new auth.provider.Google();

		provider.setProviderScope('email');
		provider.setRedirectUri(redirectUrl);

		auth.signInWithRedirect(provider);
	}

	watchComments_() {
		const {data, talk} = this;

		this.commentWatcher = data.where('talkId', talk.id)
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

	talk: {
		value: null
	},

	talks: {
		value: []
	}
};

Soy.register(LiferayLive, templates);

export default LiferayLive;
