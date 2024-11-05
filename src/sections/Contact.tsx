import ArrowUp from '@/assets/icons/arrow-up-right-white1.svg'

export const ContactSection = () => {
  return (
    <section>
          <div className="mb-[20vh] flex flex-row bg-gradient-to-r from-custom-green to-custom-gray mx-[25vh] rounded-3xl">
              <div className="h-[40vh]">
                <div className="px-10 pt-16 pb-7 font-bold text-2xl">
                  <h1>Let’s create something amazing together!</h1>
                </div>
                <div className="px-10 w-[80vh] font-semibold">
                  <h3>Ready to take your project to the next level? Let’s connect and discuss how I can help you achieve your goals. 
                  </h3>
                </div>
              </div>
              <div className="bg-custom-dark ml-36 w-[40vh] h-[11vh] mt-24 rounded-3xl ">
                <div className="text-white font-bold flex ml-[8vh] mt-[1rem] text-2xl ">
                  <h2>Contact me</h2>
                  <img src={ArrowUp} className="ml-[2vh] mt-[1vh]" />
                </div>
              </div>
          </div>
    </section>
  )
}
