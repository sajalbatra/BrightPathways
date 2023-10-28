import Image from "next/image";
import serviceimg from "@/public/serviceimg.jpeg";

const Services = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-6xl text-center">Services We Offer</h1>
      <div className="flex items-center justify-center w-full h-full gap-5">
        <div className="flex flex-col gap-8">
          <ServiceCard
            title="Animal Care"
            description="This screen promotes animal welfare by facilitating pet adoption, helping animals find loving homes, and encouraging responsible pet ownership. It also provides a valuable resource for animal lovers."
          />
          <ServiceCard
            title="Child Adoption"
            description="It offers a platform for prospective parents to explore adoption options, making the adoption process smoother and more accessible. It also serves the best interests of children in need of loving homes."
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="rounded-[50%]"
            src={serviceimg}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4">
          <ServiceCard
            title="Old Age Care"
            description="Users can easily find suitable old age homes for their loved ones or themselves, promoting a sense of security and care. This feature eases the process of transitioning into senior living and ensures seniors receive the care they need."
          />
          <ServiceCard
            title="Special Schools"
            description="Users can discover educational opportunities for individuals with disabilities. This feature ensures that every individual, regardless of their abilities, has access to quality education, promoting inclusivity and equal opportunities."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-[#458FF6] w-72 h-52 rounded-xl p-2">
    <div>
    </div>
    <h1 className="text-lg font-bold">{title}</h1>
    <p className="text-[#efeaff]">{description}</p>
  </div>
);

export default Services;
