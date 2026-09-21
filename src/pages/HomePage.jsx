import { Link } from 'react-router'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import './HomePage.css';
import Matches from '../components/Matches';


export function HomePage() {
  return (
    <>
      <title>USMOUJDA</title>

      < Header />

      < Hero />

      <Matches />

      <section className="standings">
        <h2>ترتيب البطولة الإحترافية للقسم الوطني 2</h2>

        <div className="table">
          <div className="table-header">
            <span>#</span>
            <span className="team">الفريق</span>
            <span>ل</span>
            <span>ف</span>
            <span>ت</span>
            <span>خ</span>
            <span>ل</span>
            <span>ع</span>
            <span>-/+</span>
            <span>النقاط</span>
          </div>

          <div className="table-row active">
            <span>1</span>
            <span className="team">USMO</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>

          <div className="table-row">
            <span>2</span>
            <span className="team">WAF</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>

          <div className="table-row">
            <span>3</span>
            <span className="team">CAK</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>

          <div className="table-row">
            <span>4</span>
            <span className="team">JSS</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>

          <div className="table-row">
            <span>5</span>
            <span className="team">OCS</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>
        </div>

        <Link to="/standings" className="full-link">
          الترتيب كامل
        </Link>
      </section>

      <section className="squad-container">
        <section className="position-group">
          <h2 className="position-title">الفريق الأول</h2>
          <div className="player-grid">
            <div className="player-card">
              <div className="player-card-inner">
                <div className="player-card-front">
                  <span className="player-number"></span>
                  <div
                    className="player-image-placeholder"
                    style={{ backgroundImage: "url('USMO IMG/Team/Aklidou.jpg')" }}
                  ></div>
                  <div className="player-info">
                    <span className="player-name">
                      <br />
                    </span>
                  </div>
                </div>
                <div className="player-card-back">
                  <div className="player-stats">
                    <p>
                      <span>Age:</span> 38
                    </p>
                    <p>
                      <span>Height:</span> 1.93m
                    </p>
                    <p>
                      <span>Matches:</span> 34
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-card-inner">
                <div className="player-card-front">
                  <span className="player-number"></span>
                  <div
                    className="player-image-placeholder"
                    style={{ backgroundImage: "url('USMO IMG/Team/Azeroual.jpg')" }}
                  ></div>
                  <div className="player-info">
                    <span className="player-name">
                      <br />
                    </span>
                  </div>
                </div>
                <div className="player-card-back">
                  <div className="player-stats">
                    <p>
                      <span>Age:</span> 35
                    </p>
                    <p>
                      <span>Height:</span> 1.92m
                    </p>
                    <p>
                      <span>Matches:</span> 12
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-card-inner">
                <div className="player-card-front">
                  <span className="player-number"></span>
                  <div
                    className="player-image-placeholder"
                    style={{ backgroundImage: "url('USMO IMG/Team/Badr mahdoub.jpg')" }}
                  ></div>
                  <div className="player-info">
                    <span className="player-name">
                      <br />
                    </span>
                  </div>
                </div>
                <div className="player-card-back">
                  <div className="player-stats">
                    <p>
                      <span>Age:</span> 24
                    </p>
                    <p>
                      <span>Height:</span> 1.90m
                    </p>
                    <p>
                      <span>Matches:</span> 2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="player-card">
              <div className="player-card-inner">
                <div className="player-card-front">
                  <span className="player-number"></span>
                  <div
                    className="player-image-placeholder"
                    style={{ backgroundImage: "url('USMO IMG/Team/Abdel Allah amghar.jpg')" }}
                  ></div>
                  <div className="player-info">
                    <span className="player-name">
                      <br />
                    </span>
                  </div>
                </div>
                <div className="player-card-back">
                  <div className="player-stats">
                    <p>
                      <span>Age:</span> 19
                    </p>
                    <p>
                      <span>Height:</span> 1.88m
                    </p>
                    <p>
                      <span>Matches:</span> 0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-link">
          <Link
            style={{
              display: 'flex',
              maxWidth: 'fit-content',
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            to="/team"
            className="full-link"
          >
            الفريق كامل
          </Link>
        </section>
      </section>

      <section className="history">
        <h2>التاريخ</h2>
        <p>
          <strong>الاتحاد الرياضي الإسلامي الوجدي</strong>، المعروف أيضًا باسم <strong>USMO</strong>، هو أحد من أعرق الأندية المغربية. تأسس سنة 1958 في قلب مدينة وجدة بالمغرب. ألوان النادي هي الأسود والأبيض، ويُلقب الفريق بـ"لقلق الشرق" من طرف جماهيره. يلعب الفريق حاليًا في القسم الثاني من البطولة المغربية الاحترافية، BOTOLA PRO 2.
        </p>

        <p>
          يلعب النادي المباريات التي هي على أرضه في الملعب البلدي، المعروف أيضًا باسم "الملعب القديم"، والذي يتسع لحوالي 10000 متفرج. وقد شهد هذا الملعب لحظات تاريخية للنادي، بما في ذلك انتصارات لا تُنسى ومباريات حاسمة.
        </p>

        <p>
          أنتجت مدرسة النادي العديد من الأسماء البارزة في كرة القدم على الصعيدين الوطني والدولي. وعلى مرّ السنوات، بنى النادي سمعة قوية في تطوير المواهب الشابة وتكوين لاعبين محترفين للمستقبل.
        </p>
        <Link to="/history" className="full-link" style={{ marginBottom: '10px' }}>
          التاريخ كامل
        </Link>
      </section>

      <Footer />
    </>
  );
}