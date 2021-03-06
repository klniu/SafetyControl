import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: true,
        hasLogin: false,
        userName: "",
		userType: 1,	// 1.管理员，2.普通用户
		userInfo: null,
		
		// 输入页的内容，供其他页面取用
		inputPageText: "",
		// 内容对应的id
		key: "",
		
		// ------------扫码新建检查----------------
		// sublist中的对象
		sublistItem: null,
		// 对象位于sublist中的位置
		sublistIndex: 0,
    },
    mutations: {
        login(state, user) {
			if (user != null) {
				state.userName = user.username || '新用户';
				state.hasLogin = true;
				state.userType = user.yhlx;
				state.userInfo = user;
			}
        },
        logout(state) {
            state.userName = "";
			state.userInfo = null;
            state.hasLogin = false;
        },
		
		setInputPageText(state, item) {
			state.inputPageText = item.text;
			state.key = item.key;
		},
		
		setSublistItem(state, obj) {
			state.sublistItem = obj.item;
			state.sublistIndex = obj.index;
		},
		
		removeSublistItem(state) {
			state.sublistItem = null;
		},
		// 删除输入内容，每次取完值后最好删除，以防出错
		removeInputItem(state) {
			state.inputPageText = "";
			state.key = "";
		},
    }
})

export default store
