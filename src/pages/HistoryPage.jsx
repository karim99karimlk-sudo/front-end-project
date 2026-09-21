import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import './HistoryPage.css'
import BNlogo from './USMO IMG/logo/USMO Black-white.logo.jpeg'
import FisrtTeam from './USMO IMG/History/USMO TEAM 1958.jpg'
import BaAroubImg from './USMO IMG/History/WhatsApp Image 2025-09-03 at 11.13.24.jpeg'
import USMOTeam86 from './USMO IMG/History/usmo-1986.jpg'
import USMOTeam90 from './USMO IMG/History/1990 PROMOTION TEAM.jpeg'

export function HistoryPage() {
  return (
    <>
      <title>History</title>

      <Header />

      <main>
        <div className="history-container">
          <h2 id="historyTitle" className="section-title">
            تاريخ الفريق
          </h2>

          <div className="history-item">
            <div className="history-text">
              <h3 id="historyIntro">تقديم</h3>
              <p id="para1">
                الإتحاد الرياضي الإسلامي الوجدي، المعروف أيضًا باسم USMO، هو أحد أقدم الأندية المغربية.
                تأسس في عام 1958 في قلب مدينة وجدة، المغرب.
                ألوان النادي هي الأسود والأبيض، ويُلقب الفريق بـ "اللقلق الشرقي" من قبل مؤيديه.
                يلعب USMO حاليًا في الدرجة الثانية المغربية، BOTOLA PRO 2.
              </p>
            </div>
            <div className="history-image">
              <img src={BNlogo} alt="USMO Foundation" />
            </div>
          </div>

          <div className="history-item reverse">
            <div className="history-text">
              <h3 id="paraQ">تأسيس النادي</h3>
              <p id="para2">
                بدأت القصة عندما خطرت فكرة إنشاء نادٍ لكرة القدم لثلاثة أصدقاء عبد الرحمن بلعوشي، وبنيونس مزواري،
                وبومدين بتموشنت بعد أن الطاقة الشبابية الغير محدودة من مواهب في حيهم "شارع الدار البيضاء".
                في ذلك الوقت، كان مقر النادي مقهى أولاد ميمون.
              </p>
              <p id="para3">
                في البداية، عينوا الحاج ميمون مؤمن كرئيس شرفي بعد إقناعه،
                ومكي بوشعيب ككشاف مواهب، والحاج العربي بن لخضر الدرفوفي، المعروف بـ "با عروب"
                كمدرب، والذي يعتبر أول مدرب في تاريخ النادي.
              </p>
            </div>
            <figure className="history-image">
              <img src={FisrtTeam} alt="USMO first team" />
              <figcaption id="img2Cap" style={{ textAlign: 'center', color: '#4b4b4b' }}>
                الفريق الأول للنادي
              </figcaption>
            </figure>
          </div>

          <div className="history-item">
            <div className="history-text">
              <h3 id="para4title">بدايات النادي</h3>
              <p id="para4">
                خلال موسم 1962/1963، حقق نادي الاتحاد الرياضي الإسلامي الوجدي الصعود إلى القسم الثاني لأول مرة في تاريخه، بعد فوزه في المباراة النهائية ضد فريق خريبكة.
                لكن في الموسم الموالي، عاد الفريق إلى القسم الثالث بعد هبوطه.
                ورغم هذه النكسة، أظهر اللاعبون عزيمة كبيرة وروحًا جماعية عالية، حيث عملوا بجد وقدموا موسمًا استثنائيًا لم يتلقوا فيه أي هزيمة، مما مكنهم من تحقيق الصعود مجددًا إلى القسم الثاني خلال موسم 1965/1966.
                وبعد عامين، خلال موسم 1968/1969، كان النادي قريبًا جدًا من تحقيق الصعود إلى القسم الوطني الأول، حيث أنهى الموسم في المركز الثاني ضمن القسم الثاني (شمال) برصيد 51 نقطة، بفارق ثلاث نقاط فقط خلف فريق جمعية سلا (AS Salé) الذي حجز بطاقة الصعود.
                وفي نفس الموسم، حقق فريق الشبان للاتحاد الرياضي الإسلامي الوجدي إنجازًا مميزًا بتتويجه بلقب البطولة الوطنية المغربية، بعد فوزه في النهائي على اتحاد الدار البيضاء.
              </p>
            </div>
            <figure className="history-image">
              <img src={BaAroubImg} alt="Ba Aroub" />
              <figcaption style={{ textAlign: 'center', color: '#4b4b4b' }}>
                المدرب الأول للنادي، “با عروب” (رحمه الله) (1927–2020).
              </figcaption>
            </figure>
          </div>

          <div className="history-item reverse">
            <div className="history-text">
              <h3 id="para5title">الجيل الذهبي</h3>
              <p id="para5">
                في موسم 1974/75، هبط نادي الاتحاد الرياضي الإسلامي الوجدي إلى القسم الثالث،
                حيث قضى النادي ستة مواسم كاملة قبل العودة إلى القسم الثاني في موسم 1980/81.
                يعتبر العديد من المشجعين القدامى أن الثمانينيات هي العصر الذهبي لنادي الاتحاد الرياضي الإسلامي الوجدي.
                في موسم 1981/82، لعب النادي مباراة فاصلة تاريخية للصعود إلى القسم الوطني الأول ضد اتحاد تواركة.
                كما وصل الفريق إلى نصف نهائي كأس العرش في عام 1987،
                حيث هُزم 2–1 على يد غريمه المحلي نهضة بركان في مباراة أقيمت في ملعب الأمير مولاي عبد الله بالرباط.
              </p>
            </div>
            <figure className="history-image">
              <img src={USMOTeam86} alt="USMO vs rsb" />
              <figcaption style={{ textAlign: 'center', color: '#4b4b4b', fontSize: '10px' }}>
                USMO VS RSB - THRONE CUP 1987 - Moulay Abdellah Stadium .<br />
                الواقفون من اليمين: إبراهيم الزهواني، محمد الإدريسي، علي الصديق، مصطفى المباركي، قويدر البحري، قويدر بلحوان.<br />
                الجالسون من اليمين: محمد شنوف، محمد مساعد، سمير رمضاني، عبد المولى بنتاهر، إدريس عزاوي.
              </figcaption>
            </figure>
          </div>

          <div className="history-item">
            <div className="history-text">
              <h3>التسعينيات</h3>
              <p>
                تحقق حلم جماهير وجدة أخيرًا عندما صعد نادي الاتحاد الرياضي الإسلامي الوجدي إلى القسم الوطني الأول للمرة الأولى في موسم 1990/91. ومع ذلك،
                كانت إقامته في الدرجة قصيرة الأمد، حيث هبط في نفس الموسم.
                وما تلا ذلك كان فترة من التراجع للنادي، والتي أدت في النهاية إلى هبوطه إلى الأقسام الهواة في منتصف التسعينيات.
              </p>
            </div>
            <figure className="history-image">
              <img src={USMOTeam90} alt="1990" />
              <figcaption style={{ textAlign: 'center', color: '#4b4b4b', fontSize: '10px' }}>
                مباراة الصعود إلى القسم الوطني الأول لأول مرة أمام حسنية الناظور بمدينة العروي. <br />
                الواقفون من اليمين: العابد (رحمه الله)، المباركي، بقال، گوار، الزهواني، السميري. <br />
                الجالسون من اليمين: مالا، أبخار، الصوفي، إدريس، عبد المولى. <br />
                مدرب الفريق: سي محمد التيجيني (رحمه الله). <br />
                رئيس النادي آنذاك: جمال الدين.
              </figcaption>
            </figure>
          </div>
        </div>
      </main>

      <Footer />
    </>

  );
}