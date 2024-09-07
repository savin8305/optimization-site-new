
import DummyContent from "../Home/Common/HomeMachineCarousel";
export interface CardData {
    content: React.ReactNode;
    category: string;
    firstname: string;
    secondname: string;
    description: string;
    image: string;
    title: string;
    speed: number;
    unit: string;
    icon: string;
  }
  
export const cardsData: CardData[] = [
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Servo Driven Paper Cup Machine"
          description="Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages"
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Servo Driven Paper Cup Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Servo Driven "
          secondname="Paper Cup Machine"
        />
      ),
      category: "cup",
      firstname: "Servo Driven",
      secondname: "Paper Cup Machine",
      description:
        "Experience unparalleled efficiency with our Paper Cup Machine...",
      image: "https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Servo Driven Machine",
      speed: 100,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Glass Making Machine"
          description="Paper Glass Making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This machine has two-layer system for movement of Paper fans which then wrapped around mother mold to form a cone shape. It is designed using Single Turn Plate Technology and Direct Bottom Technology which reduces wastage of paper and rotations during the process of bottom feeding, bottom knurling and top curling as well."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Glass Making Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Glass Making Machine"
        />
      ),
      category: "Cup",
      firstname: "Paper",
      secondname: "Glass Making Machine",
      description:
        "Paper Glass Making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This machine has two-layer system for movement of Paper fans which then wrapped around mother mold to form a cone shape. It is designed using Single Turn Plate Technology and Direct Bottom Technology which reduces wastage of paper and rotations during the process of bottom feeding, bottom knurling and top curling as well.",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
      title: "Glass Making Machine",
      speed: 120,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Disposable Cup Making Machine"
          description="Experience unparalleled efficiency with our Die Cutting Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Disposable Cup Making Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Disposable"
          secondname="Cup Making Machine"
        />
      ),
      category: "cup",
      firstname: "Disposable",
      secondname: "Cup Making Machine",
      description:
        "NS-200 Disposable Cup making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This is the best Disposable cup making machine which has two-layer system for movement of Paper fans which is formed by a kind of arm arrangement for cup cone tracker. Robotic Arm plays a vital role in transferring cup cone to Moulds for further process of Bottom heating, knurling and Top curling. Moreover, this machine has certain additional features like photoelectric sensors for paper feeding and cup counting.",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Disposable Cup Making Machine",
      speed: 150,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="High Speed Paper Cup Machine"
          description="Leading manufacturer and supplier of paper cup machines. We offer a wide range of paper cup machines from 90 cups per min to 160 cups per min. We have paper cup machine (90 speed), Automatic paper cup making machine (110 speed), High speed paper cup machine (130 speed), Fully automatic paper cup machine (160 speed)."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "High Speed Paper Cup Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="High Speed"
          secondname="Paper Cup Machine"
        />
      ),
      category: "paper",
      firstname: "High Speed",
      secondname: "Paper Cup Machine",
      description:
        "Leading manufacturer and supplier of paper cup machines. We offer a wide range of paper cup machines from 90 cups per min to 160 cups per min. We have paper cup machine (90 speed), Automatic paper cup making machine (110 speed), High speed paper cup machine (130 speed), Fully automatic paper cup machine (160 speed).",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "High Speed Paper Cup Machine",
      speed: 160,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Slitting Machine"
          description="Experience unparalleled efficiency with our Slitting Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Slitting Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Slitting"
          secondname="Machine"
        />
      ),
      category: "bowl",
      firstname: "Slitting",
      secondname: "Machine",
      description:
        "Experience unparalleled efficiency with our Slitting Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Slitting Machine",
      speed: 140,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Coating Machine"
          description="Experience unparalleled efficiency with our Coating Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Coating Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Coating"
          secondname="Machine"
        />
      ),
      category: "coating",
      firstname: "Coating",
      secondname: "Machine",
      description:
        "Experience unparalleled efficiency with our Coating Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Coating Machine",
      speed: 180,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Bucket Machine"
          description="Experience unparalleled efficiency with our Paper Bucket Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Bucket Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Bucket Machine"
        />
      ),
      category: "bucket",
      firstname: "Paper",
      secondname: "Bucket Machine",
      description:
        "Experience unparalleled efficiency with our Paper Bucket Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Bucket Machine",
      speed: 190,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Lid Machine"
          description="Experience unparalleled efficiency with our Paper Lid Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Lid Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Lid Machine"
        />
      ),
      category: "lid",
      firstname: "Paper",
      secondname: "Lid Machine",
      description:
        "Experience unparalleled efficiency with our Paper Lid Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Lid Machine",
      speed: 110,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Insulated Cup Machine"
          description="Experience unparalleled efficiency with our Insulated Cup Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Insulated Cup Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Insulated"
          secondname="Cup Machine"
        />
      ),
      category: "cup",
      firstname: "Insulated",
      secondname: "Cup Machine",
      description:
        "Experience unparalleled efficiency with our Insulated Cup Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Insulated Cup Machine",
      speed: 130,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Sleeve Making Machine"
          description="Experience unparalleled efficiency with our Sleeve Making Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Sleeve Making Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Sleeve"
          secondname="Making Machine"
        />
      ),
      category: "sleeve",
      firstname: "Sleeve",
      secondname: "Making Machine",
      description:
        "Experience unparalleled efficiency with our Sleeve Making Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Sleeve Making Machine",
      speed: 125,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Corrugation Machine"
          description="Experience unparalleled efficiency with our Corrugation Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Corrugation Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Corrugation"
          secondname="Machine"
        />
      ),
      category: "corrugation",
      firstname: "Corrugation",
      secondname: "Machine",
      description:
        "Experience unparalleled efficiency with our Corrugation Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Corrugation Machine",
      speed: 135,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Handle Cup Machine"
          description="Experience unparalleled efficiency with our Paper Handle Cup Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Handle Cup Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper Handle"
          secondname="Cup Machine"
        />
      ),
      category: "cup",
      firstname: "Paper Handle",
      secondname: "Cup Machine",
      description:
        "Experience unparalleled efficiency with our Paper Handle Cup Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Handle Cup Machine",
      speed: 145,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Bag Machine"
          description="Experience unparalleled efficiency with our Paper Bag Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Bag Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Bag Machine"
        />
      ),
      category: "bag",
      firstname: "Paper",
      secondname: "Bag Machine",
      description:
        "Experience unparalleled efficiency with our Paper Bag Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Bag Machine",
      speed: 150,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Straw Machine"
          description="Experience unparalleled efficiency with our Paper Straw Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Straw Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Straw Machine"
        />
      ),
      category: "straw",
      firstname: "Paper",
      secondname: "Straw Machine",
      description:
        "Experience unparalleled efficiency with our Paper Straw Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Straw Machine",
      speed: 160,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Cutlery Machine"
          description="Experience unparalleled efficiency with our Paper Cutlery Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Cutlery Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Cutlery Machine"
        />
      ),
      category: "cutlery",
      firstname: "Paper",
      secondname: "Cutlery Machine",
      description:
        "Experience unparalleled efficiency with our Paper Cutlery Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Cutlery Machine",
      speed: 165,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Plastic Lid Machine"
          description="Experience unparalleled efficiency with our Plastic Lid Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Plastic Lid Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Plastic"
          secondname="Lid Machine"
        />
      ),
      category: "lid",
      firstname: "Plastic",
      secondname: "Lid Machine",
      description:
        "Experience unparalleled efficiency with our Plastic Lid Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Plastic Lid Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Forming Machine"
          description="Experience unparalleled efficiency with our Paper Forming Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Forming Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Forming Machine"
        />
      ),
      category: "forming",
      firstname: "Paper",
      secondname: "Forming Machine",
      description:
        "Experience unparalleled efficiency with our Paper Forming Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Forming Machine",
      speed: 175,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Lunch Box Machine"
          description="Experience unparalleled efficiency with our Lunch Box Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Lunch Box Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Lunch"
          secondname="Box Machine"
        />
      ),
      category: "box",
      firstname: "Lunch",
      secondname: "Box Machine",
      description:
        "Experience unparalleled efficiency with our Lunch Box Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Lunch Box Machine",
      speed: 180,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Paper Plate Machine"
          description="Experience unparalleled efficiency with our Paper Plate Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Paper Plate Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Paper"
          secondname="Plate Machine"
        />
      ),
      category: "plate",
      firstname: "Paper",
      secondname: "Plate Machine",
      description:
        "Experience unparalleled efficiency with our Paper Plate Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Paper Plate Machine",
      speed: 185,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
    {
      content: (
        <DummyContent
          image="https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp"
          title="Carton Erecting Machine"
          description="Experience unparalleled efficiency with our Carton Erecting Machine..."
          breadcrumbItems={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Carton Erecting Machine", current: true },
          ]}
          buttons={[
            { text: "Know Machine", icon: true },
            { text: "Get a Quote", icon: true },
          ]}
          items={[
            {
              className: "text-gray-400 text-3xl",
              text: "High-Speed Synchronized Servos",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Advanced Sealing Technology",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Two-Step Curling Process",
            },
            {
              className: "text-gray-400 text-3xl",
              text: "Comprehensive Control System ",
            },
          ]}
          firstname="Carton"
          secondname="Erecting Machine"
        />
      ),
      category: "carton",
      firstname: "Carton",
      secondname: "Erecting Machine",
      description:
        "Experience unparalleled efficiency with our Carton Erecting Machine...",
      image:"https://assets.nesscoindustries.com/public/assets/nav_machine/PaperBowlMachine.webp",
      title: "Carton Erecting Machine",
      speed: 200,
      unit: "PCS/MIN",
      icon: "https://assets.nesscoindustries.com/public/assets/nav_machine_icon/paperlid.png",
    },
  ];
  