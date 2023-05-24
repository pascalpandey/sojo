import SelectCards from "../components/SelectCards";

function Page5() {
  const options = [
    "Less than $20/ day",
    "$21 - 25/ day",
    "$26 - 30/ day",
    "$31 - 35/ day",
    "More than $35/ day",
  ];
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">What is the basic salary you are willing to offer?</span>
      <SelectCards options={options} page={'Page5'}/>
    </div>
  );
}

export default Page5;
