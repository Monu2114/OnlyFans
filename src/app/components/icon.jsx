export default function Icon(props) {
  return (
    <div className="flex h-10 items-center gap-3">
      <img
        // src={`/ui icons/${props.name}.png`}
        src={`/ui icons/${props.name}.png`}
        alt={props.name}
        className="w-5 h-5 mr-2" // TailwindCSS class for image size
      />
      <span className="text-gray-400 text-lg font-semibold tracking-wide">
        {props.name}
      </span>
    </div>
  );
}
