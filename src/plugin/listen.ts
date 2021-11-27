export function listen(
  eventType: string,
  cb: (data: PluginEvent["data"]) => any
) {
  // 收到消息后调用 cb 处理
  figma.ui.onmessage = (event: PluginEvent) => {
    if (event.type === eventType) {
      console.log("---", event);
      const result = cb(event.data);
      const callbackData = {
        type: `${eventType}-callback`,
        data: result,
      };
      // 处理完成后将结果发送回去
      figma.ui.postMessage(callbackData);
    }
  };
}
