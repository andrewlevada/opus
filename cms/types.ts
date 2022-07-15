export interface Activity {
	id: string;
	title: Localized<string> | string;
	short?: Localized<string>;
	description: Localized<string>;
	tags: Tag[];

	// TODO: Make dates validatable
	started: string;
	ended?: string;

	isTestList?: boolean;
	hidden?: boolean;

	links?: {
		label: Localized<string> | string;
		url: string;
	}[];
}

export type Tag = SkillTag | EnvTag | StackTag;
type SkillTag = "code" | "ux" | "product" | "design";
type EnvTag = "web" | "game" | "irl" | "chat-bot";
type StackTag = "typescript" | "javascript" | "csh" | "unity" | "figma" | "adobe" | "java";

export type Localized<T> = {
	en: T;
	ru: T;
}
