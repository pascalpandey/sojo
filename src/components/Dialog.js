import { useStore } from "../store/store";

function Dialog({ close }) {
  const { state } = useStore();
  return (
    <div class="absolute flex w-screen h-screen justify-center">
      <div
        class="absolute z-10 h-full w-full bg-slate-200 bg-opacity-70 cursor-pointer"
        onClick={() => close()}
      ></div>
      <div class="absolute z-20 h-fit w-3/12 self-center rounded-lg bg-white shadow-md flex flex-col gap-2 p-8">
        <span class="text-3xl">Result</span>
        {Object.values(state).map((ans, i) => (
          <div class="flex">
            <span class="pr-6 whitespace-nowrap">{i} :</span>
            <span>{ans ? ans : 'Not filled yet'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dialog;
