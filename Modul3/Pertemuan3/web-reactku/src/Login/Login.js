import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div class="body_top">
            <h2>Form Login</h2>
            <div class="body_login">
                <h1>Tugas Pertemuan <br />Ketiga</h1>
                <form>
                    <div class="body_input">
                        <label for="fname" class="nameinput" >Username</label>
                        <input placeholder="Masukan Username"></input>
                        <label for="fname" class="namepw">Password</label>
                        <input placeholder="Masukan Password Anda"></input></div>                                                
                    <button class="button button1">Login</button>                                            
                </form>
                <input type="checkbox"></input><label class="checkbox">Remember Me</label>
                <br/>
                <button class="button_bawah button2">Cancel</button>                                                            
            </div>
        </div>

    );
}

export default Login;