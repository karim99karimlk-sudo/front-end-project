import { Link } from 'react-router';
import './History.css';

export default function History() {
  return (
    <section className="history-section" dir="rtl">
      <div className="section-header">
        <h2>تاريخ النادي</h2>
        <p className="subtitle">عراقة، أمجاد، وهوية الرياضة بشرق المملكة</p>
      </div>

      <div className="history-card">
        <div className="history-badge-wrapper">
          <div className="founding-badge">
            <span className="year">1958</span>
            <span className="label">سنة التأسيس</span>
          </div>
        </div>

        <div className="history-content">
          <p className="history-intro">
            <strong>الاتحاد الرياضي الإسلامي الوجدي</strong> (المعروف اختصارًا بـ <strong>USMO</strong>) هو أحد أعرق وأبرز الأندية المغربية. تأسس سنة <strong>1958</strong> في قلب مدينة وجدة بشرق المملكة. يرتدي الفريق ألوان الأسود والأبيض، ويُلقب بـ <em>"لقلق الشرق"</em> من طرف جماهيره . يلعب النادي حاليًا في القسم الثاني من البطولة الوطنية الاحترافية (BOTOLA PRO 2).
          </p>

          <p>
            يخوض الفريق مبارياته المحلية على أرضية <strong>الملعب البلدي بوجدة</strong> (المعروف بـ "الملعب القديم")، والذي يتسع لنحو 10,000 متفرج. وقد شهد هذا المعقل التاريخي محطات خالدة في مسيرة النادي وانتصارات لا تُنسى في وجه أعرق الأندية.
          </p>

          <p>
            تُعتبر مدرسة الاتحاد الإسلامي الوجدي خزانًا حقيقيًا للمواهب، حيث أنجبت العديد من الأسماء البارزة على الصعيدين الوطني والدولي، وواصلت على مر السنين ترسيخ سمعة قوية في تكوين وصقل اللاعبين الشباب.
          </p>
        </div>
      </div>

      <div className="history-link-wrapper">
        <Link to="/history" className="full-link">
          اقرأ التاريخ بالكامل <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
}