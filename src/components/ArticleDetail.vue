<template>
	<article>
		<header>
			<h1 class="title">{{article.title}}</h1>
			<div class="meta">
				<span class="lable">前端</span>
				<span class="lable">6.17.2017</span>
				<span class="">浏览 37</span>
			</div>
		</header>
		<section class="article">
			{{article.content}}
		</section>
	</article>
</template>

<script>
// import Sidebar from './components/NavHeader'

export default {
	data(){
		return {
			article: {}
		}
	},
	created(){
		let id = this.$route.params.id
    this.$http.get('public/article/'+id).then(res => {
    // success callback
    console.log('aaaa:'+res.data.result);
    this.article = res.data.result
    }, res => {
    // error callback
    })
  },
	props: {
		data: {
			type: Object,
			default() {
				return {

				}
			}
		},
		index: { type: Number }
	},
	components: {
		// NavHeader,
	}
}
</script>

<style scoped>
article {
	margin-bottom: 68px;
}

.title {
	font-size: 22px;
	text-align: center;
	font-weight: 500;
}

.meta {
	font-size: 13px;
	text-align: center;
	margin-top: 20px;
}

.lable::after {
	/*position: absolute;*/
	content: '.';
	color: #000;
	font-size: 30px;
	margin: 10px 3px;
}

.article {
	font-size: 16px;
	margin-top: 38px;
	line-height: 150%;
}

.seemore {
	text-align: center;
	margin: 0 auto;
	margin-top: 30px;
	width: 100px;
	border-left: 2px solid #000;
	border-right: 2px solid #000;
}
</style>

