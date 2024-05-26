"use client";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Page() {
  const tiers = [
    {
      name: "Basic",
      id: "tier-basic",
      price: { monthly: "$0.00" },
      changePlanText: "Change Plan",
      description: "25 requests / month + $0.1 each additional",
      features: ["Basic email support"],
      href: "https://rapidapi.com/macgreene14/api/airlabel/pricing",
    },
    {
      name: "Pro",
      id: "tier-pro",
      price: { monthly: "$5.00" },
      changePlanText: "Change Plan",
      description: "250 requests / month + $0.1 each additional",
      features: ["Priority email support"],
      href: "https://rapidapi.com/macgreene14/api/airlabel/pricing",
    },
    {
      name: "Ultra",
      id: "tier-ultra",
      price: { monthly: "$15.00" },
      changePlanText: "Change Plan",
      description: "1,000 requests / month + $0.1 each additional",
      features: ["24/7 phone support"],
      href: "https://rapidapi.com/macgreene14/api/airlabel/pricing",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-1">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Airlabel
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Airlabel is an API service designed to seamlessly convert HTML
                content into PDF attachments. With integrated support for
                generating QR codes from URLs, Airlabel is the perfect solution
                for businesses that need to create labels for SKUs, products,
                and other assets quickly and efficiently.
              </p>
              <div className="mt-10 max-w-2xl">
                <ul
                  role="list"
                  className="mt-8 max-w-xl space-y-8 text-gray-600"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        HTML to PDF Conversion
                      </strong>{" "}
                      Easily convert any HTML content into a polished,
                      professional PDF.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        QR Code Integration
                      </strong>{" "}
                      Automatically generate and include QR codes from URLs,
                      making your labels interactive and easy to scan.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Seamless Integration
                      </strong>{" "}
                      Designed to work smoothly with popular tools like
                      Airtable, Zapier, and N8N, ensuring your workflows remain
                      uninterrupted.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://rapidapi.com/macgreene14/api/airlabel"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                {/* <a
                  href="https://rapidapi.com/macgreene14/api/airlabel"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>

            <img
              src="./Airlabel.png"
              alt=""
              className="my-10 aspect-[1/1] w-full max-w-md rounded-3xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>

        <div className="mb-20 flow-root px-48 mx-auto" id="pricing-section">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center p-6 m-6">
            Pricing
          </h1>
          <Link href="#pricing-section"></Link>
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy plan
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
