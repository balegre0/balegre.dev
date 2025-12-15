<script lang="ts">
    import { page } from "$app/state";

    interface MainHeadProps {
        title?: string;
        description?: string;
    }

    const { title, description }: MainHeadProps = $props();

    const canonicalURL = $derived(
        page.url.origin
            ? new URL(page.url.pathname, page.url.origin).href
            : page.url.pathname,
    );
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />

    <!-- Open Graph -->
    <meta name="og:type" content="website" />
    <meta name="og:url" content={canonicalURL} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
</svelte:head>
