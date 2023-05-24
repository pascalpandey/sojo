import TextInput from "../components/TextInput";

function Page6() {
  const options = [
    ["Company Email", "Raja@gmail.com", "Enter an email"],
    ["Company Name", "Raja Ptd Ltd", "Enter company name"],
    ["Company UEN", "202077463H", "Enter UEN"],
    ["Company Contact Number", "83728237", "Enter a contact number"],
  ];
  return (
    <div>
      <span class="text-4xl ">Company Details</span>
      <div class="mb-4 flex flex-col gap-2 pt-4">
        <TextInput options={options[0]} page={"Page6Item1"} />
        <TextInput options={options[1]} page={"Page6Item2"} />
        <TextInput options={options[2]} page={"Page6Item3"} />
        <TextInput options={options[3]} page={"Page6Item4"} />
      </div>
      <div class="pt-2">
        <div class="flex flex-row gap-3">
          <input type="checkbox" />
          <span>Terms, Services & Privacy</span>
        </div>
        <div class="pl-6 pt-1">
          <span class="text-[#8B8B8B] text-sm">
            By using this website, you agree to our terms of service and privacy
            policy, which includes providing certain personal information that
            will be collected and used in accordance with the policy and
            safeguarded by appropriate security measures.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page6;
