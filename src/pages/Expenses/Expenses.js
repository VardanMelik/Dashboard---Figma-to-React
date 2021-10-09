import styles from './Expenses.module.scss';
import { useState } from 'react';
import { 
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer } from 'recharts';


import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';
import optionIcon from '../../assets/png/menuIcon.png';
import cartIcon from '../../assets/svg/cartIcon.svg';



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
  ];


export default function Expenses() {

    const [activeIndex, setActiveIndex] = useState(0);

    const onMouseOver = (data, index) => setActiveIndex(index)

    return (
        <>
            <main className={styles.expenses}>
                <div className={styles.expensesCard}>
                    <section className={styles.expensesOverview}>
                        <div className={styles.expensesHeader}>
                            <p className={styles.expensesTitle}>Expenses</p>
                            <div className={styles.expensesActions}>
                                <div className={styles.personImages}>
                                    <img src={personOne} alt="person one" />
                                    <img src={personTwo} alt="person two" />
                                    <img src={personThree} alt="person three" />
                                </div>
                                <button>
                                    <img src={addIcon} alt="add" />
                                </button>
                            </div>
                        </div>
                        <p className={styles.dataRange}>01 - 25 March, 2021</p>
                        <ResponsiveContainer width="100%" minHeight="9vh">
                            <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="uv" fill="rgba(21,122,255, .2)"
                                onMouseOver={onMouseOver}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        cursor="pointer"
                                        fill={index === activeIndex 
                                        ? "rgb(21, 122, 255)"
                                        : "rgba(21, 122, 255, .2)"
                                        }
                                    />
                                ))}
                            </Bar>
                            </BarChart>
                        </ResponsiveContainer>

                        <div className={styles.expensesOverviewHeader}>
                            <p className={styles.expensesOverviewTitle}></p>
                            <button>
                                <img src={optionIcon} alt="options" />
                            </button>
                        </div>

                        <ul>
                            <li className={styles.expensesItem}>
                                <div className={styles.expensesItemLeft}>
                                    <div className={styles.expensesItemDiv}>
                                        <img src={cartIcon} alt="cart"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    )
}