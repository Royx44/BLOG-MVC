module.exports = {
    // Formats a date object into a string in the 'MM/DD/YYYY' format.
    formatDate: (date) => {
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const year = date.getFullYear();
  
      return `${month}/${day}/${year}`;
    },
  
    // Checks if an array of comments is empty.
    hasNoComments: (comments) => {
      return comments.length === 0;
    },
  
    // Checks if a new comment can be added based on user status and post ownership.
    canAddComment: (isLoggedIn, postUserId, userId) => {
      return isLoggedIn && postUserId !== userId;
    }
  };
  