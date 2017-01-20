'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Comment.soy';

class Comment extends Component {
	handleReactionClick_(event) {
		const {delegateTarget} = event;

		this.toggleReaction(delegateTarget.getAttribute('data-reactiontype'));
	}

	setComment_(comment) {
		const {currentUser} = this;

		if (comment) {
			const time = new Date(comment.time);

			let minutes = time.getMinutes();

			if (minutes < 10) {
				minutes = `0${minutes}`
			}

			comment.displayTime = `${time.getHours()}:${minutes}`;

			const reactions = comment.reactions || {};

			this.currentUserReactions = Object.keys(reactions).reduce((userReactions, reaction) => {
				userReactions[reaction] = reactions[reaction].includes(currentUser.id);

				return userReactions;
			}, {});
		}

		return comment;
	}

	toggleReaction(reaction) {
		const {comment, currentUser} = this;

		comment.reactions = comment.reactions || {};
		const userId = this.currentUser.id;

		let reactionData = comment.reactions[reaction] || [];

		if (reactionData.includes(userId)) {
			reactionData.splice(reactionData.indexOf(userId), 1);
		}
		else {
			reactionData.push(userId);
		}

		comment.reactions[reaction] = reactionData;

		this.updateComment(comment);
	}

	updateComment(commentData) {
		const {id} = this.comment;

		delete commentData.id;
		delete commentData.displayTime;

		return this.data.update(`comments/${id}`, commentData);
	}
}

Comment.STATE = {
	auth: {
		value: null
	},

	comment: {
		setter: 'setComment_',
		value: {}
	},

	currentUser: {
		value: null
	},

	currentUserReactions: {
		value: {}
	},

	data: {
		value: null
	}
};

Soy.register(Comment, templates);

export default Comment;