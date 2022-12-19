import React from "react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you use organic milk in all your products?",
    answer:
      "We use organic milk in some products, though not all. We use it in our semi-skimmed milk in our tea, coffee, Happy Meal® milk bottles and porridge in mainland Britain and Northern Ireland."
  },
  {
    question: "Are McDonald's burgers made in store?",
    answer:
      "The beef patties are 100% British and Irish beef and are made in Scunthorpe or Republic of Ireland, where they are made and instantly frozen. They are then sent to each store for use in our burgers."
  },
  {
    question: "Do you use free range meat?",
    answer:
      "The beef used across our menu is 100% British and Irish, and we only use whole cuts of forequarter and flank for our burger patties. All our beef comes from farms accredited by nationally recognised farm assurance schemes like Red Tractor."
  },
  {
    question: "What type of cheese do you use on your burgers?",
    answer:
      "You can find a full ingredient declaration for all food (including our burgers) served in the U.K. by visiting our online nutritional calculator tool here or downloading our Allergen Booklet here."
  }
];

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0); //[]

  const handleActiveFaq = (index) => {
    //1
    //if includes
    //true [1, 2, 3]
    //remove //filter [ data !== 1] return [2, 3]
    //false
    //add
    //[1, 2, 3] prev => [...prev, index]
  };

  return (
    <>
      <div className="container my-20">
        <div className="flex flex-col gap-y-6 divide-y">
          {faqs.map((faq, index) => {
            return (
              <div key={index} className="">
                <div className="flex justify-between items-start">
                  <div className="text-xl font-semibold">{faq.question}</div>
                  <div className="" onClick={() => setActiveFaq(index)}>
                    Arrow
                  </div>
                </div>
                {/* Answer */}
                <div
                  className={`text-base ${activeFaq === index ? "" : "hidden"}`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
