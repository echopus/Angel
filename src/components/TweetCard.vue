<script setup>
import { computed, ref } from 'vue'
import felixAvatar from '@/assets/images/felix.webp'

const props = defineProps({
  text: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  likes: { type: String, default: '0' },
  truncateAt: { type: Number, default: 220 },
})

const expanded = ref(false)

const needsTruncation = computed(() => props.text.length > props.truncateAt)

const displayText = computed(() => {
  if (!needsTruncation.value || expanded.value) return props.text
  return props.text.slice(0, props.truncateAt).trimEnd() + '…'
})
</script>

<template>
  <article class="tweet-card">
    <header class="tweet-card__header">
      <img
        :src="felixAvatar"
        alt="Felix Rivera"
        class="tweet-card__avatar"
        width="48"
        height="48"
        loading="lazy"
      />
      <div class="tweet-card__meta">
        <div class="tweet-card__name-row">
          <span class="tweet-card__name">Felix Rivera</span>
          <svg class="tweet-card__verified" viewBox="0 0 22 22" aria-label="Verified account" role="img">
            <path
              fill="currentColor"
              d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.293 2.072 2.072 4.4-4.794 1.347 1.246z"
            />
          </svg>
        </div>
        <span class="tweet-card__handle">@Angelluisr</span>
      </div>
    </header>

    <p class="tweet-card__body">
      {{ displayText }}
      <button
        v-if="needsTruncation && !expanded"
        type="button"
        class="tweet-card__show-more"
        @click="expanded = true"
      >
        Show more
      </button>
    </p>

    <time class="tweet-card__time" :datetime="date">{{ time }} · {{ date }}</time>

    <footer class="tweet-card__actions">
      <span class="tweet-card__action tweet-card__action--likes">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 4.092 1.203 5.352 2.426 1.26-1.223 3.062-2.426 5.352-2.426 2.878 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
          />
        </svg>
        {{ likes }}
      </span>
      <span class="tweet-card__action tweet-card__action--reply">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
          />
        </svg>
        Reply
      </span>
      <span class="tweet-card__action tweet-card__action--copy">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.36 5.64h-12v12h12v-12zm1.5 0v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4.86 17.64v-12A1.5 1.5 0 0 1 6.36 3.64h12A1.5 1.5 0 0 1 19.86 5.64zM15.36 1.5h-9A1.5 1.5 0 0 0 4.86 3v.75h13.5V3a1.5 1.5 0 0 0-1.5-1.5h-1.5z"
          />
        </svg>
        Copy link
      </span>
    </footer>
  </article>
</template>

<style scoped>
.tweet-card {
  background: #fff;
  border: 1px solid #eff3f4;
  border-radius: 12px;
  padding: 12px 16px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #0f1419;
  box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 1px;
}

.tweet-card__header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 4px;
}

.tweet-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.tweet-card__meta {
  min-width: 0;
  padding-top: 2px;
}

.tweet-card__name-row {
  display: flex;
  align-items: center;
  gap: 2px;
}

.tweet-card__name {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
}

.tweet-card__verified {
  width: 18px;
  height: 18px;
  color: #1d9bf0;
  flex-shrink: 0;
}

.tweet-card__handle {
  display: block;
  font-size: 15px;
  line-height: 20px;
  color: #536471;
}

.tweet-card__body {
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.tweet-card__show-more {
  display: inline;
  padding: 0;
  border: none;
  background: none;
  color: #1d9bf0;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
}

.tweet-card__show-more:hover {
  text-decoration: underline;
}

.tweet-card__time {
  display: block;
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 20px;
  color: #536471;
}

.tweet-card__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid #eff3f4;
}

.tweet-card__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  line-height: 16px;
  color: #536471;
}

.tweet-card__action svg {
  width: 18px;
  height: 18px;
}

.tweet-card__action--likes {
  color: #f91880;
}

.tweet-card__action--likes svg {
  color: #f91880;
}

.tweet-card__action--reply svg {
  color: #1d9bf0;
}
</style>
