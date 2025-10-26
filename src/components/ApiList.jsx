import React, { useEffect, useState } from 'react';

const PAGE_SIZE = 5;

const ApiList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setItems(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || 'Failed to fetch');
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  const filtered = items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-3">Posts (API)</h2>

      <div className="mb-3">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search posts..."
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <ul className="space-y-2 max-h-64 overflow-auto">
            {pageItems.map((p) => (
              <li key={p.id} className="p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.body.slice(0, 80)}...</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">Page {page} / {totalPages}</div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApiList;
