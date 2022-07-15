import { Activity } from "../../cms/types";

export default [
	{
		id: "sapientia-temporis-bot",
		title: "Sapientia Temporis Bot",
		short: {
			en: "This telegram bot helps students and teachers in my school get an up-to-date schedule for each day in the most convenient way possible.",
			ru: "Телеграм бот, помогающий учащимся и учителям моей школы получать актуальное расписание наиболее удобным способом."
		},
		description: {
			en: `More than 350 total users (out of ~800 students in my school)
Reached 100 DAU with 250 MAU
Reached PMF: 38% would be very disappointed if they could no longer use bot`,
			ru: `Более 350 пользователей (из ~ 800 учеников моей школы)
При этом 100 DAU с 250 MAU
Достигнут PMF: 38% были бы очень разочарованы, если бы больше не могли использовать бота`
		},
		tags: ["code", "product", "chat-bot", "typescript"],

		started: "September 2021",
		ended: "April 2022",

		isTestList: true,

		links: [{
			label: {
				en: "Telegram Bot",
				ru: "Телеграм бот"
			},
			url: "https://t.me/sapientia_temporis_bot"
		}]
	}, {
		id: "Crew Street",

	}
] as Activity[];
