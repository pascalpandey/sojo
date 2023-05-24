import { useStore } from "../store/store";

function Result() {
  const { state } = useStore();
  return (
    <div>
      <p class="pb-4 text-4xl">Thank you for onboarding with us</p>
      <p class="pb-4 text-xl leading-9">
        Before continuing, we need to verify your email address. Please check
        your inbox for a confirmation link,
      </p>
      <p class="text-xl leading-9">
        If you did not receive the email at
        <span class="pl-2 pr-2 text-[#0166C0] hover:underline cursor-pointer">{`${state["Page6Item1"]}`}</span>
        we can
        <span class="pl-2 text-[#0166C0] hover:underline cursor-pointer">resend it to you</span>
      </p>
    </div>
  );
}

export default Result;
