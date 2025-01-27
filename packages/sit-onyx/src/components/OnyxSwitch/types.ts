import type { RequiredMarkerProp } from "../../composables/required";
import type { TruncationType } from "../../types/fonts";

export type OnyxSwitchProps = RequiredMarkerProp & {
  /**
   * Whether the switch should be checked or not.
   */
  modelValue?: boolean;
  /**
   * The label of the switch.
   */
  label: string;
  /**
   * Whether to disable the switch and prevent user interaction.
   */
  disabled?: boolean;
  /**
   * Shows a loading indicator.
   */
  loading?: boolean;
  /**
   * The error message will set switch to invalid state.
   */
  errorMessage?: string;
  /**
   * If `true`, the label will be visually hidden and the `title` attribute will be set.
   * For accessibility / screen readers, the aria-label will still be set.
   */
  hideLabel?: boolean;
  /**
   * How to truncate the label if it exceeds the max width.
   */
  truncation?: TruncationType;
  /**
   * Whether to show a skeleton button.
   */
  skeleton?: boolean;
};
