// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "晚空喵喵",
		imgurl: "hhttps://blog.twilightnya.top/assets/images/logo.jpg",
		desc: "博主的一位朋友",
		siteurl: "https://blog.twilightnya.top/",
		tags: ["Blog","Friends"],
	},
	{
		id: 2,
		title: "冬屿清",
		imgurl: "https://blog.ryofork.top/_astro/ryofork.MWd7THJS_Z1OoGM1.webp/",
		desc: "博主的一位朋友",
		siteurl: "https://blog.ryofork.top/",
		tags: ["Blog","Friends"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
