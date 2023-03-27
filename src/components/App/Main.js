import 'src/styles/Main.scss';

function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Titre du main</h2>
      <h3 className="main__text">Liste de courses dans main</h3>
      <ul className="list">
        <li className="element">farine</li>
        <li className="element">lait</li>
        <li className="element">oeuf</li>
      </ul>
    </div>
  );
}

export default Main;
