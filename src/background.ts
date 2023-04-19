// import { getSummary } from '@node-gptcommit/summarize'
// 监听收到通讯，发起总结请求
chrome.runtime.onMessage.addListener(async (request: any, sender: any, sendResponse: any) => {
    const { type = 'fetch', data } = request;
    // if (type === 'summary') {
    //     getSummary(data).then(res=>{
	// 					sendResponse(res);
	// 			})
    // }
}); 