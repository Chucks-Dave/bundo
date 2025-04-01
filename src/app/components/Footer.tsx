import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarDropDown from "./NavDropDown";

const Footer = () => {
  return (
    <footer className="space-y-2 max-md:space-y-5">
      <Image src="/FullLogo.svg" height={23.7} width={94} alt="bundo" />
      <p className="text-[14px] font-light text-[#302F2C]">
        Simplifying Retail.
      </p>
      <div className="flex lg:justify-between gap-5 max-md:flex-col-reverse ">
        <Image
          src="/footer.png"
          height={562}
          width={337}
          alt="bundo"
          className="aspect-square h-[402px] w-[380px] max-md:mt-8"
        />
        <div className="flex flex-col gap-5 max-md:hidden">
          <div className="grid grid-cols-5 gap-5 ">
            <FooterColumn title="Company">
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  Community
                </Link>
              </li>
            </FooterColumn>
            <FooterColumn title="Contact">
              <li className="text-[14px] font-light text-[#302F2C]">
                Lagos, Nigeria
              </li>
              <li>
                <Link
                  href="mailto:hello@bundo.app"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  hello@bundo.app
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@bundo.app"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  info@bundo.app
                </Link>
              </li>
            </FooterColumn>
            <FooterColumn title="Support">
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@bundo.app"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  support@bundo.app
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:help@bundo.app"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  help@bundo.app
                </Link>
              </li>
            </FooterColumn>
            <FooterColumn title="Legal">
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px] font-light text-[#302F2C]"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[14px]  font-light text-[#302F2C]"
                >
                  Vendor Agreement
                </Link>
              </li>
            </FooterColumn>
          </div>
          <div className=" mt-auto pb-12">
            <div className="flex flex-row items-center  gap-4">
              <div className="font-bold text-[18px] leading-[100%] text-[#302F2C]">
                Keep Up With Us
              </div>
              <div className="flex items-center gap-4">
                <SocialLink
                  href="#"
                  iconSrc="/instagram.png"
                  platform="Instagram"
                />
                <SocialLink href="#" iconSrc="/Vector.png" platform="Twitter" />
                <SocialLink
                  href="#"
                  iconSrc="/facebook.png"
                  platform="Facebook"
                />
                <SocialLink
                  href="#"
                  iconSrc="/Vector (1).png"
                  platform="LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:hidden">
          <NavbarDropDown
            label="Company"
            items={[""]}
            onItemSelect={() => (item: string) => {
              console.log(`Selected: ${item}`);
            }}
            className=""
          />
          <NavbarDropDown
            label="Support"
            items={[""]}
            onItemSelect={() => (item: string) => {
              console.log(`Selected: ${item}`);
            }}
            className=""
          />
          <NavbarDropDown
            label="Legal"
            items={[""]}
            onItemSelect={() => (item: string) => {
              console.log(`Selected: ${item}`);
            }}
            className=""
          />
          <NavbarDropDown
            label="Contact"
            items={["Lagos, Nigeria", "hello@bundo.app", "info@bundo.app"]}
            onItemSelect={() => (item: string) => {
              console.log(`Selected: ${item}`);
            }}
            className=""
          />
          <div className="py-3 space-y-3">
            <div className="font-bold text-[18px] leading-[100%] text-[#302F2C]">
              Keep Up With Us
            </div>
            <div className="flex items-center gap-2">
              <SocialLink
                href="#"
                iconSrc="/instagram.png"
                platform="Instagram"
              />
              <SocialLink href="#" iconSrc="/Vector.png" platform="Twitter" />
              <SocialLink
                href="#"
                iconSrc="/facebook.png"
                platform="Facebook"
              />
              <SocialLink
                href="#"
                iconSrc="/Vector (1).png"
                platform="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface SocialLinkProps {
  href: string;
  iconSrc: string;
  platform: string;
}

function SocialLink({ href, iconSrc, platform }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-normal text-[14px] underline text-[#34A853]"
      aria-label={platform}
    >
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt={`${platform} icon`}
        width={18}
        height={18}
        className="h-4 w-4 object-contain"
      />
      <span>{platform}</span>
    </Link>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-[18px] text-[#11381C]">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}
