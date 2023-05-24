import { useStore } from "../store/store";

function Dropdown({ options, page }) {
  const { state, dispatch } = useStore();
  return (
    <select
      class="h-12 rounded-sm outline outline-2 outline-[#0166C0]"
      defaultValue={state[page]}
      onChange={(e) => dispatch({ page: page, data: e.target.value })}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;
