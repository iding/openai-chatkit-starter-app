import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const LOCALE = "th-TH";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "ปรึกษาปัญหาผิว",
    prompt: "ปรึกษาปัญหาผิว",
    icon: "circle-question",
  },
  {
    label: "สอบถามข้อมูลสินค้า",
    prompt: "สอบถามข้อมูลสินค้า",
    icon: "circle-question",
  },
  {
    label: "สั่งซื้อสินค้า",
    prompt: "สั่งซื้อสินค้า",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "สอบถามข้อมูล...";

export const GREETING = "สอบถามข้อมูลอะไรดีค่ะ?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
 
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
