import React from "react";
import styled from "styled-components";

export default function ReaderPanel() {
  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt pharetra lorem.
        Praesent porttitor dolor a ligula vestibulum, sed tincidunt urna posuere. Etiam vulputate
        risus eu est sodales, porttitor ornare mauris elementum. Curabitur in leo hendrerit, iaculis
        neque eget, luctus orci. Nulla sodales quam nec libero congue, in finibus augue iaculis.
        Aenean egestas, est id varius lacinia, tellus purus blandit est, ac fringilla neque nibh vel
        velit. Etiam ligula odio, facilisis non feugiat quis, luctus imperdiet eros. Etiam sit amet
        sem ut tortor aliquam auctor eget nec tortor. Donec dictum ultricies ultricies. In quam
        lacus, laoreet ac posuere vel, maximus ultricies elit. Donec quis arcu egestas, malesuada
        turpis a, auctor orci.
      </p>
      <p>
        Maecenas pulvinar porta orci. Vivamus congue sagittis mauris quis pharetra. Donec rhoncus id
        purus id accumsan. Aliquam pharetra enim non sodales bibendum. Nulla nibh lectus,
        pellentesque vitae suscipit sed, euismod faucibus odio. Praesent ac leo euismod, finibus
        lectus eu, bibendum justo. Nulla commodo est quis ante pellentesque luctus sit amet sed
        neque. Nullam lectus est, dapibus sit amet dolor rutrum, bibendum efficitur magna. Donec
        bibendum pharetra lorem, eget efficitur elit consequat ut. Nam lorem mauris, tincidunt
        sollicitudin mattis in, scelerisque eu felis. Vestibulum a nibh quis enim mattis vulputate
        vitae et sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed commodo ex luctus augue pharetra pharetra.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
`;
