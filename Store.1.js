// store.js
class Store {
 constructor(reducer, initialState) {
  this.reducer = reducer;
  this.state = initialState;
  this.listeners = [];
 }
 getState() {
  return this.state;
 }
 dispatch(action) {
  this.state = this.reducer(this.state, action);
  this.listeners.forEach((listener) => listener());
 }
 subscribe(listener) {
  this.listeners.push(listener);
  return () => {
   this.listeners = this.listeners.filter((l) => l !== listener);
  };
 }
}

// Reducer function to handle actions
function counterReducer(state = { count: 0 }, action) {
 switch (action.type) {
  case "ADD":
   return { count: state.count + 1 };
  case "SUBTRACT":
   return { count: state.count - 1 };
  case "RESET":
   return { count: 0 };
  default:
   return state;
 }
}
// Initial state
const initialState = { count: 0 };

// Create the store
const store = new store(counterReducer, initialState);

// Subscribe to store updates
store.subscribe(() => {
 console.log("state:", store.getState());
});

// Scenario 1: Initaial State Verification
console.log("Initial State:", store.getState());

//Scenario 2: Incrementing the counter
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });

//Scenario 3: Decrementing the counter
store.dispatch({ type: "SUBTRACT" });
