/// <reference path=".astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Alpine } from 'alpinejs';

declare global {
    interface Window {
        Alpine: Alpine;
    }
}
