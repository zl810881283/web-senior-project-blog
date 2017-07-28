<template>
	<div class="container-90">
		<form action="" method="post" @submit.prevent="onSubmit">
			<input type="text" placeholder="标题" name="title" v-model="article.title">
			<textarea name="" id="" cols="30" rows="25" placeholder="请输入内容" name="content" v-model="article.content"></textarea>
			<button class="btn-post" @click="subme">发布</button>
		</form>
	</div>
</template>

<script>
// import MyArticle from 'components/MyArticle'

export default {
	data(){
		return{
			article:{
				title:'',
				content:''
			}
		}
	},
	methods: {
		subme() {
			if (this.article.title=='' || this.article.content==''){
				alert('标题或内容不能为空！')
				return
			}
			var formData = this.article;
			// console.log(formData);	
			this.$http({
				method: 'post',
				url: '/public/saveArticle',
				data: formData,
			}).then(() => {
				alert('发布成功！')
				location.href = '/'
			})
		}	
	},
	components: {
		// MyArticle,
	}


}
</script>

<style scoped>
input {
	border: 1px solid #777;
	height: 40px;
	margin-bottom: 20px;
}

textarea {
	border: 1px solid #777;
}

.btn-post {
	margin-top: 20px;
	padding: 10px 15px;
	border: 1px solid #42b983;
	color: #42b983;
	background-color: #fff;
	transition: all .6s;
	border-radius: 4px;
}

button:hover{
	background: #42b983;
	color: #fff;
}
</style>

