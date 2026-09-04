import {
  center,
  rankScale,
} from "@/components/work/attributions/debateVis/constants";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

const textX = rankScale(12.5);
const textArrowX = rankScale(12.8);

export default function AxisLegend() {
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const triggerRef = useRef<SVGGElement>(null);

  const handleMouseEnter = () => {
    if (!triggerRef.current) return;
    const bbox = triggerRef.current.getBoundingClientRect();
    setTooltipPos({ x: bbox.x + bbox.width / 2, y: bbox.y });
  };

  return (
    <g
      className="vis-arcs-legend"
      transform={center}
      textAnchor="end"
      dominantBaseline="middle"
      fill="var(--color-text)"
    >
      <text x={textX} y={rankScale(13)}>
        Objective evidence
      </text>
      <text x={textX} y={rankScale(14.5)}>
        F. Zeri opinion
      </text>
      <text x={textArrowX} y={rankScale(16.7)}>
        More authoritative source
      </text>
      <text x={textArrowX} y={rankScale(23.3)}>
        Less authoritative source
      </text>
      <line
        x1={textX}
        y1={rankScale(16)}
        x2={textX}
        y2={rankScale(24)}
        stroke="var(--color-text)"
        strokeWidth={1.5}
        markerEnd="url(#arrow)"
        markerStart="url(#arrow)"
      />
      <g
        className="axis-info-trigger"
        pointer-events="all"
        ref={triggerRef}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => setTooltipPos(null)}
      >
        <circle
          cx={textArrowX * 1.5}
          cy={rankScale(20)}
          r={13}
          fill="none"
          stroke="var(--color-text)"
          strokeWidth={1.5}
        />
        <text
          x={textArrowX * 1.5}
          y={rankScale(20)}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--color-text)"
        >
          ?
        </text>
      </g>
      {tooltipPos &&
        createPortal(
          <div
            className="ranking-explanation-tooltip"
            style={{
              position: "fixed",
              left: tooltipPos.x + 40,
              top: tooltipPos.y - 60,
            }}
          >
            <h4>About source authoritativeness</h4>
            <p className="ranking-explanation-p">
              For each <span className="keyword">attribution</span>, the
              visualisation positions its{" "}
              <span className="keyword">
                sources by how authoritative they are
              </span>{" "}
              (the closer to the centre, the more authoritative). To do this, we
              used a <span className="keyword">ranking</span> built together
              with the Fondazione Zeri, which separates{" "}
              <span className="keyword">objective evidence</span> from{" "}
              <span className="keyword">subjective attributions</span>. Among
              subjective attributions,{" "}
              <span className="keyword">opinions by Federico Zeri</span> himself
              carry the most weight.
            </p>
            <p className="ranking-explanation-p ranking-explanation-note">
              Note that the <span className="keyword">ranking</span> itself is
              an <span className="keyword">act of interpretation</span>, built
              to make attributions comparable, not an objective measure of an
              attribution's truth.
            </p>
            <p className="ranking-explanation-p">
              Roughly ordered from most to least authoritative:
            </p>

            <div className="reason-type-groups">
              <div className="reason-type-cnt">
                <p className="reason-type-item-label">Objective evidence</p>
                <div className="objective-list-cnt">
                  <p>
                    Artist's signature; <br />
                    Documentation
                  </p>
                </div>
              </div>

              <div className="reason-type-cnt">
                <p className="reason-type-item-label">
                  Subjective attributions
                </p>
                <div className="reason-type-list-cnt">
                  <div className="zeri-list-cnt">
                    <p>F. Zeri attribution; F. Zeri bibliography</p>
                    <p>
                      F. Zeri note on the photograph; F. Zeri classification
                    </p>

                    {/* <p>F. Zeri attribution</p>
                        <p>F. Zeri bibliography</p>
                        <p>F. Zeri note on the photograph</p>
                        <p>F. Zeri classification</p> */}
                  </div>
                  <div className="subjective-list-cnt">
                    <p>Bibliography</p>
                    <p>Archival classification</p>
                    <p>Scholar's attribution</p>
                    <p>
                      Scholar's note on the photograph; Sigla; Museum
                      attribution; Inscription
                    </p>
                    <p>
                      Collection attribution; Traditional attribution; Auction
                      attribution, Market attribution
                    </p>
                    <p>Anonymous note on the photograph; Stylistic analysis</p>
                    <p>False signature; Caption on photograph; Other</p>
                    <p>None</p>

                    {/* <p>Bibliography</p>
                        <p>Archival classification</p>
                        <p>Scholar's attribution</p>
                        <p>Scholar's note on the photograph</p>
                        <p>Sigla</p>
                        <p>Museum attribution</p>
                        <p>Inscription</p>
                        <p>Collection attribution</p>
                        <p>Auction attribution</p>
                        <p>Traditional attribution</p>
                        <p>Market attribution</p>
                        <p>Anonymous note on the photograph</p>
                        <p>Stylistic analysis</p>
                        <p>False signature</p>
                        <p>Caption on photograph</p>
                        <p>Other</p>
                        <p>None</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </g>
  );
}
