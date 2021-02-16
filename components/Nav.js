import { useState, useEffect } from 'react'
import ServerMenuPreview from '../components/ServerMenuPreview'
import {
  Logo,
  Ubuntu,
  CentOs,
  DigitalOceanLogo,
  AWSLogo,
  GoogleCloudLogo,
  AzureLogo,
  FedoraLogo,
} from './assets'


const MainTitle = (props) => {

  const { serverMenuToggled, setServerMenuToggled } = props

  return (! serverMenuToggled && <>

      <div className="flex items-center px-8 -mx-1 pt-7" onClick={() => setServerMenuToggled(! serverMenuToggled)}>

        <div className="mx-1 w-14 h-14">
          <Logo />
        </div>

        <div className="mx-1 ">
          <h1 className="mx-3 text-4xl text-gray-800 font-archivo group-hover:text-border-active">Home</h1>
        </div>

        <div className="ml-auto">
          <svg
                ariaHidden="true"
                fill="currentColor"
                className="w-6 h-6 text-gray-500 group-hover:text-border-active"
                viewBox="0 0 32 32"
              >
            <path d="M24 11.305l-7.997 11.39L8 11.305z"></path>
          </svg>
        </div>

      </div>
  </>)

}


const SearchResultWebApp = () => {

    return (<>

      <div className="w-full h-auto rounded-sm cursor-pointer hover:bg-steel-200 group">

        <div className="flex items-center px-2 py-2 ">
          <div className="rounded-full w-7 h-7 bg-border border-border-active"></div>

          <div className="flex items-center mx-3">
            <div className="my-auto mr-2 bg-primary rounded-md">
              <span className="p-2 my-auto text-xs text-white">SGP-1 Server</span>
            </div>
            <h4 className="text-sm text-black">kodinger.com</h4>
          </div>

          <div className="invisible my-auto ml-auto group-hover:visible">
            <div className="w-5 h-5 rounded-sm bg-steel-400 text-steel-800">
              <div className="p-0.5 my-auto text-white">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                  <path d="M9 10L4 15 9 20"></path>
                  <path d="M20 4v7a4 4 0 01-4 4H4"></path>
                </svg>
              </div>

            </div>

          </div>
        </div>
      </div>

    </>)

}

const SearchResultServer = () => {

    return (<>

      <div className="w-full h-auto rounded-sm hover:bg-steel-200 group">

        <div className="flex items-center px-2 py-2 ">
          <div className="rounded-full w-7 h-7 bg-border border-border-active"></div>

          <div className="mx-3">
            <h4 className="text-sm text-black">SFO Production 2</h4>
          </div>

          <div className="invisible my-auto ml-auto group-hover:visible">
            <div className="w-5 h-5 rounded-sm bg-steel-400 text-steel-800">
              <div className="p-0.5 my-auto text-white">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                  <path d="M9 10L4 15 9 20"></path>
                  <path d="M20 4v7a4 4 0 01-4 4H4"></path>
                </svg>
              </div>

            </div>

          </div>
        </div>
      </div>

    </>)

}

const SearchResultNotFound = (props) => {

    const { searchQuery } = props

    return (
      <div className="w-full h-auto rounded-md bg-error">
        <h4 className="text-white break-words px-7 py-7 font-lg">We couldn't find anything matching "<span className="font-bold">{ searchQuery }</span>" in your workspace.</h4>
      </div>
    )

}

const SearchResult = (props) => {

    const { searchQuery } = props

    return (<>

      <div className="mt-5">

        <div className="mx-5 my-5">
            <hr className="border-0.5 border-gray-200" />
        </div>

        { searchQuery != ''

          ? <>

              <div className="mx-5 my-5">
                <SearchResultNotFound searchQuery={searchQuery} />
              </div>
            </>
         : <>

            <div className="mx-5 ">
              <h4 className="font-sans text-xs text-pink-500 uppercase">Recently Visited</h4>
            </div>

            <div className="mx-3 my-2 space-y-2">
                <SearchResultServer />
                <SearchResultWebApp />
            </div>
          </>
        }


      </div>

    </>)

}

const SearchPlaceholder = () => {

    const [searchToggled, setSearchToggled] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQuery = (event) => {
      setSearchQuery(event.target.value)
    }

    return (

      <>

        <div className="flex w-full h-auto ">

          <div
            className={`
              w-full
              rounded-md
              mt-6
              ${ searchToggled ? 'bg-white  shadow-2xl h-full' : '' }
            `}
          >

            <div className="flex px-4 pt-4 mt-2 ">

              <div className="flex w-4/5 space-x-5">

                <div className="font-bold text-steel-400 w-7 h-7 py-auto">
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21L16.65 16.65"></path>
                  </svg>
                </div>

                <div className="w-full h-auto">

                  <input
                    onFocus={() => setSearchToggled( true )}
                    onBlur={() => setSearchToggled( false )}
                    onChange={(e) => handleSearchQuery(e)}
                    value={searchQuery}
                    type="text"
                    placeholder="Search or jump to (⌘+K) "
                    className="w-full h-full font-light bg-transparent border-none appearance-none text-steel-600 placeholder-steel-300 focus:outline-none"

                  />

                </div>
              </div>

              <div
                className={`ml-auto border rounded-md border-steel-300
                  ${searchToggled ? 'visible' : 'invisible'}
                `}
              >
                <span className="px-3 py-2 my-auto font-sans text-steel-300 text-md">Esc</span>
              </div>

            </div>

            {searchToggled && <SearchResult searchQuery={searchQuery} />}

          </div>

        </div>

      </>

    )

}

