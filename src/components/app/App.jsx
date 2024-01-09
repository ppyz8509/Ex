import { Wizard, Step, Controls } from "react-decision-tree-flow";
import { useState, useEffect } from "react";
import Oldfilm from "../video/Oldfilm.mp4";
import "./App.css";
import Typewriter from "typewriter-effect";
import maudio from "./SoundTrack1.mp3"

function App() {

  const audio = new Audio(maudio);

  const tree = {
    step1: ["step2"],
    step2: ["step3"],
    step3: ["step4"],
    step4: ["step5"],
    step5: ["step6"],
    step6: ["step7"],
    step7: ["step8"],
    step8: ["step9"],
    step9: ["step10", "step18"],
    step10: ["step11", "HaveOneBefore"],
    step11: ["step12"],
    step12: ["step13"],
    step13: ["step14"],
    step14: ["step15"],
    step15: ["step16"],
    step16: ["step17"],
    step17: ["step1"],
    step18: ["step19"],
    step19: ["step20"],
    step20: ["step21"],
    step21: ["step22"],
    step22: ["step23"],
    step23: ["step24", "exactly"],
    step24: ["step25"],
    step25: ["step26"],
    step26: ["step27"],
    step27: ["step28"],
    step28: ["step29"],
    step29: ["step30", "exactly"],
    step30: ["step31"],
    step31: ["step32"],
    step32: ["step33"],
    step33: ["step34"],
    step34: ["step17"],
    exactly: ["step10"],
    HaveOneBefore: ["HaveOneBefore12"],
    HaveOneBefore12: ["HaveOneBefore13"],
    HaveOneBefore13: ["HaveOneBefore14"],
    HaveOneBefore14: ["HaveOneBefore15"],
    HaveOneBefore15: ["step17"],
  };

  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={Oldfilm} autoPlay loop muted />
      <div className="content">
        <Wizard tree={tree} first="step1">
          <Step name="step1">
            <Controls>
              {({ destinations: { step2 } }) => (
                <button
                  onClick={() => {
                    step2();
                    try {
                      audio.volume = 0.1;
                      audio.loop = true;
                      audio.play();
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("สวัสดี").changeDelay(150).start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step2">
            <Controls>
              {({ destinations: { step3 } }) => (
                <button
                  onClick={step3}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("เราแค่มีเรื่องสงสัยอะ").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step3">
            <Controls>
              {({ destinations: { step4 } }) => (
                <button
                  onClick={step4}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "เราว่าทุกคนน่าจะเคยมีความรักหรือเคยได้รับนะ"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step4">
            <Controls>
              {({ destinations: { step5 } }) => (
                <button
                  onClick={step5}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("ไม่ว่าจะในรูปแบบไหนก็ตาม").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step5">
            <Controls>
              {({ destinations: { step6 } }) => (
                <button
                  onClick={step6}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("เราถามหน่อยสิ").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step6">
            <Controls>
              {({ destinations: { step7 } }) => (
                <button
                  onClick={step7}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("นิยามความรักของทุกๆคนคืออะไรหรอ?")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <form
            className="w-[600px] justify-center items-center flex flex-col"
            onSubmit={handleSubmit}
          >
            <Step name="step7">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("ความรักในความคิดคุณคืออะไร").start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <input
                className="block w-[200px] mt-5 mb-5 p-3 text-sm fade-in-button text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="text"
                placeholder="โปรดใส่นิยามของคุณ"
                required
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Controls>
                {({ destinations: { step8 } }) => (
                  <button
                    type="submit"
                    className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                      showButton ? "fade-in-button" : "fade-out-button"
                    }`}
                    style={{ display: showButton ? "block" : "none" }}
                    onClick={step8}
                  >
                    กรอก
                  </button>
                )}
              </Controls>
            </Step>
          </form>
          <Step name="step8">
            <Controls>
              {({ destinations: { step9 } }) => (
                <button
                  onClick={step9}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("อืมมมม นั่นก็คงใช่แหละมั้ง")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <form className="w-[600px] justify-center items-center flex flex-col">
            <Step name="step9">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "และคุณคิดคิดว่า คุณเคยรู้สึกรักใครจริงๆรึยัง?"
                      )
                      .start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <Controls>
                {({ destinations: { step10, step18 } }) => (
                  <div>
                    <button
                      type="button"
                      onClick={step10}
                      class="text-gray-900 mt-5 mr-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      เคยสิ
                    </button>
                    <button
                      type="button"
                      onClick={step18}
                      class="text-gray-900 mt-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      ไม่นะ
                    </button>
                  </div>
                )}
              </Controls>
            </Step>
          </form>
          <form className="w-[600px] justify-center items-center flex flex-col">
            <Step name="step10">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("แล้วคุณเคยคิดเสียใจมั้ยที่รักคนๆนั้นไป")
                      .start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <Controls>
                {({ destinations: { step11, HaveOneBefore } }) => (
                  <div>
                    <button
                      type="button"
                      onClick={step11}
                      class="text-gray-900 mt-5 mr-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      ไม่เคยเลย
                    </button>
                    <button
                      type="button"
                      onClick={HaveOneBefore}
                      class="text-gray-900 mt-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      เคย
                    </button>
                  </div>
                )}
              </Controls>
            </Step>
          </form>
          <Step name="step11">
            <Controls>
              {({ destinations: { step12 } }) => (
                <button
                  onClick={step12}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "หึ้ยย ถ้าเราเป็นคนที่คุณรักเราคงเป็นคนที่โชคดีมากแน่ๆเลย"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="HaveOneBefore">
            <Controls>
              {({ destinations: { HaveOneBefore12 } }) => (
                <button
                  onClick={HaveOneBefore12}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "นั่นสิเนาะ ทุ่มเทไปทั้งกายทั้งใจแต่สุดท้ายก็ไม่ได้เหมือนที่หวังเอาไว้"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="HaveOneBefore12">
            <Controls>
              {({ destinations: { HaveOneBefore13 } }) => (
                <button
                  onClick={HaveOneBefore13}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "บางทีคนที่คุณจะรักและไม่คิดเสียใจเลยที่ได้รักไป"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="HaveOneBefore13">
            <Controls>
              {({ destinations: { HaveOneBefore14 } }) => (
                <button
                  onClick={HaveOneBefore14}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("อาจเป็นความสัมพันธ์แบบอื่นก็ได้นะ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="HaveOneBefore14">
            <Controls>
              {({ destinations: { HaveOneBefore15 } }) => (
                <button
                  onClick={HaveOneBefore15}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `เราขอให้คุณเจอความรักแบบในนิยามของคุณนะ ความรักของคุณคือ : ${inputValue}`
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="HaveOneBefore15">
            <Controls>
              {({ destinations: { step17 } }) => (
                <button
                  onClick={step17}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ขอบคุณที่มาแชร์เรื่องราวนี้นะ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step12">
            <Controls>
              {({ destinations: { step13 } }) => (
                <button
                  onClick={step13}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "ได้โปรดรักเขาด้วยใจจริงต่อๆไปเหมือนที่เคยทำมานะ"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step13">
            <Controls>
              {({ destinations: { step14 } }) => (
                <button
                  onClick={step14}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("รักเป็นสิ่งที่น่าเหลือเชื่อใช่มั้ยละ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step14">
            <Controls>
              {({ destinations: { step15 } }) => (
                <button
                  onClick={step15}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `แสดงว่านิยามรักของคุณที่บอกว่ารักคือ ${inputValue} ก็เป็นจริงแล้วสิ`
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step15">
            <Controls>
              {({ destinations: { step16 } }) => (
                <button
                  onClick={step16}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "สามารถสร้างทั้งความสุขและความทุกข์ให้เราได้ในเวลาเดียวกันที่ความรักเกิดขึ้น"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step16">
            <Controls>
              {({ destinations: { step17 } }) => (
                <button
                  onClick={step17}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ขอบคุณที่มาแชร์เรื่องราวนี้นะ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <form className="w-[600px] justify-center items-center flex flex-col">
            <Step name="step17">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("อยากเล่นอีกมั้ย?").start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <Controls>
                {({ destinations: { step1 } }) => (
                  <div>
                    <button
                      type="button"
                      onClick={step1}
                      class="text-gray-900 mt-5 mr-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      เล่นต่อ
                    </button>
                  </div>
                )}
              </Controls>
            </Step>
          </form>
          <Step name="step18">
            <Controls>
              {({ destinations: { step19 } }) => (
                <button
                  onClick={step19}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("หึ้ยย ใช่รึเปล่าคุณลองคิดดูดีๆ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step19">
            <Controls>
              {({ destinations: { step20 } }) => (
                <button
                  onClick={step20}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("มันต้องมีสักอย่างแหละ").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step20">
            <Controls>
              {({ destinations: { step21 } }) => (
                <button
                  onClick={step21}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ลองเปิดกล่องความทรงจำของคุณดู")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step21">
            <Controls>
              {({ destinations: { step22 } }) => (
                <button
                  onClick={step22}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("เป็นยังไง").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step22">
            <Controls>
              {({ destinations: { step23 } }) => (
                <button
                  onClick={step23}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("ไหนลองตอบดูอีกที").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <form className="w-[600px] justify-center items-center flex flex-col">
            <Step name="step23">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("คุณเคยรู้สึกรักใครจริงๆรึยัง?")
                      .start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <Controls>
                {({ destinations: { step24, exactly } }) => (
                  <div>
                    <button
                      type="button"
                      onClick={exactly}
                      class="text-gray-900 mt-5 mr-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      เคย
                    </button>
                    <button
                      type="button"
                      onClick={step24}
                      class="text-gray-900 mt-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      ไม่
                    </button>
                  </div>
                )}
              </Controls>
            </Step>
          </form>
          <Step name="exactly">
            <Controls>
              {({ destinations: { step10 } }) => (
                <button
                  onClick={step10}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("เห็นมั้ยละคุณต้องมีคนที่คุณรักแหละหน่าา")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step24">
            <Controls>
              {({ destinations: { step25 } }) => (
                <button
                  onClick={step25}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("คุณกำลังปฏิเสธมันอยู่รึเปล่า?")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step25">
            <Controls>
              {({ destinations: { step26 } }) => (
                <button
                  onClick={step26}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("ถึงแม้ว่ามันอาจจะขมขื่น").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step26">
            <Controls>
              {({ destinations: { step27 } }) => (
                <button
                  onClick={step27}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("แต่ลองยอมรับมันดู").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step27">
            <Controls>
              {({ destinations: { step28 } }) => (
                <button
                  onClick={step28}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ว่าครั้งหนึ่ง คุณเคยรักมัน")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step28">
            <Controls>
              {({ destinations: { step29 } }) => (
                <button
                  onClick={step29}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("มา! ลองกันอีกที").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <form className="w-[600px] justify-center items-center flex flex-col">
            <Step name="step29">
              <h5>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("คุณเคยรู้สึกรักใครจริงๆรึยัง?")
                      .start();
                  }}
                  options={{
                    delay: 75,
                  }}
                />
              </h5>
              <Controls>
                {({ destinations: { step30, exactly } }) => (
                  <div>
                    <button
                      type="button"
                      onClick={exactly}
                      class="text-gray-900 mt-5 mr-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      เคย
                    </button>
                    <button
                      type="button"
                      onClick={step30}
                      class="text-gray-900 mt-5 fade-in-button2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      ไม่อยู่ดี
                    </button>
                  </div>
                )}
              </Controls>
            </Step>
          </form>
          <Step name="step30">
            <Controls>
              {({ destinations: { step31 } }) => (
                <button
                  onClick={step31}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "คุณคงไม่เคยจริงๆแหละ คุณย้ำมันตั้ง 3 ครั้ง"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step31">
            <Controls>
              {({ destinations: { step32 } }) => (
                <button
                  onClick={step32}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "เราขอให้คุณสู้ มันต้องมีสักคน สักวัน สักแห่งแหละ"
                        )
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step32">
            <Controls>
              {({ destinations: { step33 } }) => (
                <button
                  onClick={step33}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ที่คุณจะเจอคนที่คุณอยากจะรักเขาจริงๆดู")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step33">
            <Controls>
              {({ destinations: { step34 } }) => (
                <button
                  onClick={step34}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("เราเป็นกำลังใจให้ :)").start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
          <Step name="step34">
            <Controls>
              {({ destinations: { step17 } }) => (
                <button
                  onClick={step17}
                  className="h-screen w-screen pl-[50px] pr-[50px]"
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("ขอบคุณที่มาแชร์เรื่องราวนี้นะ")
                        .start();
                    }}
                    options={{
                      delay: 75,
                    }}
                  />
                </button>
              )}
            </Controls>
          </Step>
        </Wizard>
      </div>
    </div>
  );
}

export default App;
