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

  addMessage(values) {
    const body_data = [
      values.UserId,
      values.MessageText,
      values.DiscussionId,
      values.CreatedDate,
    ];
    console.log("CallAddNewMessage!");
    return queryAsync(
      "INSERT INTO Messages (UserId,MessageText,DiscussionId,CreatedDate) VALUES (?,?,?,?) ",
      body_data
    );
  }
 
  updateMessage(values) {
    const body_data = [
      values.UserId,
      values.MessageText,
      values.DiscussionId,
      values.CreatedDate,
      values.Id,
    ];
    console.log("Updating Message was successfully");
    return queryAsync(
      "UPDATE Messages SET UserId = ?, MessageText = ?, DiscussionId = ?,CreatedDate = ? WHERE Id = ?",
      body_data
    );
  }

  deleteMessage(Id) {
    console.log("Deleting This Message !");
    return queryAsync("DELETE FROM Messages WHERE Id = ? ", Id);
  }
}

module.exports = MessageTrancactions;
