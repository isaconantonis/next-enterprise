import { CheckIcon } from '@heroicons/react/20/solid'
import './pricingPlans.css'
import pricing from '../../data/pricingPlansData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingPlans() {

  return (
        <main className="mb-4">
          <div className="mx-auto mt-4 max-w-md lg:max-w-7xl px-6 sm:mt-8 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-primary-800">
              Choose an affordable plan that is packed with the best features for engaging your audience, driving sales and expanding you prescence online.
            </p>
              <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:max-w-none lg:grid-cols-3 lg:max-w-4xl">
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`${classNames(
                      tier.mostPopular ? 'lg:scale-110 shadow-2xl' : '',
                      'rounded-3xl p-8',
                    )} bg-primary-800`}
                  >
                  <div className=''>
                  <h2
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-primary-50' : 'text-primary-50',
                      'text-xl font-semibold leading-8',
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
                      tier.previewAvailable
                        ? 'rounded-t-lg rounded-b-lg shadow-lg'
                        : 'rounded-md',
                      'mt-6 block px-3 py-2 text-center text-sm font-semibold leading-6'
                    )}
                  >
                    {tier.buttonText}
                  </a>
                  {tier.previewAvailable && (
                  <a
                  href={tier.previewHref}
                  aria-describedby={tier.id}
                  className='block mx-auto rounded-b-full w-[80%] px-2 text-center text-xs font-semibold leading-6 bg-primary-600 hover:bg-primary-500 text-white'
                  >
                    Preview
                  </a>
                  )}
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
