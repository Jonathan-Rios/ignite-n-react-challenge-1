import { Container } from "./styles";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    onChange?.(checked);
  };

  return (
    <Container>
      <input type="checkbox" checked={checked} onClick={handleClick} />
      <span className="checkmark" />
    </Container>
  );
}
