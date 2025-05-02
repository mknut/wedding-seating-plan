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
        width="20"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>

      <a-box
        position="2.5 2 10"
        depth="0.5"
        height="4"
        width="4"
        color="#aaa"
        opacity="1"
      ></a-box>
      <a-box
        position="0 2.5 10"
        depth="0.2"
        height="5"
        width="20"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>
      <a-box
        position="-10 2.5 2.5"
        depth="15"
        height="5"
        width="0.2"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>
      <a-box
        position="10 2.5 2.5"
        depth="15"
        height="5"
        width="0.2"
        material="color: '#fff'; opacity: 0.5"
      ></a-box>

      <a-cylinder
        position="7.5 0.75 -2"
        radius="1"
        height="1.5"
        color="#fff"
      ></a-cylinder>
      <a-cylinder
        position="5 0.75 2.5"
        radius="1"
        height="1.5"
        color="#fff"
      ></a-cylinder>
      <a-cylinder
        position="7.5 0.75 7"
        radius="1"
        height="1.5"
        color="#fff"
      ></a-cylinder>

      <a-light type="ambient" color="#ffffff"></a-light>
      <a-sky color="#ECECEC"></a-sky>

      <a-entity camera position="0 15 25" look-controls></a-entity>
    </a-scene>
  );
};
