import { useStore } from "../store/store";

function TextInput({options, page }) {
  const [title, placeholder, subtitle] = options;
  const { state, dispatch } = useStore();
  return (
    <div class="flex flex-col">
      <div class="mb-1 flex flex-col border-b-[1px] border-b-[#49454F] bg-[#F7FAFD] p-2 pl-4">
        <span class="text-[#0166C0]">{title}</span>
        <input
          class="flex flex-col bg-[#F7FAFD] outline-none"
          placeholder={placeholder}
          defaultValue={state[page]}
          onChange={(e) => dispatch({ page: page, data: e.target.value })}
        ></input>
      </div>
      <span class="pl-4">{subtitle}</span>
    </div>
  );
}

export default TextInput;
