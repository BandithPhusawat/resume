type Props = {
  textButton: string;
  class: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Button(props: Props) {
  return (
    <div className={props.class} onClick={props.onClick}>
      {props.textButton}
    </div>
  );
}