const ServerMenu = (props) => {

  const { serverMenuToggled, setServerMenuToggled } = props

  useEffect(() => {

    let menuContainer = document.getElementById('menuContainer')
    const menuContainerOpenClasses = 'visible'
    const menuContainerClosedClasses = 'invisible'

    if( serverMenuToggled ) {
      menuContainer.classList.add(menuContainerOpenClasses)
      menuContainer.classList.remove(menuContainerClosedClasses)
    }
    else
    {
      menuContainer.classList.remove(menuContainerOpenClasses)
      menuContainer.classList.add(menuContainerClosedClasses)
    }


  }, [serverMenuToggled])

  return (<>
      <div id="menuContainer" className="w-full h-screen py-2 ">

        <div className="flex flex-col h-full rounded-lg bg-blackboard">


          <div className="flex items-center px-8 pt-5 -mx-1 hover:cursor-pointer">

            <div className="mx-1 w-14 h-14">
              <Logo />
            </div>

            <div className="mx-1 ">
              <h1 className="mx-3 text-4xl text-white font-archivo">Home</h1>
            </div>

            <div className="ml-auto text-white cursor-pointer hover:text-border-active" onClick={() => setServerMenuToggled(! serverMenuToggled)}>
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6L18 18"></path>
              </svg>
            </div>

          </div>


          <div className="px-8 mt-7">
            <div className="flex items-center w-full p-5 bg-gray-900 border-2 border-gray-900 rounded-md h-14 focus-within:border-border-active space-x-3">
              <div className="w-5 h-5 font-bold text-gray-500 py-auto">
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21L16.65 16.65"></path>
                </svg>
              </div>

              <input type="text" placeholder="Find servers.." className="w-full h-auto text-gray-500 placeholder-gray-500 bg-transparent border-none appearance-none px-auto py-auto"/>
            </div>
          </div>


          <div className="flex items-center w-full px-8 pb-5 -mx-3 mt-7">
            <h4 className="mx-3 font-sans text-xs font-semibold text-gray-500">ALL</h4>
            <div className="w-full h-0.5 ml-auto bg-gray-900 "></div>
          </div>

            <div className="flex-grow w-full px-8 overflow-y-auto">

              <div className="flex flex-col w-full">

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<FedoraLogo />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />
                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />
                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />
                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<DigitalOceanLogo />
                    additionalClasses="w-28 h-28"
                  />

                  <ServerMenuPreview
                    name="LoadBalancer X-777"
                    ip="128.199.200.21"
                    osLogo=<CentOs />
                    providerLogo=<AWSLogo  />
                    additionalClasses="w-28 h-20"
                  />

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<GoogleCloudLogo />
                    additionalClasses="w-28 h-20"
                  />

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    osLogo=<Ubuntu />
                    providerLogo=<AzureLogo />
                    additionalClasses="w-32 h-20 mb-4"
                  />

                  <ServerMenuPreview
                    name="US sfo-1 Production"
                    ip="112.19.18.21"
                    disk="2TB"
                    ram="32GB"
                    cpu="8"
                    isOnline={true}
                    osLogo=<FedoraLogo />
                    providerLogo=<AzureLogo />
                    additionalClasses="w-32 h-20 mb-4"
                  />

              </div>

            </div>


            <div className="bottom-0 flex-shrink-0 p-5">
              <a type="button" className="flex px-6 py-3 text-white rounded-lg shadow-2xl bg-border-active space-x-2">
                <div className="w-7 h-7">
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8L12 16"></path>
                    <path d="M8 12L16 12"></path>
                  </svg>
                </div>

              <span className="my-auto text-lg text-white">
                Add new server
              </span>

              </a>
            </div>



        </div>

      </div>
  </>)


}

export default function Nav() {

  const [ serverMenuToggled, setServerMenuToggled ] = useState(false)

  return (
    <>
      <div className="w-full bg-gray-100">

        <div className="flex mx-20">

          <div className="relative w-1/4 group" >

            <div className="relative px-3">

              <MainTitle setServerMenuToggled={setServerMenuToggled} serverMenuToggled={serverMenuToggled}/>

              <ServerMenu setServerMenuToggled={setServerMenuToggled} serverMenuToggled={serverMenuToggled}/>

            </div>

          </div>

          <div className="w-2/5" >
              <SearchPlaceholder />
          </div>

          <div className="relative pt-9 group" >
            <div className="flex items-center mx-3">
              <div>

                <a type="button" className="flex px-6 py-3 text-white rounded-lg shadow-2xl bg-border-active space-x-2">
                  <div className="w-7 h-7">
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8L12 16"></path>
                      <path d="M8 12L16 12"></path>
                    </svg>
                  </div>

                <h4 className="my-auto text-lg text-white">
                  Add new server
                </h4>

                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
