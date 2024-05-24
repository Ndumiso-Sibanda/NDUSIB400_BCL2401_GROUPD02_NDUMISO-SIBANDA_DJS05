# Tally App Store

## Overview

This project implements a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. The store includes functions to get the current state, dispatch actions, and subscribe to state changes. The state changes are logged to the console to demonstrate state management effectively.

## How to Run the Code

1. Clone the repository or download the `index.html` and `store.js` files.
2. Ensure both files are in the same directory.
3. Open `index.html` in a web browser.
4. Open the browser's console (usually accessible through developer tools).
5. Observe the state management logs in the console.

## Implementation Details

### Store Implementation

- **Store Class**:

  - The `Store` class is implemented with methods to get the current state (`getState`), dispatch actions (`dispatch`), and subscribe to state changes (`subscribe`).
  - The `dispatch` method updates the state using a reducer function and notifies all subscribed listeners.

- **Reducer Function**:
  - The `counterReducer` function handles actions (`ADD`, `SUBTRACT`, `RESET`) and updates the state accordingly.

### Scenarios

1. **Initial State Verification**:

   - The initial state is logged to the console, showing a count of 0.

2. **Incrementing the Counter**:

   - Two `ADD` actions are dispatched sequentially. The state is updated and logged, showing a count of 2.

3. **Decrementing the Counter**:

   - A `SUBTRACT` action is dispatched. The state is updated and logged, showing a count of 1.

4. **Resetting the Counter**:
   - A `RESET` action is dispatched. The state is updated and logged, showing a count of 0.

### Improvements and Learning

- **Functional Programming Principles**:

  - Implementing the store and reducer reinforced the use of functional programming principles such as immutability and pure functions.

- **Observer Pattern**:

  - The `subscribe` method effectively demonstrates the Observer pattern, where listeners are notified of state changes.

- **Minimalistic Approach**:
  - Focusing on a minimalistic approach without UI rendering helped in understanding the core concepts of state management without distractions.

### Challenges and How They Were Overcome

- **State Management Logic**:

  - Ensuring correct state transitions and notifying subscribers was challenging. Careful implementation of the `dispatch` method and thorough testing of scenarios helped overcome this.

- **Redux Principles**:
  - Translating Redux principles into a minimalistic implementation required a deep understanding of core concepts. Reviewing Redux documentation and related resources provided clarity.

## Conclusion

This project provided valuable insights into implementing a Redux-inspired state management system using functional programming principles. By focusing on a minimalistic approach and logging state changes to the console, the core concepts of state management were effectively demonstrated. This exercise reinforced the importance of immutability, pure functions, and the Observer pattern in state management.

Overall, this project was a rewarding experience that deepened my understanding of state management and functional programming principles.
