const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class MessageTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Messages";
  }

  getMessageById(Id) {
    console.log("Call GetMessage!");
    return queryAsync(`SELECT * FROM Messages WHERE Id=${Id} `);
  }

  getAllMessages() {
    console.log("CallGetallMessages!");
    return queryAsync("SELECT * FROM Messages");
  }

  getUserMessages(userID) {
    console.log("Call GetUserMessage!");
    return queryAsync(`SELECT * FROM Messages WHERE UserId=${userID}` );
  }
  
  getDiscussionMessages(discussionId) {
    console.log("Call GetDiscussionMessage!");
    return queryAsync(
      `SELECT * FROM MessagesUser WHERE DiscussionId=${discussionId} `
    );
  }

}

module.exports = MessageTrancactions;
