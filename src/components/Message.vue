<template>
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">{{ message.title }}</h5>
    <p class="card-text">{{ message.body }}</p>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        message: Object
    }
}
</script>
