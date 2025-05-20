// Fungsi untuk mencatat waktu
function logPerformance(metric, value) {
    console.log(`${metric}: ${value.toFixed(2)}ms`);
}

// 1. Page Load Time
window.addEventListener('load', () => {
    const loadTime = performance.now();
    logPerformance("Page Load Time", loadTime);
});

// 2. First Contentful Paint (FCP)
new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
        logPerformance("First Contentful Paint (FCP)", entry.startTime);
    }
}).observe({ type: 'paint', buffered: true });

// 3. Time to Interactive (TTI) - Simulasi sederhana
let tti = 0;
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
            tti = entry.startTime;
        }
        if (entry.entryType === 'longtask') {
            tti += entry.duration;
        }
    }
    logPerformance("Time to Interactive (TTI)", tti);
});
observer.observe({ entryTypes: ['paint', 'longtask'] });

// 4. Total Blocking Time (TBT)
let tbt = 0;
new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntriesByType('longtask')) {
        if (entry.duration > 50) {
            tbt += entry.duration - 50;
        }
    }
    logPerformance("Total Blocking Time (TBT)", tbt);
}).observe({ entryTypes: ['longtask'] });

// 5. Cumulative Layout Shift (CLS)
let cls = 0;
new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
            cls += entry.value;
        }
    }
    logPerformance("Cumulative Layout Shift (CLS)", cls * 1000);
}).observe({ type: 'layout-shift', buffered: true });