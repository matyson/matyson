"use client";

import { useAnimatedText } from "../_hooks/use-animated-text";

type AnimatedProps = {
  text: string;
};

export function Animated(props: AnimatedProps) {
  const animated = useAnimatedText(props.text);

  return <>{animated}</>;
}
