self.addEventListener("install", (event) => {
  console.log("Service Worker installed", event);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated", event);
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker fetching:", event);
});
