import Header from "components/Header";
import pageBg from "../../assets/images/pageBg.png";
import CreateFormBox from "components/CreateFormBox";
import FormCardBox from "components/FormCardBox";
import cardData from "const/forms";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-start justify-start p-8 relative"
      style={{
        // backgroundImage: `url(${pageBg})`,
        // backgroundSize: "cover",
        // overflow: "hidden",
        padding: "20px",
        paddingTop: "0px",
      }}
    >
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
        <Header title="Forms" />

        {/* Create new form section */}
        <div
          style={{
            marginTop: "22px",
          }}
        >
          <CreateFormBox />
        </div>

        {/* Existing forms section */}
        <div className="mb-4 flex justify-between items-center px-2 sm:px-4">
          <h2
            className="text-left text-[clamp(14px,2.5vw,18px)] leading-[clamp(20px,3vw,24px)] text-[#292929] font-normal"
            style={{ fontFamily: "Unbounded-Regular" }}
          >
            Recents
          </h2>

          <Link
            className="text-right text-[clamp(16px,2.5vw,20px)] leading-[clamp(24px,3vw,28px)] text-[#FC6815] font-normal cursor-pointer"
            style={{ fontFamily: "WorkSans-Regular" }}
            to="/allForms"
          >
            View all
          </Link>
        </div>

        {cardData.map((card) => (
          <div key={card.id} style={{ marginBottom: "10px" }}>
            <FormCardBox
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
              imageUrl={card.imageUrl}
              onDuplicate={() => console.log("Duplicate", card.id)}
              onDelete={() => console.log("Delete", card.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
