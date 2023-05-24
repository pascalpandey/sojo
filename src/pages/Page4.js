import SelectCards from "../components/SelectCards";

function Page4() {
  const options = [
    "Basic skill (SEC, SEC(K), SEC(K) higher skill certificates)",
    "Higher skill (CoreTrade, Multi-skill certificates with 4 years' experience)",
    "No preference",
  ];
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">What type of worker are you looking for?</span>
      <SelectCards options={options} page={"Page4"} />
    </div>
  );
}

export default Page4;
