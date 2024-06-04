import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react'
import Menu from '../containers/Menu';
import { dataTabs } from "@helpers"

const Tabs_ = ({ data }) => {
    return (
        <Tabs defaultIndex={1} >
            <h2 className='text-center mt-10 mb-3' >kategori</h2>
            <TabList className={"flex w-full relative justify-center items-center gap-5"} >
                {dataTabs.map((tabs) => (
                    <Tab
                        className={"focus:outline-none p-3 rounded-full  transition-all duration-300 ease-in-out relative text-dark-999 bg-white opacity-50 delay-100 flex justify-center items-center flex-col"}
                        selectedClassName='bg-white/100 rounded-full text-white opacity-100 scale-125'  >
                        <img src={tabs.image} alt='dimsum icon' width={40} height={40} />
                        <p className='absolute left-0 -bottom-10 font-bold uppercase text-center w-full text-sm' >{tabs.title} <span className='block font-thin text-xs' >{tabs.item} items</span></p>
                    </Tab>
                ))}
            </TabList>
            <TabPanel>
                {/* <Menu data={menus.dimsum} /> */}
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    )
}

export default Tabs_