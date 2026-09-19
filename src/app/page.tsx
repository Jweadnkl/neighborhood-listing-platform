export default function Home() {
  const features = [
    { title: "Listings", desc: "Browse homes and rentals posted by neighbors." },
    { title: "Neighborhood Sponsors", desc: "Local businesses that support the community." },
    { title: "Voice Help", desc: "Hands-free help for finding the right place." },
  ];
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Neighborhood Listing Platform</h1>
      <p className="mt-2 text-gray-600">
        A simple platform connecting neighbors with listings, local sponsors, and voice assistance.
      </p>
      <section aria-label="Features" className="mt-8 grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="rounded-lg border p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{f.title}</h2>
            <p>{f.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}