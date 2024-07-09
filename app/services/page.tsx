'use client'
import PricingPlans from "../../components/PricingPlans/PricingPlans"
import services from '../../data/servicesData'

export default async function Projects() {
  return (
    <section>
      <div className="mx-auto grid max-w-screen-xl p-4 text-center">
        <div className="mx-auto place-self-center">
          <div className="pb-4 pt-9">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-primary-800 sm:text-4xl">
                  Everything to build your online presence
                </p>
              </div>
              <PricingPlans/>
              <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-5xl">
                <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:gap-y-16">
                  {services.map((feature) => (
                    <div key={feature.name} className="relative flex flex-col">
                      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <dt className="text-base font-semibold leading-7 text-primary-800">{feature.name}</dt>
                      <dd className="mt-2 text-base leading-7 text-primary-800">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
