import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionCreators';
// subscribe to store to be notified of state change
const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
})
// adds bug
store.dispatch(bugAdded("Bug 1"));
// resolves bug
store.dispatch(bugResolved(1));
unsubscribe();

// removes bug by id
//store.dispatch(bugRemoved(1));

console.log(store.getState());