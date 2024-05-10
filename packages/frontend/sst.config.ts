/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'aws-nextjs',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
		};
	},
	async run() {
		const bucket = new sst.aws.Bucket('MyBucket', {
			public: true,
		});
		new sst.aws.Nextjs('MyWeb', {
			link: [bucket],
		});
	},
});
