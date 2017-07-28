<template>
	<article>
		<header>
			<h1 class="title">前端自动化测试探索</h1>
			<div class="meta">
				<span class="lable">前端</span>
				<span class="lable">6.17.2017</span>
				<span class="">浏览 37</span>
			</div>
		</header>
		<section class="article">
			随着屏幕的大小变换，内容区域的元素会匹配屏幕重新布局，就是我们说的自适应效果。我们在.col列中追加class类就可以实现自适应效果。如超小屏幕(xs)、超大屏幕(xl)。栅格系统首先会匹配移动手机版小屏幕，所以每个.col都需要一个class如：.xs-*，这样的话如果大屏幕的类没有设置，它就会使用这个.xs-*。
			<p>
				本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 首先本文不会探讨
			</p>
			单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。
		</section>
	</article>
</template>

<script>
// import Sidebar from './components/NavHeader'

export default {
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

