export const TableMap = () => {
  return (
    <a-scene>
      <a-plane
        position="0 0 -10"
        rotation="-90 0 0"
        width="1000"
        height="1000"
        color="#aaa"
      ></a-plane>
      <a-box
        position="0 2.5 -5"
        depth="0.2"
        height="5"
        width="40"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>
      <a-box
        position="-7.5 2.5 10"
        depth="0.2"
        height="5"
        width="25"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>

      <a-box
        position="15 2.5 10"
        depth="0.2"
        height="5"
        width="10"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>

      <a-box
        position="7.5 4.5 10"
        depth="0.2"
        height="1"
        width="5"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>

      <a-box
        position="-20 2.5 2.5"
        depth="15"
        height="5"
        width="0.2"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>
      <a-box
        position="20 2.5 2.5"
        depth="15"
        height="5"
        width="0.2"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>
      {/* main table */}
      <a-box
        position="0 2.5 2.5"
        depth="2"
        height="1.5"
        width="5"
        color="#fff"
      ></a-box>
      {/* side tables right */}
      <a-cylinder
        position="7.5 0.75 0"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>
      <a-cylinder
        position="15 0.75 0"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>

      <a-cylinder
        position="7.5 0.75 5"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>
      <a-cylinder
        position="15 0.75 5"
        radius="1.5"
        height="1.5"
        color="#000"
      ></a-cylinder>
      {/* side tables left */}
      <a-cylinder
        position="-7.5 0.75 0"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>

      <a-cylinder
        position="-15 0.75 0"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>

      <a-cylinder
        position="-7.5 0.75 5"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>

      <a-cylinder
        position="-15 0.75 5"
        radius="1.5"
        height="1.5"
        color="#fff"
      ></a-cylinder>
      <a-light type="ambient" color="#ffffff"></a-light>
      <a-sky color="#ECECEC"></a-sky>
      <a-entity camera position="0 30 60" look-controls></a-entity>
    </a-scene>
  );
};
