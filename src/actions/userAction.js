export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const changeAvatar = url => ({
    type: CHANGE_AVATAR,
    payload: url
});
//принимает функцию changeAvatar и возвращает url

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});

export const changeFollowers = (countFollower) => ({
    type: CHANGE_FOLLOWERS,
    payload: countFollower
})

export const changeFollowing = (countFollowing) => ({
    type: CHANGE_FOLLOWING,
    payload: countFollowing
})