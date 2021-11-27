import { post } from "./post";
import { listen } from "./listen";

figma.showUI(__html__);

listen("create-rectangles", (count = 1) => {
  const nodes: SceneNode[] = [];
  for (let i = 0; i < count; i++) {
    const rect = figma.createRectangle();
    rect.x = i * 150;
    rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);
  }
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);

  return count;
});

figma.on("selectionchange", async () => {
  console.log("send event from plugin");
  const result = await post({ type: "eventFromPlugin", data: "test msg" });
  console.log("received from ui:", result);
});
