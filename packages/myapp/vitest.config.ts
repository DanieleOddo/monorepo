import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        setupFiles: './test/setup.ts',
        environment: 'jsdom',
        reporters: ['verbose'],
        coverage: {
            all: true,
            reporter: ['text', 'html', 'lcov'],
            include: ['**/src/**/*.{js,jsx,ts,tsx}'],
            exclude: [
                '**/src/main.{js,jsx,ts,tsx}',
                '**/*.types.{ts,tsx}',
                '**/*.test.{js,jsx,ts,tsx}',
                '**/src/vite-env*',
            ],
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },

    },
})