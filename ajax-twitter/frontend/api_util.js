const APIUtil = {
  followUser: (id) => (
    $.ajax ({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json',
    })
  ),

  unfollowUser: (id) => (
    $.ajax ({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    })
  )
};

module.exports = APIUtil;
