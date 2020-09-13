export default class UserInfo {
    constructor({
        userNameSelector,
        userJobSelector,
        userAvatar
    }) {
        this._userNameElement = userNameSelector;
        this._userJobElement = userJobSelector;
        this._userAvatar = userAvatar;

    }

    getUserInfo() {
        this._userProfileData = {};
        this._userProfileData.name = this._userNameElement.textContent;
        this._userProfileData.job = this._userJobElement.textContent;
        return this._userProfileData;
    }

    getUserId() {
        return this._userId;
    }

    setUserInfo(name, job, userId) {
        this._userNameElement.textContent = name;
        this._userJobElement.textContent = job;
        this._userId = userId;
    }

    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }
}

