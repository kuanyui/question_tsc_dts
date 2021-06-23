build: clean
	npx tsc --outDir ./dist/ --module commonjs ./src/*.ts
clean:
	rm -rf dist/*