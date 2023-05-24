import TextInput from "../components/TextInput";

function Page2() {
  const [title, placeholder, subtitle] = ['Number of Workers', '5', 'Enter number of wokers']
  return (
    <div class="flex flex-col gap-6">
      <span class="text-4xl">How many workers are you looking to hire?</span>
      <TextInput title={title} placeholder={placeholder} subtitle={subtitle}/>
    </div>
  );
}

export default Page2;
