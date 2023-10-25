import PageOne from "../src/components/PageOne"
import PageTwo from "../src/components/PageTwo"
import PageThree from "../src/components/PageThree"



export default function SocialGuide() {
  return (
    <div className="flex w-[300vw]">
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  )
}