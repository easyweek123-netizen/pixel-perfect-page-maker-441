import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TeleYaar — Your phone buddy" },
    { name: "description", content: "A friendly retro telephone hotline in your browser." },
    { property: "og:title", content: "TeleYaar — Your phone buddy" },
    { property: "og:description", content: "A friendly retro telephone hotline in your browser." },
  ] }),
  component: Index,
});
