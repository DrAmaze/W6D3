const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initialFollowState");
    this.render();
    this.$el.on("click", () => {
      this.handleClick();
    });
  }

  render () {
    if (this.followState === "unfollowed"){
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }

  }

  handleClick () {
    event.preventDefault();

    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId)
        .then(response => {
          this.followState = "followed";
          this.render();

        });

    } else {
      APIUtil.unfollowUser(this.userId)
      .then(response => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  }
}

  // this.$el.prop("disabled", true);
  // this.$el.prop("disabled", false);

module.exports = FollowToggle;
