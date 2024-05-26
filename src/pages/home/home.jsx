import React from "react";
import { MainLayout } from "../../layout/main-layout/main-layout";
import { Button } from "../../components/ui/button/button";
import { FilterIcon } from "../../assets/icons/filter-icon";
import { ListingCard } from "../../components/cards/listing-card";
import { CategoryCard } from "../../components/cards/category-card";
import { ArrowRight } from "../../assets/icons/arrow-right";
import { PlusIcon } from "../../assets/icons/plus-icon";
import stars from "../../assets/img/stars.png";
import stars2 from "../../assets/img/stars2.png";
import { ReviewBanner } from "../../components/banner/review-banner";
import { ProfileCard } from "../../components/cards/profile-card";
import searchImg from "../../assets/img/search-img.png";
import searchImg2 from "../../assets/img/search-img2.png";

export const Home = () => {
  const titles = ["Product", "Company", "Social", "Resources", "Legal"];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-violet-900 to-violet-600">
        <div className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px]">
          <div className="py-[80px] text-center mb-6 lg:w-[885px] mx-[auto]">
            <h1 className="text-white font-bold text-2xl font-inter mb-6 md:text-5xl">
              Category title
            </h1>
            <p className="text-white font-medium text-[16px] 2sm:text-[20px] font-inter">
              Accounting software automates an organization's financial
              functions and transactions with modules including accounts
              payable, accounts receivable, payroll, billing and general ledger.
            </p>
          </div>
        </div>
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px]">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-inter font-semibold">805 Listings</p>
          <Button variant="white" endIcon={<FilterIcon />}>
            Filter
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-1 2sm:grid-cols-2 2lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <ListingCard key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button variant="white">Load More</Button>
        </div>
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] py-10">
        <h2 className="font-inter font-semibold text-[24px] mb-[32px]">
          Related categories
        </h2>
        <div className="grid gap-4 2sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CategoryCard
              key={index}
              title="CRM Software"
              subtitle="Sales software"
              icon={<ArrowRight />}
            />
          ))}
        </div>
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] py-10">
        <h2 className="font-inter font-semibold text-[24px] mb-[32px]">
          Frequently asked questions
        </h2>
        {Array.from({ length: 6 }).map((_, index) => (
          <CategoryCard
            key={index}
            title="This is a question title"
            icon={<PlusIcon />}
          />
        ))}
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px]">
        <ReviewBanner
          title="Using Products?"
          subtitle="Write a review"
          img={stars}
          img2={stars2}
        />
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] my-8">
        <h2 className="font-inter font-semibold text-[24px] mb-[32px]">
          This is a title
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 2sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProfileCard key={index} />
          ))}
        </div>
        <span className="flex items-center gap-2 mt-9 cursor-pointer">
          <p className="font-inter font-medium text-[16px]">Go to blog</p>
          <ArrowRight />
        </span>
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px]">
        <ReviewBanner
          title="Selling products?"
          subtitle="Get discovered"
          img={searchImg}
          img2={searchImg2}
        />
      </section>
      <section className="container sm:px-[16px] lg:px-[64px] 2xl:px-[80px] mt-9">
        {titles.map((title, index) => (
          <CategoryCard key={index} title={title} icon={<PlusIcon />} />
        ))}
      </section>
    </MainLayout>
  );
};
