import SelectCards from "../components/SelectCards";

function Page3() {
  const options = [
    "Less than 3 years (cannot qualify for Man Year Entitlement waiver)",
    "More than 3 years (can qualify for Man Year Entitlement waiver)",
    "No preference",
  ];
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">How many years of experience do you prefer in the workers?</span>
      <SelectCards options={options} page={'Page3'}/>
    </div>
  );
}

export default Page3;
