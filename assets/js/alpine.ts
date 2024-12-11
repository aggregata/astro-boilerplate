import Alpine from 'alpinejs';

const components = import.meta.glob('./alpine/**/*.ts');

for (const path in components) {
    const { default: module } = (await components[path]()) as any;
    Alpine.data(module.name.toLowerCase(), module);
}

if (import.meta.DEV) {
    window.Alpine = Alpine;
}

Alpine.start();
