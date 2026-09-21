import './Footer.css'
import USMOLogo from '../pages/USMO IMG/logo/cropped_circle_image.png';


export function Footer() {
  return(
    <footer>
          <div className="players-container">
            <div className="keepers">
              <h2>حراس المرمى</h2>
              <p><strong>عبدالله</strong> أمغار</p>
              <p><strong>علوي</strong> المنور</p>
              <p><strong>حمزة</strong> العشاوي</p>
              <p><strong>أمين</strong> غنيمي</p>
              <p><strong>صلاح الدين</strong> كعواشي</p>
            </div>
    
            <div className="defenders">
              <h2>المدافعين</h2>
              <p><strong>ياسين</strong> بوعالي</p>
              <p><strong>عبدالكريم</strong> أعليون</p>
              <p><strong>حكيم</strong> أكليدو</p>
              <p><strong>المهدي</strong> دهر</p>
              <p><strong>پاكوم</strong> مالديني</p>
              <p><strong>حمزة</strong> كعوش</p>
              <p><strong>جواد</strong> خلوق</p>
              <p><strong>رباح</strong> كوكوش</p>
            </div>
    
            <div className="center">
              <h2>الوسط</h2>
              <p><strong>محمد</strong> حموش</p>
              <p><strong>زوهير</strong> جبيلو</p>
              <p><strong>حمزة</strong> البارودي</p>
              <p><strong>بلال</strong> نفاعي</p>
              <p><strong>سعيد</strong> أزروال</p>
              <p><strong>أوسامة</strong> دهر</p>
              <p><strong>يونس</strong> دويب</p>
              <p><strong>عصام</strong> الكعبوني</p>
              <p><strong>حمزة</strong> اليماني</p>
              <p><strong>علي</strong> البناني</p>
            </div>
    
            <div className="forwards">
              <h2>المهاجمين</h2>
              <p><strong>بدر</strong> مهدوب</p>
              <p><strong>طه</strong> ضيف</p>
              <p><strong>وسيم</strong> غريبا</p>
              <p><strong>ياسين</strong> مرزوڭي</p>
              <p><strong>أسامة</strong> الصغيري</p>
              <p><strong>صاماكي</strong> أداما</p>
              <p><strong>تراوري</strong> أداما</p>
              <p><strong>حمزة</strong> قرقور</p>
              <p><strong>رضوان</strong> المرس</p>
              <p><strong>إبراهيم</strong> العماري</p>
            </div>
          </div>
    
          <div className="ft-logo">
            <img src={USMOLogo} alt="USMO Logo" />
          </div>
    
          <div className="ft-title">
            الإتحاد الرياضي الإسلامي الوجدي
          </div>
    
          <div className="web-info">
            <p>
              تم إنشاء هذا الموقع وإدارته من طرف أحد مشجعي الاتحاد.
            </p>
            <p>-------</p>
            <p>
              شكرًا لـ <a className="fb-link" href="https://www.facebook.com/oujda.watanya/" target="_blank" rel="noreferrer">وجدة الوطنية</a>، التي ساهمت في إنشاء هذا الموقع من خلال توفير معلومات عن تاريخ النادي.
            </p>
    
            <p>
              إذا كانت لديك أي تعليقات أو طلبات أو اقتراحات، أو إذا كنت ترغب في المساهمة في الموقع، فلا تتردد في التواصل معي عبر البريد الإلكتروني: <a className="fb-link" href="mailto:karimdev@usmoujda.com">karimdev@usmoujda.com</a>
            </p>
          </div>
        </footer>
  );
}