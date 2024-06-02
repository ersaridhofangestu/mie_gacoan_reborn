import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react'
import Menu from '../containers/Menu';

const Tabs_ = ({ data }) => {
    const [menus, _] = useState({
        dimsum: data.docs[0].data(),
        mie1: data.docs[1].data(),
        mie2: data.docs[2].data(),
    })

    const dataTabs = [
        {
            image: "https://miegacoan.vercel.app/static/media/dimsumColor.a5f735c7d492c808eece.png",
            title: "dimsum",
            item: menus.dimsum.data.length,
        },
        {
            image: "https://miegacoan.vercel.app/static/media/ramenColor.38bc9dbf9ad9fd47976b.png",
            title: "mie",
            item: menus.mie1.data.length
        },
        {
            image: "https://miegacoan.vercel.app/static/media/poinsettiaColor.cfe7ac06a5db5c9f68f8.png",
            title: "minuman",
            item: "s"
        },
    ]

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
                <Menu data={menus.dimsum} />
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