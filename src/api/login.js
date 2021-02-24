import axios from 'axios'
import router from '../router/index'



export function LoginCheck(uname,upassword){
    axios
    .get('http://localhost:8080/data.json')
    .then(response => {
        let ad = response.data.admin
        if(uname==ad.username && upassword == ad.password){
            router.push({
                path:'/'
            })
        }else{
            document.getElementById('error').innerHTML = "用户名或密码错误"
        }
    })
}

export function setCookie(username,password){
        const time = new Date();
        time.setTime(time.getTime() + 24 * 60 * 60 * 1000 * 7);
        //加上window.btoa对用户名和密码进行编码，不让cookie明文展示
        window.document.cookie = "uname=" + username +"; path=/; expires="+ time.toGMTString()
        window.document.cookie = "pword=" + password +"; path=/; expires="+ time.toGMTString()
        localStorage.setItem('state',true);
        console.log(document.cookie)
}

export function  getCookie() {
        let f = {}
        if (document.cookie.length > 0) {
            const cookieArr1 = document.cookie.split(";");
            let cookieArr2 = []
            for (let i in cookieArr1) {
            cookieArr2.push(cookieArr1[i].split("=")[1])
            }
            console.log(cookieArr2)
            cookieArr2[0] = cookieArr2[0].replace(/\s+/g, "");
            cookieArr2[1] = cookieArr2[1].replace(/\s+/g, "");
            //console.log(cookieArr2)
            f.username = cookieArr2[0];
            f.password = cookieArr2[1];
            console.log(f)
            return f
            }
        }


export function clearCookie() {
    setCookie("", "", -1);
    localStorage.setItem('state',false);
  }