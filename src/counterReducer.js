const counterReducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
      default:
        return
    }
  }
  
  export default counterReducer