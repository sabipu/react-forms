import * as React from "react";

const Root = () => {
  return (
    <>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" required />
        </div>
        <div>
          <label>Middle Name</label>
          <input type="text" name="middleName" required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password1"/>
        </div>
        <div>
          <label>Re-enter Password</label>
          <input type="password" name="password2"/>
        </div>
        <button type="submit">Sent</button>
      </form>
    </>
  );
};

export default Root;