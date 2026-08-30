import { scaleOrdinal } from "d3-scale";

// ── Global shared ──
export const BASE_URL = "https://catalogo.fondazionezeri.unibo.it/foto/";

export const colorScale = scaleOrdinal(
  ["accepted", "discarded"],
  ["var(--color-accepted)", "var(--color-discarded)"],
)

const VIS_MARGIN = 40;
export const VIS_VIEWBOX_WIDTH = 1000 + VIS_MARGIN * 2;
export const VIS_VIEWBOX_HEIGHT = 1000 + VIS_MARGIN * 2;
export const VIS_CX = 700;
export const VIS_CY = 500 + VIS_MARGIN;
export const VIS_NUCLEUS_RADIUS = 155;
export const VIS_DOT_RADIUS = 5;
export const VIS_MIN_ZOOM = 0.9;
export const VIS_MAX_ZOOM = 3;
