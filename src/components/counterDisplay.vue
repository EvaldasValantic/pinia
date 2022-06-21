<script setup lang="ts">
    import { useCounterStore } from '../stores/counter';
    const counter = useCounterStore()
</script>

<template>
    <div>
        {{ counter.count }}
    </div>
</template>