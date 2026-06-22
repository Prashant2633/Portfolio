import { ScrollSmoother } from "gsap/ScrollSmoother";

export let smoother: ScrollSmoother | null = null;

export function setSmoother(instance: ScrollSmoother) {
  smoother = instance;
}
