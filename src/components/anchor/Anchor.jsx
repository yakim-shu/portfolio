import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

const AnchorMenu = () => (

  <Anchor offsetTop={50} targetOffset={60}>
    <Link href="#project" title="Project" />
    <Link href="#work" title="Work" />
    <Link href="#education" title="Education" />
    <Link href="#about" title="About" />
    <Link href="#contact" title="Contact" />
  </Anchor >
);

export default AnchorMenu;
