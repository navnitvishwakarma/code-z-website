// lib/utils.js
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}