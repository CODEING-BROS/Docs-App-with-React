import React, {} from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"

const Card = ({data, refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} dragElastic={.1} dragTransition={{bounceStiffness:300,bounceDamping:20}} className='text-white px-8 py-10 w-60 h-72 relative flex-shrink-0 rounded-[45px] bg-zinc-900/90 overflow-hidden'>

        <FaRegFileAlt className='text-[18px]'/>

        <p className='text-sm leading-tight mt-5 font-semibold'>
           {data.desc}
        </p>

        <div className='absolute footer bottom-0 w-full left-0'>
            
            <div className=' flex items-center justify-between py-3 px-8 mb-1'>
                <h5>{data.fileSize}</h5>
                <span className='h-6 w-6 flex justify-center items-center rounded-full bg-zinc-600'>
                    {data.close ? <IoClose size="0.8em" color='#fff'/> : <LuDownload size="0.8em" color='#fff'/> }
                </span>
            </div>

            {
                data.tag.isOpen ? (
                    <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } py-4 flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                ) : null
            }

            
        </div>

    </motion.div>
  );
};

export default Card; 