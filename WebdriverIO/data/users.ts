class Users {
  readonly standardUser = {
    username: "standard_user",
    password: "secret_sauce"
  };

  readonly lockedOutUser = {
    username: "locked_out_user",
    password: "secret_sauce"
  };

  readonly problemUser = {
    username: "problem_user",
    password: "secret_sauce"
  };

  readonly performanceGlitchUser = {
    username: "performance_glitch_user",
    password: "secret_sauce"
  };
  
  readonly incorectUser = {
    username: "user_standard",
    password: "incorect"
  };

}

export default new Users();
