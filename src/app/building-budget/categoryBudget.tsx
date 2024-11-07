'use client';

import { useState } from "react";

const CategoryBudget = () =>{

    type Category = {
      title: string,
      paragraf: string
    }
    type CategoryDictionary = {
      [key: string]: Category
    }
    const categories: CategoryDictionary = {
      'wages':{
        'title':'Staff wages and benefits',
        'paragraf':'This is often the largest building expense. Perormance-based incentives can help boost productivitiy and increase resident satisfaction. Does your building meet the prevailing wage threshold?'
      },
      'utilities':{
        'title':'Utilities',
        'paragraf':'Electricity, water, gas, and sometimes internet for common areas. While usage-based, implementing energy-efficient systems and negotiating bulk rates can help reduce costs over time.'
      },
      'repair':{
        'title':'Repairs',
        'paragraf':'Pretty straightforward. For once "can\'t fix waht ain\'t broke" doesn\'t apply! Establishing a preventative maintenance plan can help control expenss and prevent sotly emergency repairs.'
      },
      'management':{
        'title':'Management fees',
        'paragraf':'This varies based and the scope of the management company. Creating goals mentrics to measure performance will help determine if you\'re getting your money\'s worth.'
      },
      'taxes':{
        'title':"Property taxes",
        "paragraf":"This cost is only applicable to co-ops! This is really a fixed cost and unique to each building."        
      },
      'insurance':{
        "title":"Insurance",
        "paragraf":"A crucial, largely fixed expense protecting against various risks, While sometimes you can shop around for a better rate."
      },
      "accounting":{
        "title":"Legal and accounting",
        "paragraf":"Fees essential for governance and compliance. Having organized financial records saves your CPA time"
      },
      "operations":{
        "title":"Building operations expenses",
        "paragraf":"Think service contracts (elevator, HVAC, pest control) and supplies. Annually review vendor contracts to make sure youre getting the best value."
      },
      "miscellaneous":{
        "title":"Miscellaneous",
        "paragraf":"This flexible category covers various smaller expenses. Regularly review these costs to ensure theyre necessary and look for pattern that might indicate a need for a new budget categor."
      }
    }
  
    const [activeCategory, setActiveCategory] = useState('wages');
  
    const isActiveCategory = (category:string) => {
      if(category===activeCategory){
        return ' bg-purpleHighlight';
      }
      return ' bg-purpleSecondary';
    }
    return <>
          
          <div className="container min-h-screen bg-purplePrimary items-center flex h-auto px-5">
            <div className="flex flex-row justify-evenly items-center min-h-screen py-12 flex-wrap">
              <div className="grid grid-cols-4 gap-2 basis-full md:basis-1/2 text-purplePrimary h-full text-center p-3 border-dashed border-white border-2 rounded-md">
                <div className={"row-span-2 flex justify-center items-center rounded-md"+ isActiveCategory('wages')} onClick={()=>setActiveCategory('wages')}>
                  Staff wages and Benefit
                </div>
                <div className={"col-span-3 hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer" + isActiveCategory('utilities')} onClick={()=>setActiveCategory('utilities')}>
                  Utilities
                </div>
                <div className={"col-span-2 hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('repair')} onClick={()=>setActiveCategory('repair')}>
                  Repairs and maintenance
                </div>
                <div className={"row-span-2 hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('management')} onClick={()=>setActiveCategory('management')}>
                  Management fees
                </div>
                <div className={"row-span-2 hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('insurance')} onClick={()=>setActiveCategory('insurance')}>
                  Insurance
                </div>
                <div className={"col-span-2 hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('taxes')} onClick={()=>setActiveCategory('taxes')}>
                  Property taxes
                </div>
                <div className={"hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('accounting')} onClick={()=>setActiveCategory('accounting')}>
                  Legal and accountining
                </div>
                <div className={"hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('operations')} onClick={()=>setActiveCategory('operations')}>
                  Building operations expenses
                </div>
                <div className={"hover:bg-purpleHighlight flex justify-center items-center rounded-md cursor-pointer"+ isActiveCategory('miscellaneous')}onClick={()=>setActiveCategory('miscellaneous')}>
                  Miscelaneous
                </div>
              </div>
  
              <div className="text-white basis md:basis-1/3 h-full">
                <h3 className="text-greenPrimary text-2xl py-3">A Closer Look</h3>
                <h2 className="text-4xl py-3">What&apos;s in my OpEx budget?</h2>
                <p className="py-2">
                  Wonder where the majority of your building&apos;s expenses go?
                  We broke down it down into the biggest buckets and shared some tips to reduce costs.
                </p>
  
                <div className="bg-purpleThird p-4 mt-5 border-solid border-white border rounded-md">
                  <h4 className="text-xl font-bold py-2">{categories[activeCategory].title}</h4>
                  <p className="text-sm">{categories[activeCategory].paragraf}</p>
                </div>
              </div>
            </div>
          </div>
    </>
  }

export default CategoryBudget;