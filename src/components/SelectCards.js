import { useStore } from "../store/store";

function SelectCards({ options, page }) {
  const { state, dispatch } = useStore();

  function Card({ option }) {
    return (
      <button
        class="flex h-20 flex-row items-center gap-2 rounded-md border border-[#0166C0] p-4"
        onClick={() => dispatch({ page: page, data: option })}
      >
        <div class="h-5 w-5 rounded-full border border-neutral-300"></div>
        <span class="text-[#0166C0]">{option}</span>
      </button>
    );
  }

  function SelectedCard({ option }) {
    return (
      <button
        class="flex h-20 flex-row items-center gap-2 rounded-md border border-neutral-400 p-4 bg-[#F7FAFD]"
        onClick={() => dispatch({ page: page, data: option })}
      >
        <div class="h-5 w-5 rounded-full border-8 border-[#0166C0]"></div>
        <span class="text-[#0166C0]">{option}</span>
      </button>
    );
  }

  return (
    <div class="flex flex-col gap-4">
      {options.map((option) =>
        state[page] === option ? (
          <SelectedCard option={option} />
        ) : (
          <Card option={option} />
        )
      )}
    </div>
  );
}

export default SelectCards;
