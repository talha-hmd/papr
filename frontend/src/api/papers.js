// papers.js -> API layer for fetching papers data

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Raw fetcher (handles HTTP+JSON errors)
async function getJSON(url) {
    const res = await fetch(url, { headers: { "Accept": "application/json" } });
    if (!res.ok) {
        const text = await res.text().catch(() => "");
        // propagate a readable error
        throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
    }
    return res.json();
}

/**
 * Fetch server data and normalize it to your UI shape:
 * { s: [...], w: [...], meta: {...}, error: "" }
 * Each item in s/w becomes: { paper, variant, types, links }
 */
export async function fetchPapers(subject, year) {
    const url = `${BASE_URL}/api/papers/${subject}/${year}/`;
    const res = await fetch(url);
    if (!res.ok) {
        // This will trigger react-query's isError (so ErrorPage will show)
        throw new Error(`Failed to fetch papers (${res.status})`);
    }

    const apiData = await res.json();

    // The API wraps everything in "subjects" array
    const node = apiData.subjects?.[0];
    if (!node) {
        return { s: [], w: [], meta: null, error: "No data found" };
    }

    const flattenSession = (sessionObj) => {
        if (!sessionObj?.papers) return [];
        const out = [];
        Object.entries(sessionObj.papers).forEach(([paper, paperObj]) => {
            Object.entries(paperObj.variants || {}).forEach(([variant, vObj]) => {
                const links = vObj.doc_types || {};
                out.push({
                    paper,
                    variant,
                    types: Object.keys(links),
                    links,
                });
            });
        });
        return out;
    };

    return {
        s: flattenSession(node.sessions?.s),
        w: flattenSession(node.sessions?.w),
        meta: {
            subject_name: node.subject_name,
            subject_code: node.subject_code,
            year: node.year
        },
        error: ""
    };
}
