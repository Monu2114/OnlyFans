import Icon from "./components/icon";
const components = [
  "Home",
  "Notifications",
  "Messages",
  "Collections",
  "Subscriptions",
  "Add card",
  "My profile",
  "More",
];
export default function Navbar() {
  return (
    <div className="flex flex-col bg-white gap-2">
      {components.map((icon, index) => {
        return <Icon key={index} name={icon} />;
      })}
    </div>
  );
}
