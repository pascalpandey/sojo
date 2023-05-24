import TextInput from "../components/TextInput";

function Page2() {
  const options = [
    "Number of Workers",
    "5",
    "Enter number of wokers",
  ];
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">How many workers are you looking to hire?</span>
      <TextInput
        options={options}
        page={"Page2"}
      />
    </div>
  );
}

export default Page2;
