import { CardProjetos } from "../components/CardProjetos";

export function Projetos() {
  return (
    <>
      <div className="h-screen max-w-[90%] mx-auto mt-20">
        <h2 className="text-4xl font-bold mb-7 max-w-5xl mx-auto">Meus Projetos</h2>
        <CardProjetos />
      </div>
    </>
  );
}
