import NavbarLayout from "@/components/layout/NavbarLayout";
import HeroLayout from "@/components/layout/HeroLayout";
import LoaderComponent from "@/components/elements/Loader";
import AboutLayout from "@/components/layout/AboutLayout";
import ProjectLayout from "@/components/layout/ProjectLayout";
import ExperienceLayout from "@/components/layout/ExperienceLayout";
export default function Home() {
  return (
    <>
      <LoaderComponent>
        <NavbarLayout />
        <HeroLayout />
        <AboutLayout/>
        <ProjectLayout/>
        <ExperienceLayout/>
      </LoaderComponent>
    </>
  );
}
