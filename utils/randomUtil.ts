export function generateUsername() {
  const random = Math.floor(Math.random() * 100000);
  return `user${random}`;
}