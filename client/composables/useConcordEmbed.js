export const useConcordEmbed = () => {
  const route = useRoute()

  return computed(() => route.query.embed === 'concord')
}
