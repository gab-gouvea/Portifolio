import Button from "./Button";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-6 max-w-5xl mx-auto">
        <div className="font-logo text-green-700 text-4xl">
          <Button nome="GG." href="/" />
        </div>
        <nav>
          <ul className="flex gap-10 text-texts font-texto">
            <li>
              <Button nome="Sobre mim" href="/sobre" />
            </li>
            <li>
              <Button nome="Projetos" href="/projetos" />{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
