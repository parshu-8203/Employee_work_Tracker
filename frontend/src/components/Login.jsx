import React from "react";
function Login() {
    return (
        <div class="screen">
            <div class="card0">
                <div class="card1">
                    <div class="card11">
                        <div class="info">
                            <h1 class="info-heading">Work<br /> Tracker</h1>
                            <p class="info-paragraph">Keep a check on<br /> all your Work</p>
                        </div>
                    </div>

                    <div class="card12">
                        <form class="form1">
                            <div class="login-information">
                                <div class="form-check ">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Admin
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Employee
                                    </label>
                                </div>
                                <label class="lable-email">EMAIL</label>
                                <input class="input-email" type="email" />
                                <label class="lable-password">PASSWORD</label>
                                <input class="input-password" type="password" name="" id="" />
                            </div>

                            <div class="login-div">
                                <button type="submit" class="login">LOG IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;