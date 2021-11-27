function post(event) {
  return new Promise((resolve, reject) => {
    // 触发事件
    parent.postMessage({ pluginMessage: event });
    // 监听事件回调处理结果
    window.onmessage = (cbEvent) => {
      if (cbEvent.type === `${event.type}-callback`) {
        resolve(cbEvent.data);
      }
    };
  });
}
