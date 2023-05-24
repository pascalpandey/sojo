import { useState } from "react";
import logo from "./logo.png";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Dialog from "./components/Dialog";

function App() {
  const [page, setPage] = useState(1);
  const [showResult, setShowResult] = useState(false)
  const pages = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
    <Page6 />,
    <Page7 />
  ];
  return (
    <div class="h-full font-body">
      {showResult && <Dialog close={setShowResult}/>}
      <div class="flex h-20 items-center bg-[#0166C0] pl-8">
        <img src={logo} class="h-14" />
      </div>
      <div class="relative m-10 mb-5 mt-7 h-[calc(100vh-8.5rem)]">
        <div class="mb-7 flex flex-col gap-4">
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
        <div class="w-[620px]">{pages?.[page - 1]}</div>
        <div class="absolute bottom-0 right-0 flex gap-8">
          {page !== 1 && (
            <button onClick={() => setPage(page - 1)} class="text-[#0166C0]">
              Previous
            </button>
          )}
          {page !== 7 ? (
            <button
              onClick={() => setPage(page < 7 ? page + 1 : page)}
              class="w-20 rounded-3xl bg-[#0166C0] p-2 text-white"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setShowResult(true)}
              class="w-20 rounded-3xl bg-[#0166C0] p-2 text-white"
            >
              Result
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
