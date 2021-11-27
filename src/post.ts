export function post(event: PluginEvent) {
  return new Promise((resolve) => {
    // 触发事件
    figma.ui.postMessage(event);

    // 监听处理结果
    figma.ui.onmessage = (cbEvent: PluginEvent) => {
      if (cbEvent.type === `${event.type}-callback`) {
        resolve(cbEvent.data);
      }
    };
  });
}
