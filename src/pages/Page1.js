import Dropdown from "../components/Dropdown";

function Page1() {
  const options = [
    "Welder",
    "Plumbing & pipe fitter",
    "Steel fitter",
    "Electrical wiring technician",
    "Excavator operator",
    "Rigger/Signalman",
    "General worker",
    "Lifting supervisor",
    "Safety coordinator",
    "Driver",
  ];
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">What type of worker are you looking for?</span>
      <span class="text-xl">Onboard with us and start finding workers to hire</span>
      <Dropdown options={options}/>
    </div>
  );
}

export default Page1;
