function listen(eventType, cb) {
  // 收到消息后调用 cb 处理
  window.onmessage = (event) => {
    if (event.type === eventType) {
      const result = cb(event.data);
      const callbackData = {
        type: `${eventType}-callback`,
        data: result,
      };

      // 处理完成后将结果发送回去
      parent.postMessage(callbackData);
    }
  };
}
