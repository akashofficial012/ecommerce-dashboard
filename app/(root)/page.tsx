import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div><div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}

    {/* <div
                className={`${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 z-30"
                    : "opacity-0 translate-y-[-10px] z-[-1]"
                } bg-white boxShadow rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}
              >
                <h3 className="text-gray-900 font-[500] text-[1rem]">
                  Your password must contain:
                </h3>

                <div className="w-full mt-2 flex-col flex gap-[6px]">
                  {hintList.map((hint, index) => (
                    <div
                      key={index}
                      className={`${
                        signal[hint.type as keyof typeof signal]
                          ? "text-green-500"
                          : "text-gray-500"
                      } text-[0.8rem] flex items-center gap-[8px]`}
                    >
                      {signal[hint.type as keyof typeof signal] ? (
                        <MdDone className="text-[1rem]" />
                      ) : (
                        <RxCross1 />
                      )}
                      {hint.text}
                    </div>
                  ))}
                </div>
              </div> */}