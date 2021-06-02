import { action, computed, observable, makeObservable } from "mobx";
import Base from "./base";

export default class UserStore extends Base {
  user
	constructor(initState) {
		super(initState);
		makeObservable(this, {
			user: observable,
			user1: computed,
			setUser: action,
			// fetch: flow
		});
		this.user =  {
      name: "ting",
      age: 26,
    }
	}

	get user1() {
		return user;
	}

	setUser(user) {
		this.user = user;
	}
}
