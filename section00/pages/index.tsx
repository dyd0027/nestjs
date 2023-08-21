import { Fragment } from 'react';
import Header from '../components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import {AiOutlineCopy} from 'react-icons/ai';
import {MdOutlineFeedback} from 'react-icons/md';

export default function Home() {
  return (
    <Fragment>
      <Header rightElements={[
        <button onClick={()=>alert('복사누름')} className={styles.box}><AiOutlineCopy size={20}/></button>,
        <Link href='/feedback'><MdOutlineFeedback/></Link>,
      ]} />
      <main></main>
    </Fragment>
  );
}
