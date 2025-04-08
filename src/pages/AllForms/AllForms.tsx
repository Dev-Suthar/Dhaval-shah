import Header from "components/Header";
import pageBg from "../../assets/images/pageBg.png";
import CreateFormBox from "components/CreateFormBox";
import FormCardBox from "components/FormCardBox";
import cardData from "const/forms";

export default function AllForms() {
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
        <Header title="All Forms" />
        <div
          style={{
            marginTop: "22px",
          }}
        >
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
    </div>
  );
}
