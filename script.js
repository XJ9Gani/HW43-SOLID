class User {
  constructor(name) {
    this.name = name;
  }
}

class NotificationService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.name}: ${message}`);
  }
}
class UserService {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  registerUser(name) {
    const user = new User(name);
    this.notificationService.sendEmail(user, "Welcome to our service!");
    return user;
  }
}

const sinon = require("sinon");
const { assert } = require("chai");

describe("UserService", function () {
  let userService;
  let mockNotificationService;

  beforeEach(function () {
    mockNotificationService = {
      sendEmail: sinon.spy(),
    };
    userService = new UserService(mockNotificationService);
  });

  it("should register a user and send a welcome email", function () {
    userService.registerUser("John Doe");
    assert(mockNotificationService.sendEmail.calledOnce);
  });
});
