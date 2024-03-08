import Logo from '../../../assets/Logo.png';
import './Footer.scss';
import CodeCell from '../../../assets/CodeCell.png';
import CSI from '../../../assets/CSI.png';

export default function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="footer-content">

          <div className="codecell">
            <a href="https://www.kjscecodecell.com/"><img src={CodeCell} alt="" /></a>
            <div className="socials">
              <a href="https://x.com/kjsce_codecell?s=21&t=rtV8iuTtUui3L-x4mv4w1A" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 24.0349V36H11.9651L0 24.0349ZM0 22.7621L13.2379 36H26.7947L33.2999 29.4948V2.69862H9.16876L0 11.8674V22.7621ZM31.7825 36H28.0675L33.2999 30.7676V34.4826L31.7825 36ZM34.1999 33.5826V29.8676L36 28.0675V31.7825L34.1999 33.5826ZM36 2.69862V26.7947L34.1999 28.5948V2.69862H36ZM10.0688 1.79862H33.2999V0H11.8674L10.0688 1.79862ZM10.5946 0L8.79597 1.79862H4.16622L5.96484 0H10.5946ZM7.89597 2.69862L0 10.5946V5.96484L3.26622 2.69862H7.89597ZM36 1.79862H34.1999V0H36V1.79862ZM17.2512 13.5489L17.296 14.2885L16.5482 14.1979C13.826 13.8508 11.4479 12.6734 9.4287 10.696L8.44155 9.7149L8.18728 10.4394C7.64883 12.0545 7.99284 13.7602 9.11461 14.9074C9.71288 15.5413 9.57827 15.6319 8.54625 15.2545C8.18728 15.1338 7.87319 15.0432 7.84327 15.0885C7.73857 15.1942 8.09754 16.5677 8.38172 17.1111C8.7706 17.8659 9.56331 18.6055 10.4308 19.0432L11.1637 19.3904L10.2962 19.4055C9.45862 19.4055 9.4287 19.4206 9.51844 19.7376C9.81758 20.7187 10.9992 21.7602 12.3154 22.213L13.2427 22.53L12.435 23.013C11.2385 23.7074 9.83254 24.0998 8.42659 24.13C7.75353 24.1451 7.20013 24.2055 7.20013 24.2508C7.20013 24.4017 9.02487 25.247 10.0868 25.5791C13.2726 26.5602 17.0567 26.1376 19.8985 24.4621C21.9177 23.2696 23.9369 20.8998 24.8792 18.6055C25.3877 17.3828 25.8962 15.1489 25.8962 14.0772C25.8962 13.3828 25.9411 13.2923 26.7787 12.4621C27.2723 11.9791 27.7359 11.4508 27.8257 11.2998C27.9752 11.013 27.9603 11.013 27.1975 11.2696C25.9262 11.7225 25.7467 11.6621 26.3749 10.9828C26.8385 10.4998 27.3919 9.62434 27.3919 9.36773C27.3919 9.32245 27.1676 9.39792 26.9133 9.53377C26.6441 9.68471 26.0458 9.91113 25.5971 10.047L24.7894 10.3036L24.0565 9.80547C23.6527 9.53377 23.0843 9.23188 22.7852 9.14132C22.0224 8.93 20.8558 8.96019 20.1677 9.20169C18.2981 9.88094 17.1165 11.6319 17.2512 13.5489Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/kjsce_codecell?igsh=ZTYwOGY1dHNpeW15" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 24.0349V36H11.9651L0 24.0349ZM0 22.7621L13.2379 36H26.7947L33.2999 29.4948V2.69862H9.16876L0 11.8674V22.7621ZM31.7825 36H28.0675L33.2999 30.7676V34.4826L31.7825 36ZM34.1999 33.5826V29.8676L36 28.0675V31.7825L34.1999 33.5826ZM36 2.69862V26.7947L34.1999 28.5948V2.69862H36ZM10.0688 1.79862H33.2999V0H11.8674L10.0688 1.79862ZM10.5946 0L8.79597 1.79862H4.16622L5.96484 0H10.5946ZM7.89597 2.69862L0 10.5946V5.96484L3.26622 2.69862H7.89597ZM36 1.79862H34.1999V0H36V1.79862ZM17.6158 8.55202C17.3827 8.55191 17.1667 8.55182 16.9659 8.55213V8.54925C14.8175 8.55165 14.4053 8.56606 13.3419 8.6141C12.218 8.66574 11.6078 8.85308 11.2014 9.01161C10.6635 9.22105 10.2792 9.47084 9.87577 9.87435C9.47231 10.2779 9.22207 10.6622 9.01313 11.2002C8.85535 11.6066 8.66755 12.2166 8.61616 13.3407C8.56092 14.5561 8.54987 14.9192 8.54987 17.9979C8.54987 21.0766 8.56092 21.4417 8.61616 22.6571C8.66731 23.7811 8.85535 24.3912 9.01313 24.7971C9.22255 25.3354 9.47231 25.7187 9.87577 26.1222C10.2792 26.5257 10.6635 26.7755 11.2014 26.9845C11.608 27.1423 12.218 27.3301 13.3419 27.382C14.5571 27.4372 14.9219 27.4492 18 27.4492C21.0778 27.4492 21.4429 27.4372 22.6581 27.382C23.782 27.3306 24.3925 27.1432 24.7983 26.9847C25.3365 26.7758 25.7196 26.526 26.123 26.1225C26.5265 25.7192 26.7767 25.3361 26.9857 24.7981C27.1434 24.3922 27.3312 23.7821 27.3826 22.658C27.4379 21.4427 27.4499 21.0776 27.4499 18.0008C27.4499 14.924 27.4379 14.5589 27.3826 13.3436C27.3315 12.2195 27.1434 11.6095 26.9857 11.2035C26.7762 10.6655 26.5265 10.2812 26.123 9.87772C25.7198 9.4742 25.3363 9.22441 24.7983 9.01545C24.392 8.85765 23.782 8.66982 22.6581 8.61842C21.4426 8.56318 21.0778 8.55213 18 8.55213L17.6158 8.55202ZM22.7697 11.8518C22.7697 11.0878 23.3893 10.4688 24.153 10.4688V10.4683C24.9167 10.4683 25.5363 11.088 25.5363 11.8518C25.5363 12.6156 24.9167 13.2353 24.153 13.2353C23.3893 13.2353 22.7697 12.6156 22.7697 11.8518ZM17.9995 12.0855C14.7304 12.0856 12.0799 14.7365 12.0799 18.0061C12.0799 21.2758 14.7305 23.9255 17.9997 23.9255C21.269 23.9255 23.9186 21.2758 23.9186 18.0061C23.9186 14.7365 21.2687 12.0855 17.9995 12.0855ZM21.8425 18.004C21.8425 15.8814 20.1221 14.161 18 14.161C15.8778 14.161 14.1576 15.8814 14.1576 18.004C14.1576 20.1263 15.8778 21.8469 18 21.8469C20.1221 21.8469 21.8425 20.1263 21.8425 18.004Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.facebook.com/kjscecodecell/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 36V24.0349L11.9651 36H0ZM13.2379 36L0 22.7621V11.8674L9.16876 2.69862H33.2999V29.4948L26.7947 36H20.1729V24.2039H24.7693L25.6438 18.9502H20.1729V15.5425C20.1729 14.1048 20.9358 12.7027 23.3861 12.7027H25.875V8.22998C25.875 8.22998 23.6173 7.875 21.4598 7.875C16.9521 7.875 14.0086 10.3918 14.0086 14.9461V18.9502H9V24.2039H14.0086V36H13.2379ZM28.0675 36H31.7825L33.2999 34.4826V30.7676L28.0675 36ZM34.1999 29.8676V33.5826L36 31.7825V28.0675L34.1999 29.8676ZM36 26.7947V2.69862H34.1999V28.5948L36 26.7947ZM33.2999 1.79862H10.0688L11.8674 0H33.2999V1.79862ZM8.79597 1.79862L10.5946 0H5.96484L4.16622 1.79862H8.79597ZM0 10.5946L7.89597 2.69862H3.26622L0 5.96484V10.5946ZM34.1999 1.79862H36V0H34.1999V1.79862Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
          <div className="devopia"><img src={Logo} alt="" /></div>
          <div className="csi">
            <a href="https://csikjsce.org/"><img src={CSI} alt="" /></a>
            <div className="socials">
              <a href="https://x.com/csi_kjsce?s=21&t=rtV8iuTtUui3L-x4mv4w1A" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 24.0349V36H11.9651L0 24.0349ZM0 22.7621L13.2379 36H26.7947L33.2999 29.4948V2.69862H9.16876L0 11.8674V22.7621ZM31.7825 36H28.0675L33.2999 30.7676V34.4826L31.7825 36ZM34.1999 33.5826V29.8676L36 28.0675V31.7825L34.1999 33.5826ZM36 2.69862V26.7947L34.1999 28.5948V2.69862H36ZM10.0688 1.79862H33.2999V0H11.8674L10.0688 1.79862ZM10.5946 0L8.79597 1.79862H4.16622L5.96484 0H10.5946ZM7.89597 2.69862L0 10.5946V5.96484L3.26622 2.69862H7.89597ZM36 1.79862H34.1999V0H36V1.79862ZM17.2512 13.5489L17.296 14.2885L16.5482 14.1979C13.826 13.8508 11.4479 12.6734 9.4287 10.696L8.44155 9.7149L8.18728 10.4394C7.64883 12.0545 7.99284 13.7602 9.11461 14.9074C9.71288 15.5413 9.57827 15.6319 8.54625 15.2545C8.18728 15.1338 7.87319 15.0432 7.84327 15.0885C7.73857 15.1942 8.09754 16.5677 8.38172 17.1111C8.7706 17.8659 9.56331 18.6055 10.4308 19.0432L11.1637 19.3904L10.2962 19.4055C9.45862 19.4055 9.4287 19.4206 9.51844 19.7376C9.81758 20.7187 10.9992 21.7602 12.3154 22.213L13.2427 22.53L12.435 23.013C11.2385 23.7074 9.83254 24.0998 8.42659 24.13C7.75353 24.1451 7.20013 24.2055 7.20013 24.2508C7.20013 24.4017 9.02487 25.247 10.0868 25.5791C13.2726 26.5602 17.0567 26.1376 19.8985 24.4621C21.9177 23.2696 23.9369 20.8998 24.8792 18.6055C25.3877 17.3828 25.8962 15.1489 25.8962 14.0772C25.8962 13.3828 25.9411 13.2923 26.7787 12.4621C27.2723 11.9791 27.7359 11.4508 27.8257 11.2998C27.9752 11.013 27.9603 11.013 27.1975 11.2696C25.9262 11.7225 25.7467 11.6621 26.3749 10.9828C26.8385 10.4998 27.3919 9.62434 27.3919 9.36773C27.3919 9.32245 27.1676 9.39792 26.9133 9.53377C26.6441 9.68471 26.0458 9.91113 25.5971 10.047L24.7894 10.3036L24.0565 9.80547C23.6527 9.53377 23.0843 9.23188 22.7852 9.14132C22.0224 8.93 20.8558 8.96019 20.1677 9.20169C18.2981 9.88094 17.1165 11.6319 17.2512 13.5489Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/csikjsce?igsh=eDZmMHN1NGp4bXFp" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 24.0349V36H11.9651L0 24.0349ZM0 22.7621L13.2379 36H26.7947L33.2999 29.4948V2.69862H9.16876L0 11.8674V22.7621ZM31.7825 36H28.0675L33.2999 30.7676V34.4826L31.7825 36ZM34.1999 33.5826V29.8676L36 28.0675V31.7825L34.1999 33.5826ZM36 2.69862V26.7947L34.1999 28.5948V2.69862H36ZM10.0688 1.79862H33.2999V0H11.8674L10.0688 1.79862ZM10.5946 0L8.79597 1.79862H4.16622L5.96484 0H10.5946ZM7.89597 2.69862L0 10.5946V5.96484L3.26622 2.69862H7.89597ZM36 1.79862H34.1999V0H36V1.79862ZM17.6158 8.55202C17.3827 8.55191 17.1667 8.55182 16.9659 8.55213V8.54925C14.8175 8.55165 14.4053 8.56606 13.3419 8.6141C12.218 8.66574 11.6078 8.85308 11.2014 9.01161C10.6635 9.22105 10.2792 9.47084 9.87577 9.87435C9.47231 10.2779 9.22207 10.6622 9.01313 11.2002C8.85535 11.6066 8.66755 12.2166 8.61616 13.3407C8.56092 14.5561 8.54987 14.9192 8.54987 17.9979C8.54987 21.0766 8.56092 21.4417 8.61616 22.6571C8.66731 23.7811 8.85535 24.3912 9.01313 24.7971C9.22255 25.3354 9.47231 25.7187 9.87577 26.1222C10.2792 26.5257 10.6635 26.7755 11.2014 26.9845C11.608 27.1423 12.218 27.3301 13.3419 27.382C14.5571 27.4372 14.9219 27.4492 18 27.4492C21.0778 27.4492 21.4429 27.4372 22.6581 27.382C23.782 27.3306 24.3925 27.1432 24.7983 26.9847C25.3365 26.7758 25.7196 26.526 26.123 26.1225C26.5265 25.7192 26.7767 25.3361 26.9857 24.7981C27.1434 24.3922 27.3312 23.7821 27.3826 22.658C27.4379 21.4427 27.4499 21.0776 27.4499 18.0008C27.4499 14.924 27.4379 14.5589 27.3826 13.3436C27.3315 12.2195 27.1434 11.6095 26.9857 11.2035C26.7762 10.6655 26.5265 10.2812 26.123 9.87772C25.7198 9.4742 25.3363 9.22441 24.7983 9.01545C24.392 8.85765 23.782 8.66982 22.6581 8.61842C21.4426 8.56318 21.0778 8.55213 18 8.55213L17.6158 8.55202ZM22.7697 11.8518C22.7697 11.0878 23.3893 10.4688 24.153 10.4688V10.4683C24.9167 10.4683 25.5363 11.088 25.5363 11.8518C25.5363 12.6156 24.9167 13.2353 24.153 13.2353C23.3893 13.2353 22.7697 12.6156 22.7697 11.8518ZM17.9995 12.0855C14.7304 12.0856 12.0799 14.7365 12.0799 18.0061C12.0799 21.2758 14.7305 23.9255 17.9997 23.9255C21.269 23.9255 23.9186 21.2758 23.9186 18.0061C23.9186 14.7365 21.2687 12.0855 17.9995 12.0855ZM21.8425 18.004C21.8425 15.8814 20.1221 14.161 18 14.161C15.8778 14.161 14.1576 15.8814 14.1576 18.004C14.1576 20.1263 15.8778 21.8469 18 21.8469C20.1221 21.8469 21.8425 20.1263 21.8425 18.004Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.facebook.com/csikjsomaiya/" target="_blank" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 36V24.0349L11.9651 36H0ZM13.2379 36L0 22.7621V11.8674L9.16876 2.69862H33.2999V29.4948L26.7947 36H20.1729V24.2039H24.7693L25.6438 18.9502H20.1729V15.5425C20.1729 14.1048 20.9358 12.7027 23.3861 12.7027H25.875V8.22998C25.875 8.22998 23.6173 7.875 21.4598 7.875C16.9521 7.875 14.0086 10.3918 14.0086 14.9461V18.9502H9V24.2039H14.0086V36H13.2379ZM28.0675 36H31.7825L33.2999 34.4826V30.7676L28.0675 36ZM34.1999 29.8676V33.5826L36 31.7825V28.0675L34.1999 29.8676ZM36 26.7947V2.69862H34.1999V28.5948L36 26.7947ZM33.2999 1.79862H10.0688L11.8674 0H33.2999V1.79862ZM8.79597 1.79862L10.5946 0H5.96484L4.16622 1.79862H8.79597ZM0 10.5946L7.89597 2.69862H3.26622L0 5.96484V10.5946ZM34.1999 1.79862H36V0H34.1999V1.79862Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section >
  )
} 