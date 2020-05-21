1. What problem does the context API help solve?

Provide data globally so that components can share it without having to 'prop-drill'
directly to the path where you need that data. Helps with keeping state clean.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: send data from your application to the 'store'. So if a user submitted a form,
it would send that data to the 'store'.

Reducers: Are to have predictable, immutable code so that the state isn't directly
changed and we don't have any side effects occurring. We clone the state, change it, and replace the old with the new modified copied state.

Store: Because the store is a single object that contains all of our state for our application. We never write directly to the store state, but we clone/modify it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is global, and component state is local. App is better used when we need our state across all/most components, and component state would be better when state is necessary for that single component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It's redux middleware that allows us to return a function instead of just an action. So we can change our action-creators to be able to write async code.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. Even though it's difficult to grasp, I could see how useful it would be to have for larger scale applications. It also challenges you to write neater code.
