import { useState } from "react";
import logo from "./logo.png";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  const [page, setPage] = useState(1);
  const pages = [<Page1/>, <Page2/>, <Page3/>];
  return (
    <div class="h-full font-body">
      <div class="flex h-24 items-center bg-[#0166C0] pl-8">
        <img src={logo} class="h-14" />
      </div>
      <div class="relative m-10 h-[calc(100vh-11rem)]">
        <div class="mb-10 flex flex-col gap-4">
          <span class="text-[#8B8B8B]">{`Step ${page} of 7`}</span>
          <div class="h-2 w-full rounded-lg bg-[#E0E0E0]">
            <div
              style={{
                width: `${(100 * page) / 7}%`,
              }}
              class={`h-2 rounded-lg bg-[#0166C0] transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div class="w-2/5">{pages?.[page-1]}</div>
        <div class="absolute bottom-0 right-0 flex gap-8">
          {page !== 1 && (
            <button onClick={() => setPage(page - 1)} class="text-[#0166C0]">
              Previous
            </button>
          )}
          <button
            onClick={() => setPage(page < 7 ? page + 1 : page)}
            class="w-20 rounded-3xl bg-[#0166C0] p-2 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
