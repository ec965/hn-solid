import { Router } from "solid-app-router";
import { Paths } from "./Paths";
import { Nav, NavItem } from "./lib/Nav";

const Links: NavItem[] = [
  {
    url: "/new",
    name: "new",
  },
  {
    url: "/best",
    name: "best",
  },
  {
    url: "/ask",
    name: "ask",
  },
  {
    url: "/show",
    name: "show",
  },
  {
    url: "/job",
    name: "jobs",
  },
];

export function App() {
  return (
    <Router>
      <Nav links={Links} />
      <Paths />
    </Router>
  );
}