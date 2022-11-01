import dotenv from 'dotenv'
dotenv.config()

const apiToken = process.env.OPENAI_API_KEY
if (!apiToken) throw new Error('Missing OPENAI_API_KEY')

const AutoCode = new Proxy(
	{},
	{
		get: (_, name: string) => {
			return async (...args: unknown[]) => {
				const response = await fetch('https://api.openai.com/v1/completions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${apiToken}`,
					},
					body: JSON.stringify({
						suffix: '\n}',
						temperature: 0,
						max_tokens: 512,
						model: 'code-davinci-002',
						prompt: `// Path: src/index.js\n\n${args.map(
							(arg, i) => `// typeof arg${i + 1} == "${typeof arg}"\n`
						)}function ${name}(${args.map((_, i) => `arg${i + 1},`)}) {\n`,
					}),
				}).then(res => res.json() as unknown as { choices: [{ text: string }] })

				return new Function(...args.map((_, i) => `arg${i + 1}`), response.choices[0].text)(...args)
			}
		},
	}
) as Record<string, Function>

export default AutoCode
