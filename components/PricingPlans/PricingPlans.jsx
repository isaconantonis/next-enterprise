import { CheckIcon } from '@heroicons/react/20/solid'
import './pricingPlans.css'
import pricing from '../../data/pricingPlansData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingPlans() {

  return (
        <main className="mb-4">
          {/* Pricing section */}
          <div className="mx-auto mt-4 max-w-7xl px-6 sm:mt-8 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-primary-800">
              Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
              loyalty, and driving sales.
            </p>
              <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:max-w-none md:grid-cols-3 lg:max-w-4xl">
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`${classNames(
                      tier.mostPopular ? 'md:scale-110 shadow-2xl' : '',
                      'rounded-3xl p-8',
                    )} bg-primary-800`}
                  >
                  <div className='max-h-[40%]'>
                  <h2
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-primary-50' : 'text-primary-50',
                      'text-lg font-semibold leading-8',
                    )}
                  >
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-primary-50">{tier.description}</p>
                  <p className="mt-6 flex justify-center items-center gap-x-1">
                    <span className="text-xl font-bold tracking-tight text-primary-50">{tier.price}</span>
                  </p>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-primary-50 text-primary-800 shadow-sm hover:bg-primary-500 hover:text-white'
                        : 'text-primary-800 bg-primary-50 hover:bg-primary-500 hover:text-white',
                      'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    )}
                  >
                    {tier.buttonText}
                  </a>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-primary-50">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-2 text-nowrap h-full w-full">
                        <CheckIcon className="h-6 w-5 flex-none text-primary-50" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          
      </main>
  )
}
