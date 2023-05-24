function TextInput({ title, placeholder, subtitle }) {
  return (
    <div class="flex flex-col">
      <div class="mb-2 flex flex-col border-b-[1px] border-b-[#49454F] bg-[#F7FAFD] p-3">
        <span class="text-[#0166C0]">{title}</span>
        <input
          class="flex flex-col bg-[#F7FAFD] outline-none"
          placeholder={placeholder}
        ></input>
      </div>
      <span class="pl-3">{subtitle}</span>
    </div>
  );
}

export default TextInput;
