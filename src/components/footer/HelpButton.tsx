import IconDiscord from "~icons/ic/baseline-discord";

export const HelpButton = () => {
  return (
    <a
      class="flex items-center gap-2 hover:underline"
      href="https://discord.com/invite/solidjs"
    >
      <IconDiscord /> Need help? Don't hesitate to ask us on Discord!
    </a>
  );
};
