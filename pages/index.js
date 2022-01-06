import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Tab } from '@headlessui/react';

import React from 'react';
import Button from '../src/pages/component/Button';
import Navbar from '../src/pages/Home/Navbar';
import Todo from './Todo';

function index() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default index;
