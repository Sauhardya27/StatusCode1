import { aliImg, anishaImg, richardImg, shanaiImg } from '../assets';
import { doctorImg } from '../assets';
import { capsule, doctorOutline, stethoscope, syringe } from '../assets';
import { featureImg_1, featureImg_2, featureImg_3, featureImg_4, featureImg_5, featureImg_6 } from '../assets';

export const cardDetails = [
	{
		id: 1,
		rating: 5,
		review: "This service is absolutely fantastic! It exceeded all my expectations.",
		avatar: aliImg,
		frontBorderColor: "border-cGoldFront",
		backBorderColor: "border-cGoldBack",
	},
	{
		id: 2,
		rating: 4,
		review: "Great experience overall, though there's some room for improvement.",
		avatar: anishaImg,
		frontBorderColor: "border-cPinkFront",
		backBorderColor: "border-cPinkBack",
	},
	{
		id: 3,
		rating: 5,
		review: "I'm thoroughly impressed! I would highly recommend this to everyone.",
		avatar: richardImg,
		frontBorderColor: "border-cGreenFront",
		backBorderColor: "border-cGreenBack",
	},
	{
		id: 4,
		rating: 3,
		review: "The service was okay, but it didn't quite meet my expectations.",
		avatar: shanaiImg,
		frontBorderColor: "border-cBlueFront",
		backBorderColor: "border-faqColor",
	},
];

export const aimBanners = [
	{
		id: 1,
		title: "Empower Yourself with Early Personalized Measures",
		description: "At HealthCure, we believe in proactive healthcare. Our platform allows you to diagnose your health condition through a series of questions, providing you with valuable insights and suggestions for preventive measures. Additionally, we offer access to qualified nutritionists and doctors who can guide you towards a healthier lifestyle.",
		imgSrc: doctorImg,
	},
	{
		id: 2,
		title: "Empower Yourself with Early Personalized Measures",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus autem modi deleniti iste repudiandae officiis officia itaque vero illo, reprehenderit eveniet odio hic veritatis! Provident quis maiores blanditiis id, iusto praesentium asperiores? Blanditiis ex illo, eaque expedita sed provident repudiandae cupiditate aliquid quae harum. Cum odit voluptas dolore sequi impedit est, ab rerum asperiores corrupti dolores non!",
		imgSrc: doctorImg,
	},
	{
		id: 3,
		title: "Empower Yourself with Early Personalized Measures",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit impedit consequatur, delectus unde sunt ea exercitationem, nulla ducimus, earum ipsam tempora dicta rerum eaque.",
		imgSrc: doctorImg,
	},
];

export const guide = [
	{
		id: 1,
		title: "Kickstart Your Health Journey",
		description: "Uncover your potential health risks with our personalized quiz.",
		cardColor: "bg-cGoldBack",
		cardLogo: stethoscope,
	},
	{
		id: 2,
		title: "Find Your Doctor/ Heath Expert",
		description: "Get expert care and guidance from top-rated doctors.",
		cardColor: "bg-cGreenBack",
		cardLogo: doctorOutline,
	},
	{
		id: 3,
		title: "Your Health, Your Data",
		description: "Stay informed by accessing and tracking your health records.",
		cardColor: "bg-cPinkBack",
		cardLogo: syringe,
	},
	{
		id: 4,
		title: "Apply As A Health Expert",
		description: "Are you a certified nutritionist or dietitian? Apply now to connect with clients.",
		cardColor: "bg-blueCard",
		cardLogo: capsule,
	},
];

export const faqItems = [
	{
		id: 1,
		title: "How does it work?",
		description: "Our platform uses a series of questions to diagnose your health condition based on your symptoms. It then suggests possible diseases you may encounter in the future and provides preventive measures you can take as an individual.",
	},
	{
		id: 2,
		title: "How does it work?",
		description: "Our platform uses a series of questions to diagnose your health condition based on your symptoms. It then suggests possible diseases you may encounter in the future and provides preventive measures you can take as an individual.",
	},
	{
		id: 3,
		title: "How does it work?",
		description: "Our platform uses a series of questions to diagnose your health condition based on your symptoms. It then suggests possible diseases you may encounter in the future and provides preventive measures you can take as an individual.",
	},
	{
		id: 4,
		title: "How does it work?",
		description: "Our platform uses a series of questions to diagnose your health condition based on your symptoms. It then suggests possible diseases you may encounter in the future and provides preventive measures you can take as an individual.",
	},
];

export const features1 = [
	{
		id: 1,
		logo: featureImg_1,
		title: 'Personalized AI-Driven Health Assessment',
	},
	{
		id: 2,
		logo: featureImg_2,
		title: 'Access to Certified Nutritionists & Dietitians',
	},
	{
		id: 3,
		logo: featureImg_3,
		title: 'Apply as a health expert and guide the users',
	},
];

export const features2 = [
	{
		id: 1,
		logo: featureImg_4,
		title: 'Fill the form, get your profile ready, add your bio',
	},
	{
		id: 2,
		logo: featureImg_5,
		title: 'Get approved by the team of experts, within 24 Hours.',
	},
	{
		id: 3,
		logo: featureImg_6,
		title: 'Get hired by the users, and earn your value.',
	},
];

export const footerLinks = [
	{
		id: 1,
		links: [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "About Us",
				link: "/",
			},
			{
				name: "Hire Experts",
				link: "/",
			},
			{
				name: "Apply as Expert",
				link: "/",
			},
			{
				name: "Log in",
				link: "/",
			},
			{
				name: "Log Out",
				link: "/",
			},
		],
	},
	{
		id: 2,
		links: [
			{
				name: "LinkedIn",
				link: "/",
			},
			{
				name: "Instagram",
				link: "/",
			},
			{
				name: "Facebook",
				link: "/",
			},
			{
				name: "Youtube",
				link: "/",
			},
			{
				name: "Twitter",
				link: "/",
			},
		],
	},
];