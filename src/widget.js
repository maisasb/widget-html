import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

const Instance = new Vue({
  store,
  components: { App },
  data: () => ({ config: {} }),
  render: function (createElement) {
    return createElement("app", {
      props: { config: this.config }
    });
  }
});

export default class Widget {
  constructor() {}
  createWidget(config) {
    config.show = true;

    //Mount widget vue instance
    let elementId = "";
    if (config.appendTo) {
      elementId = config.appendTo;
    } else {
      const div = document.createElement("div");
      div.id = "widget__container";
      document.body.appendChild(div);
      elementId = "widget__container";
    }

    Vue.set(Instance, "config", {
      ...config,
      apiKey: config.key,
      // id is optional. but allows setting the app's `id` dynamically to same `id`
      // as the context page placeholder (which app replaces), for consistency
      // for this, you have to assign `config.id` to App's `$el` in its `mounted()`
      id: elementId
      // or document.querySelector(selector).id || 'someClassApp'
    });
    if (elementId) {
      Instance.$mount("#" + elementId);
    }

    return Instance;
  }

  static showWidget(show) {
    Instance.config.show = show;
  }
}

// optional exports, used for type inheritance throughout the app
// export const { $store } = Instance;
