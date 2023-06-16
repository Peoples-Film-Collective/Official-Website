import type { NextPage } from "next";
import { useCallback } from "react";

const DescriptionPage: NextPage = () => {
  const onHOMETextClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 1" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2777px] overflow-hidden text-center text-5xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[88px] text-left text-xs">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 shadow-[0px_4px_14px_1px_rgba(0,_0,_0,_0.12)] w-[1512px] h-[88px]" />
        <div className="absolute top-[11px] left-[226px] w-[1061px] h-[60px]">
          <img
            className="absolute top-[0px] left-[0px] w-[61px] h-[60px] object-cover"
            alt=""
            src="/kpfc-1@2x.png"
          />
          <div className="absolute top-[23px] left-[984px] font-medium">
            SUPPORT US
          </div>
          <div className="absolute top-[23px] left-[872px] font-medium">
            PUBLICATIONS
          </div>
          <div className="absolute top-[23px] left-[769px] font-medium">
            IN THE NEWS
          </div>
          <div className="absolute top-[23px] left-[655px] font-medium">
            NOTICE BOARD
          </div>
          <div
            className="absolute top-[23px] left-[594px] font-medium text-red-100 cursor-pointer"
            onClick={onHOMETextClick}
          >
            HOME
          </div>
        </div>
      </div>
      <div className="absolute top-[1675px] left-[82px] w-[1205px] h-[1046px] text-xl font-larsseit">
        <div className="absolute top-[34px] left-[109px] text-17xl tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          GET IN TOUCH
        </div>
        <div className="absolute top-[34px] left-[735px] text-17xl tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          FESTIVAL LOCATION
        </div>
        <div className="absolute top-[117px] left-[0px] tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          NAME
        </div>
        <div className="absolute top-[223px] left-[2px] tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          EMAIL
        </div>
        <div className="absolute top-[327px] left-[18px] tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          SUBJECT
        </div>
        <div className="absolute top-[435px] left-[19px] tracking-[0.11em] font-medium inline-block w-[433px] h-[38px]">
          MESSAGE
        </div>
        <div className="absolute top-[0px] left-[143px] bg-darkgray-200 w-[1062px] h-[1046px]" />
        <div className="absolute top-[150px] left-[186px] [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] w-[493px] h-[62px]" />
        <div className="absolute top-[254px] left-[187px] [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] w-[493px] h-[62px]" />
        <div className="absolute top-[361px] left-[187px] [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] w-[493px] h-[62px]" />
        <div className="absolute top-[468px] left-[186px] [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] w-[493px] h-[237px]" />
        <div className="absolute top-[727px] left-[186px] [background:linear-gradient(#000,_#000),_linear-gradient(#fff,_#fff),_#fff] w-[101px] h-[38px]" />
        <div className="absolute top-[739px] left-[20px] text-sm tracking-[0.11em] font-medium text-white inline-block w-[433px] h-[38px]">
          SUBMIT
        </div>
        <img
          className="absolute top-[150px] left-[724px] w-[444px] h-[615px] object-cover"
          alt=""
          src="/googlemaps-screenshot-1-2@2x.png"
        />
      </div>
      <img
        className="absolute top-[2486px] left-[1px] w-[1512px] h-[291px]"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[134px] left-[543px] font-helvetica-neue-lt-std text-left">
        NAME OF THE MOVIE : MOVIE NAME
      </div>
      <div className="absolute top-[179px] left-[636px] text-base tracking-[0.06em] font-helvetica-neue-lt-std">
        DIRECTED BY : DIRECTOR A
      </div>
      <div className="absolute top-[596px] left-[591px] tracking-[0.05em] font-semibold inline-block w-[332px] h-[38px]">
        SYNOPSIS
      </div>
      <div className="absolute top-[1387px] left-[591px] tracking-[0.05em] font-semibold inline-block w-[332px] h-[38px]">
        PERSONNEL
      </div>
      <div className="absolute top-[1138px] left-[586px] tracking-[0.05em] font-semibold inline-block w-[332px] h-[38px]">
        ABOUT THE DIRECTOR
      </div>
      <div className="absolute top-[780px] left-[226px] text-base tracking-[0.11em] font-light text-justify inline-block w-[1060px] h-[326px]">
        <p className="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[1178px] left-[222px] text-base tracking-[0.11em] font-light text-justify inline-block w-[1060px] h-[326px]">
        <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[651px] left-[560px] text-xl tracking-[0.11em] font-medium">
        <p className="m-0">
          <span className="text-red-300">DURATION</span>
          <span> 100mins.</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">YEAR</span>
          <span> 2023</span>
        </p>
        <p className="m-0 text-red-300">
          <span>COUNTRY</span>
          <span className="text-black"> India</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">LANGUAGE</span>
          <span> English, Bengali, Hindi</span>
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[1442px] left-[451px] text-xl tracking-[0.11em] font-medium">
        <p className="m-0">
          <span className="text-red-300">Cinematographer</span>
          <span> Shishir Bishankhe</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">Editor</span>
          <span> Kiran Shrestha</span>
        </p>
        <p className="m-0 text-red-300">
          <span>Production Designer</span>
          <span className="text-black"> Pradeep Bhandari</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">Sound Designer</span>
          <span> Dikesh Khadgi Shahi</span>
        </p>
        <p className="m-0 text-red-300">
          <span>Sound Mixing and additional design</span>
          <span className="text-black"> Kishore Acharya</span>
        </p>
        <p className="m-0 text-red-300">
          <span>Background Score</span>
          <span className="text-black"> Pushpa Sangam</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">Colorist</span>
          <span> Sanjeev Ratna Shakya</span>
        </p>
        <p className="m-0">
          <span className="text-red-300">Producer(s)</span>
          <span> Prajjwal SJB Rana</span>
        </p>
      </div>
      <div className="absolute top-[219px] left-[1px] w-[1512px] h-[346px] overflow-x-auto">
        <div className="absolute top-[0px] left-[0px] w-[346px] h-[345px]">
          <div className="absolute top-[0px] left-[0px] bg-white w-[346px] h-[345px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[0px] w-[395px] h-[527px] object-cover"
              alt=""
              src="/jontyson3oxicigxj5cunsplash-1@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[-1px] left-[1798px] bg-white w-[346px] h-[346px] overflow-hidden">
          <img
            className="absolute top-[-59px] left-[0px] w-[395px] h-[494px] object-cover"
            alt=""
            src="/esteejanssensmuf7ly04soiunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[1439px] bg-white w-[346px] h-[345px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[437px] h-[583px] object-cover"
            alt=""
            src="/mathildecolinsijitqmju8aunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[1080px] bg-white w-[346px] h-[345px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[416px] h-[554px] object-cover"
            alt=""
            src="/jontysonsh6q8megvnmunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[720px] bg-white w-[346px] h-[345px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[395px] h-[527px] object-cover"
            alt=""
            src="/jontysonf8lubybzbawunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[360px] bg-white w-[346px] h-[345px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[395px] h-[527px] object-cover"
            alt=""
            src="/marygracehudson5dqj8bc-zagunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[2158px] bg-white w-[346px] h-[346px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[395px] h-[395px] object-cover"
            alt=""
            src="/davimoreirat7itprh7kkgunsplash-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
