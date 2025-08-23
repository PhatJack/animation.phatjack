import AnimationGallery from "@/components/AnimationGallery";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <AnimationGallery />
    </div>
  );
}
