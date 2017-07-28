<template>
<div id="login">
  <div style="height:1px;"></div>
  <div class="login-form">
    <form action="" onclick="return false;">
      <div class="input-group">
        <input type="text" class="input-nicn" name="nickname" v-model="user.nickname" placeholder="昵称">
        <input type="text" class="input-usn" name="username" v-model="user.username" placeholder="用户名">
        <input type="password" class="input-pwd" name="password" v-model="user.password" placeholder="密码">
      </div>
      <button class="btn-login" @click="subme"> 
        注册
      </button>
    </form>
    <div class="bottom">
      已经注册？<router-link to="/login" style="color:#fff">去登录</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return{
      user:{
        nickname:'',
        username:'',
        password:''
      }
    }
  },
  methods: {
		subme() {
			if (this.user.nickname=='' || this.user.username=='' || this.user.password==''){
				alert('内容不能为空！')
				return
			}
			var formData = this.user;
			// console.log(formData);	
			this.$http({
				method: 'post',
				url: '/public/register',
				data: formData,
			}).then((res) => {
        console.log(res);
        localStorage.token = res.data.token
				alert('注册成功！')
				location.href = '/'
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
  padding: 80px 0;
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

.input-nicn{
  border-bottom: 1px solid #999;
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