<template>
<div id="login">
  <div style="height:1px;"></div>
  <div class="login-form">
    <form action="" onclick="return false">
      <div class="input-group">
        <input type="text" class="input-usn" name="username" v-model="user.username" placeholder="用户名">
        <input type="password" class="input-pwd" name="password" v-model="user.password" placeholder="密码">
      </div>
      <button class="btn-login" @click="subme">
        登录
      </button>
    </form>
    <div class="bottom">
      还没账号？<router-link to="/register" style="color:#fff">去注册</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return{
      user:{
        username:'',
        password:''
      }
    }
  },
  methods: {
		subme() {
			if (this.user.username=='' || this.user.password==''){
				alert('用户名或密码不能为空！')
				return
			}
			var formData = this.user;
      // console.log(formData);	
      this.$http({
				method: 'post',
				url: '/public/login',
				data: formData,
			}).then((res) => {
        console.log(res);
        switch (res.data.result) {
          case 'ok':
            localStorage.token = res.data.token
            alert('登录成功！')
            location.href = '/'
            break
          case 'error':
            alert('用户名或密码错误！')
            break
        }
			})
			
		}	
	}
}
</script>

<style scoped>
#login{
  height: 100vh;
  background: #F98A53;
  position: relative;
}

.login-form{
  margin: 120px auto;
  width: 350px;
  height: 450px;
  text-align: center;
  background: #45525f;
  padding:110px 0;
  border-radius: 4px;
}

.input-group{
  /* margin-top: 110px; */
}

input{
  width: 80%;
  margin: 0 auto;
  height: 50px;
  background: #fff;
  border: 0px;
  padding: 0 15px;
}

.input-usn{
  border-bottom: 1px solid #999;
  
}

.btn-login{
  width: 80%;
  height: 50px;
  margin-top: 35px;
  background: #F98A53;
  border: 0px;
  color: #fff;
  transition: all .6s;
  border: 2px solid #F98A53;
}

.btn-login:hover{
  background: #45525f;
  color: #F98A53;
  
}

.bottom{
  margin-top: 40px;
  color: #fff;
}

a:hover{
  color: #F98A53
}

</style>