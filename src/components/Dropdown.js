import { useState } from "react";

function Dropdown({ options }) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <select
      class="h-12 outline outline-2 outline-[#0166C0] rounded-sm"
      defaultValue={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;
