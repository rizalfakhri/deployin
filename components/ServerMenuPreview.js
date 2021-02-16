export default function ServerMenuPreview(props) {

  const { name, ip, osLogo, providerLogo, ram = '2GB', disk = '25GB', cpu = '2', additionalClasses, isOnline = false } = props;

  const logoContainerClasses = ['ml-2 mr-6 object-fit opacity-20', additionalClasses]

  return (
      <div className="relative flex items-center mt-5 overflow-hidden border rounded-lg cursor-pointer border-blackboard-lighter bg-blackboard hover:bg-blackboard-lighter">

        <div className="absolute inline-flex items-end -mb-2 overflow-hidden -right-1 -bottom-0 -mr-7">
          <div className={logoContainerClasses.join(' ')} style={{ filter: 'brightness(0) ' }}>
            { providerLogo }
          </div>
        </div>

        <div className="relative inline-flex items-center px-3 py-3 -mx-4 group">

          <div className="relative mx-2 border rounded-full lg:mx-4 md:h-10 md:w-10 border-blackboard-lighter">
            <div className="inline-flex ">

              { isOnline
                ? <>
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-success animate-ping"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-success"></span>
                  </>
                : <>
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-error-medium animate-ping"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-error"></span>
                  </>
              }

              { osLogo }

            </div>

          </div>
          <div className="flex flex-col flex-wrap">
            <h4 className="font-sans text-sm font-semibold text-gray-200 ">{ name }</h4>
            <h4 className="font-sans text-xs font-medium text-gray-500">{ ip } / { ram } RAM / {cpu}vCPUs / { disk } Disk</h4>
          </div>
          <div className="absolute inset-0 flex">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-5 h-5 mt-1 text-gray-200 cursor-pointer "
                    viewBox="0 0 24 24"
                  >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </div>
        </div>
      </div>
  )
}
