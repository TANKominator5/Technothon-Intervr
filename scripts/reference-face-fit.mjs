// Fit both lids and eyeballs to the portrait's almond-shaped eye openings.
// Apply this to bind positions and every expression to retain blink/gaze fit.
export function fitReferenceEyes([x, y, z]) {
  const centerX = x < 0 ? -0.03315 : 0.03315;
  const dx = x - centerX, dy = y - 1.65103;
  const influence = Math.exp(-((dx / 0.026) ** 4) - ((dy / 0.023) ** 4))
    * Math.max(0, Math.min(1, (z - 0.055) / 0.055));
  return [x + dx * 0.25 * influence, y + dy * 0.12 * influence, z];
}
