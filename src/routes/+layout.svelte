<script lang="ts">
    import "../app.css";

    import { inject } from "@vercel/analytics";
    import { browser, dev } from "$app/environment";

    import MainHead from "$lib/components/MainHead.svelte";

    interface Props {
        children?: import("svelte").Snippet;
    }

    const { children }: Props = $props();

    if (browser) inject({ mode: dev ? "development" : "production" });
</script>

<MainHead title="balegre." description="personal portfolio." />

<main
    class="min-h-screen bg-zinc-100 antialiased scroll-smooth flex items-center justify-center"
>
    {@render children?.()}
</main>
