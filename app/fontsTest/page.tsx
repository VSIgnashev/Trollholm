import signs from "@/data/signs";
import SignText from "@/app/util/mixedFonts";
import FontsDescription from "@/app/fontsTest/FontsDescription";

function FontsTest() {
  return <div className={"flex gap-40 justify-center pt-20"}>
    <FontsDescription/>
    <div className=""><h2 className={"font-bold text-[40px]"}>Default font</h2>
      <div className="pt-6">
        {signs.map((s, i) => {
          {
            return <div key={i} className="text-[27px]">{s.name}</div>;
          }
        })}
      </div>
    </div>
    <div className=""><h2 style={{fontFamily: "var(--font-main-sign)"}} className={"font-bold text-[40px]"}>Morris
      Roman</h2>
      <div className="pt-6">
        {signs.map((s, i) => {
          {
            return <div key={i} className="text-[27px] " style={{fontFamily: "var(--font-main-sign)"}}>{s.name}</div>;
          }
        })}
      </div>
    </div>
    <div className=""><h2 style={{fontFamily: "var(--font-secondary-sign)"}} className={"font-bold text-[40px]"}>Black
      Chancery</h2>
      <div className="pt-6">
        {signs.map((s, i) => {
          {
            return <div key={i} style={{fontFamily: "var(--font-secondary-sign)"}}
                        className="text-[27px]">{s.name}</div>;
          }
        })}
      </div>
    </div>
    <div className=""><h2 className={"font-bold text-[40px]"}>Mixed fonts</h2>
      <div className="pt-6">
        {signs.map((s, i) => {
          {
            return <div key={i} className="text-[27px] sign"><SignText>{s.name}</SignText></div>;
          }
        })}
      </div>
    </div>
  </div>;
}

export default FontsTest;