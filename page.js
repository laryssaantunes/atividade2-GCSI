const url = "https://back-end-ifms-chi.vercel.app/campi";

export default async function Home() {
  const resposta = await fetch(url, {
    next: {
      revalidate: 1,
    },
  });
  const campis = await resposta.json();

  return (
    <main>
      <h1>Home</h1>
      {Array.isArray(campis) && campis.length > 0 ? (
        campis.map((campus) => (
          <div key={campus.id}> {/* Certifique-se de que campus.id é único */}
            <p>{campus.nome_campus}</p>
          </div>
        ))
      ) : (
        <p>Nenhum campus encontrado.</p>
      )}
    </main>
  );
}
