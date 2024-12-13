import React, {useState, useRef,useEffect} from 'react'

const CheckoutStepper = ({stepsConfig = []}) => {
    const [currentStep, setCurrentStep] = useState(2);
    const [isComplete, setIsComplete] = useState(false)
    const [margin, setMargin] = useState({
        marginLeft: 0,
        marginRight: 0
    })
    const stepRef = useRef([]);

    useEffect(() => {
        setMargin({
            marginLeft: stepRef.current[0].offsetWidth/2,
            marginRight: stepRef.current[stepsConfig.length -1].offsetWidth/2
        })
    },[stepRef, stepsConfig.length])

   if(!stepsConfig.length) {
    return <></>
   }

   const handleNext = () => {
    setCurrentStep((prevStep) => {
        if(prevStep === stepsConfig.length) {
            setIsComplete(true)
            return prevStep;
        } else {
            return prevStep + 1;
        }
    })
   }

   const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
   }

   const ActiveComponent = stepsConfig[currentStep -1]?.component;

  return (
    <>
        <div className='stepper'>
      {
        stepsConfig.map((step, index) => {
            return (
                <div key={step.name} 
                ref={(el) => (stepRef.current[index] = el)}
                className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""}
                ${currentStep === index + 1 ? "active" : ""} `} >
                    <div className="step-number">
                        {currentStep > index + 1 || isComplete ? (
                            <span>&#10003;</span>
                        ): (
                            index + 1
                        )}
                    </div>
                    <div className='step-name'>{step.name}</div>
                </div>
            )
        })
      }
    </div>
 
    <div className='progress-bar' style={{width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
        marginLeft: margin.marginLeft,
        marginRight: margin.marginRight
    }}>
        <div className='progress' style={{width: `${calculateProgressBarWidth()}%`}}></div>
    </div>

    <ActiveComponent />


    {
        !isComplete && (
            <button className='btn' onClick={handleNext}>
                {currentStep === stepsConfig.length ? "Finish" : "Next"}
            </button>
        )
    }
    </>
  )
}

export default CheckoutStepper