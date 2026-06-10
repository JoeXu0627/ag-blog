export type EventEntry = {
  /** YYYY-MM-DD */
  date: string;
  mode: "online" | "offline";
  title: Record<"zh-CN" | "en", string>;
  /** 相关链接（回放、活动页等），可选 */
  link?: string;
};

// 新参加活动后在数组开头加一条即可
export const events: EventEntry[] = [
  {
    date: "2026-06-05",
    mode: "offline",
    title: {
      "zh-CN": "AI 创业联盟社群·字节离职员工小聚",
      en: "AI Startup Alliance community: ByteDance alumni meetup",
    },
  },
  {
    date: "2026-04-24",
    mode: "online",
    title: {
      "zh-CN": "跟 Yuki 的直播：聊 Agent 到底该怎么上桌",
      en: "Livestream with Yuki: how AI agents actually earn a seat at the table",
    },
    link: "/ag-blog/posts/agents-at-the-table/",
  },
];
