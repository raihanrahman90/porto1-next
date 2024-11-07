
import Image from "next/image";
import CategoryBudget from "./categoryBudget";
import Navbar from "./navbar";
import Hero from "./hero";
import CallToAction from "./callToAction";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Navbar/>
      <Hero/>
      <PowerOfBuildingBudget/>
      <AnatomyBuildingBudget/>
      <CategoryBudget/>
      <CallToAction/>
    </main>
  );
}

const PowerOfBuildingBudget = () => {
  return <div className="flex flex-col bg-greenSecondary w-full min-h-screen text-center justify-center text-white gap-5 py-12">
            <h2 className="text-4xl">
              Perks of a powerful building budget
            </h2>
            <p>
              A well-crafted budget will impact every aspect of your building for the better.
            </p>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="md:basis-1/5 basis-1/2 flex flex-col gap-5">
                  <div className="flex flex-row justify-center">
                    <Image
                      src={"smoothOperations.svg"}
                      width={100}
                      height={100}
                      alt="smooth operation"
                      className="object-contain"
                    />                
                  </div>
                  <p className="text-xl font-bold">
                    Smooth Operations
                  </p>
                  <p className="text-sm">
                    Enables efficient daily management, swift maintenance responses, and stops minor issues from becoming major expenses.
                  </p>
                </div>
                
                <div className="md:basis-1/5 basis-1/2 flex flex-col gap-5">
                  <div className="flex flex-row justify-center">
                    <Image
                      src={"financialStability.svg"}
                      width={100}
                      height={100}
                      alt="smooth operation"
                      className="object-contain"
                    />                
                  </div>
                  <p className="text-xl font-bold">
                    Financial Stability
                  </p>
                  <p className="text-sm">
                    Builds reserves for unexpected costs, plans for improvements, and maintains stable monthly charges for owners.
                  </p>
                </div>

                <div className="md:basis-1/5 basis-1/2 flex flex-col gap-5">
                  <div className="flex flex-row justify-center">
                    <Image
                      src={"longTermVision.svg"}
                      width={100}
                      height={100}
                      alt="smooth operation"
                      className="object-contain"
                    />                
                  </div>
                  <p className="text-xl font-bold">
                    Long-term Vision
                  </p>
                  <p className="text-sm">
                    empowers your building to invest in aspirational projects and shape its future, turning &quot;what if&quot; into &quot;what&apos;s next &quot;
                  </p>
                </div>

                <div className="md:basis-1/5 basis-1/2 flex flex-col gap-5">
                  <div className="flex flex-row justify-center">
                    <Image
                      src={"communityTrust.svg"}
                      width={100}
                      height={100}
                      alt="smooth operation"
                      className="object-contain"
                    />                
                  </div>
                  <p className="text-xl font-bold">
                    Community trust
                  </p>
                  <p className="text-sm">
                    Fosters transparency, instills confidence in the board, and gets residents excited about the building&apos;s future
                  </p>
                </div>
            </div>
          </div>
}

const AnatomyBuildingBudget = () =>{
  return <div className="container flex justify-center items-center min-h-screen bg-background px-5">
        <div className="flex flex-row flex-wrap bg-background text-center justify-evenly gap-5 py-12">
          <div className="basis-full md:basis-2/5 flex flex-col text-left">
            <h2 className="md:text-6xl text-xl font-bold my-5">
              The anatomy of building budget
            </h2>
            <p className="text-md">
              Just like buildings, budgets have many different moving pieces. Understanding the structure of your condo or co-op budget is important for effective financial management.
              A well-crafted budget balances your building&apos;s expenses with its projected revenue, ensuring financial stability and long-term success.
            </p>
            <p>
              At the highest level, your budget should be separated into three buckets:
            </p>
            <div>

            </div>
          </div>
          <div className="basis-full md:basis-2/5 relative border-md gap-0">
            <div className="shadow-md rounded-md">
              <div className="basis-full md:basis-2/5 relative flex flex-col items-start md:h-80 aspect-square">
                <Image
                  src={"anatomyBudget.svg"}
                  alt="anatomyBudget"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white text-start px-3 py-2">
                <p>
                  Operating Expenses (OpEx): Usually comprising 50-70% of the total budget, these are the day-of-day costs of running your building. THis includes everything from utilities to staff payroll to insurance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
}
