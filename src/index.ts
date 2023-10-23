export default {
	async fetch(request: Request, ctx: ExecutionContext): Promise<Response> {
		const clientIP = request.headers.get("CF-Connecting-IP"); // https://developers.cloudflare.com/workers/examples/conditional-response
		console.log(clientIP)
		let rickroll = new Request('https://bomberfish.ca/misc/rickroll.mp4'); // trolled, idiot
		return await fetch(rickroll);
	},
};
