import React, { useRef } from 'react';
import Card from './Card';

const Forground = () => {

  const ref = useRef(null);
  
  const data = [
    { desc:"Lorem ipsum dolor totam consectetur Aperiam, adipisicing elitem.",
      fileSize : "0.9mb" ,
      close:false,
        tag : {
        isOpen : true,
        tagTitle : "Download Now",
        tagColor : "green"
      },
    },
    
    { desc:"Lorem ipsum dolor totam consectetur Aperiam, adipisicing elitem.",
      fileSize : "0.5mb" ,
      close:true,
        tag : {
        isOpen : true,
        tagTitle : "Upload",
        tagColor : "blue"
      },
    },

    { desc:"Lorem ipsum dolor totam consectetur Aperiam, adipisicing elitem.",
      fileSize : "0.4mb" ,
      close:true,
        tag : {
        isOpen : false,
        tagTitle : "Download Now",
        tagColor : "green"
      },
    },
  ]


  return (
    <>
      <div ref={ref} className='fixed z-[3] left-0 top-0 w-full h-full flex p-6 gap-10 flex-wrap '>
        {data.map((item,index)=>(
          <Card data={item} refrence={ref}/>
        ))}
      </div>
    </>
  );
};

export default Forground;