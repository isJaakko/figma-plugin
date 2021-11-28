export function post(event: PluginEvent) {
  return new Promise(resolve => {
    // 触发事件
    parent.postMessage({ pluginMessage: event, pluginId: '*' }, '*');
    // 监听事件回调处理结果
    window.onmessage = ({ data: { pluginMessage: cbEvent } }) => {
      if (cbEvent.type === `${event.type}-callback`) {
        resolve(cbEvent.data);
      }
    };
  });
}
