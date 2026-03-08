<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  .orl-quiz {
    --dirt: #1A1410;
    --bark: #2C2018;
    --clay: #5C3D1E;
    --rust: #c70909;
    --ember: #e01010;
    --sand: #D4B483;
    --pale: #F0E6D3;
    --green: #3D6B35;
    --white: #FAF6F0;
    background: var(--dirt);
    border-radius: 12px;
    padding: 40px 32px 60px;
    margin: 0 auto;
    font-family: 'Source Sans 3', sans-serif;
    color: var(--pale);
    overflow: hidden;
    position: relative;
  }
  .orl-quiz h1, .orl-quiz h2, .orl-quiz h3 { border-bottom: none !important; margin-top: 0 !important; color: inherit; }
  .orl-quiz a { color: inherit !important; text-decoration: none !important; }
  * { box-sizing: border-box; }
  .orl-quiz .q-header { text-align: center; margin-bottom: 40px; }
  .orl-quiz .logo-bar { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px; }
  .orl-quiz .logo-bolt { width: 32px; height: 32px; background: var(--ember); clip-path: polygon(60% 0%, 100% 0%, 40% 50%, 80% 50%, 0% 100%, 20% 55%, -5% 55%); flex-shrink: 0; }
  .orl-quiz .logo-text { font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: var(--sand); }
  .orl-quiz .q-header h1 { font-family: 'Oswald', sans-serif !important; font-size: clamp(28px, 5vw, 48px) !important; font-weight: 700 !important; line-height: 1.05 !important; letter-spacing: 1px !important; text-transform: uppercase !important; color: var(--white) !important; margin-bottom: 6px !important; padding-bottom: 0 !important; }
  .orl-quiz .q-header h1 span { color: var(--ember); }
  .orl-quiz .header-divider { width: 60px; height: 3px; background: var(--rust); margin: 14px auto; }
  .orl-quiz .q-header p { font-size: 15px; color: var(--sand); max-width: 460px; margin: 0 auto; line-height: 1.6; }
  .orl-quiz .progress-label { display: flex; justify-content: space-between; font-size: 12px; color: var(--clay); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; font-family: 'Oswald', sans-serif; }
  .orl-quiz .progress-bar { background: var(--bark); border-radius: 2px; height: 4px; margin-bottom: 32px; overflow: hidden; }
  .orl-quiz .progress-fill { height: 100%; background: linear-gradient(90deg, var(--rust), var(--ember)); border-radius: 2px; transition: width 0.5s ease; }
  .orl-quiz .question-card { background: var(--bark); border: 1px solid rgba(92,61,30,0.5); border-radius: 8px; padding: 32px 36px; animation: orlSlideUp 0.35s ease; }
  @keyframes orlSlideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .orl-quiz .question-number { font-family: 'Oswald', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: var(--ember); margin-bottom: 10px; }
  .orl-quiz .question-text { font-family: 'Oswald', sans-serif; font-size: clamp(18px, 3.5vw, 26px); font-weight: 600; color: var(--white); line-height: 1.2; margin-bottom: 6px; }
  .orl-quiz .question-sub { font-size: 14px; color: var(--sand); margin-bottom: 24px; line-height: 1.5; }
  .orl-quiz .options { display: grid; gap: 10px; }
  .orl-quiz .options.cols-2 { grid-template-columns: 1fr 1fr; }
  @media (max-width: 560px) { .orl-quiz .options.cols-2 { grid-template-columns: 1fr; } .orl-quiz .question-card { padding: 22px 18px; } .orl-quiz { padding: 28px 16px 48px; } }
  .orl-quiz .option-btn { background: var(--dirt); border: 1.5px solid rgba(92,61,30,0.6); border-radius: 6px; padding: 14px 18px; cursor: pointer; text-align: left; transition: all 0.2s ease; position: relative; overflow: hidden; width: 100%; }
  .orl-quiz .option-btn::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--ember); transform: scaleY(0); transition: transform 0.2s ease; }
  .orl-quiz .option-btn:hover { border-color: var(--ember); background: rgba(200,80,26,0.08); transform: translateX(2px); }
  .orl-quiz .option-btn:hover::before { transform: scaleY(1); }
  .orl-quiz .option-btn:active { transform: scale(0.98); }
  .orl-quiz .option-icon { font-size: 20px; margin-bottom: 5px; display: block; }
  .orl-quiz .option-title { font-family: 'Oswald', sans-serif; font-size: 15px; font-weight: 600; color: var(--white); letter-spacing: 0.5px; margin-bottom: 2px; }
  .orl-quiz .option-desc { font-size: 13px; color: var(--sand); line-height: 1.4; }
  .orl-quiz .back-btn { background: none; border: none; color: var(--clay); font-size: 13px; font-family: 'Oswald', sans-serif; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; display: flex; align-items: center; gap: 8px; margin-bottom: 18px; padding: 0; transition: color 0.2s; }
  .orl-quiz .back-btn:hover { color: var(--sand); }
  .orl-quiz .result-card { animation: orlSlideUp 0.4s ease; }
  .orl-quiz .result-header { background: linear-gradient(135deg, var(--clay), var(--rust)); border-radius: 8px 8px 0 0; padding: 28px 36px; position: relative; overflow: hidden; }
  .orl-quiz .result-badge { display: inline-block; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); border-radius: 30px; font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; padding: 5px 14px; color: var(--pale); margin-bottom: 12px; }
  .orl-quiz .result-name { font-family: 'Oswald', sans-serif; font-size: clamp(22px, 4vw, 36px); font-weight: 700; text-transform: uppercase; color: var(--white); line-height: 1.1; margin-bottom: 10px; }
  .orl-quiz .result-tagline { font-size: 14px; color: rgba(240,230,211,0.85); line-height: 1.5; max-width: 460px; }
  .orl-quiz .result-body { background: var(--bark); border: 1px solid rgba(92,61,30,0.5); border-top: none; border-radius: 0 0 8px 8px; padding: 28px 36px; }
  .orl-quiz .result-section-title { font-family: 'Oswald', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: var(--ember); margin-bottom: 12px; }
  .orl-quiz .what-you-get { margin-bottom: 24px; }
  .orl-quiz .item-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 6px; }
  .orl-quiz .item-chip { background: rgba(0,0,0,0.3); border: 1px solid var(--clay); border-radius: 4px; padding: 5px 10px; font-size: 12px; font-family: 'Oswald', sans-serif; letter-spacing: 0.5px; color: var(--sand); }
  .orl-quiz .item-chip.optional { border-style: dashed; opacity: 0.75; }
  .orl-quiz .optional-note { font-size: 12px; color: var(--clay); margin-top: 5px; font-style: italic; }
  .orl-quiz .why-this-works { background: rgba(0,0,0,0.2); border-left: 3px solid var(--green); padding: 14px 16px; border-radius: 0 4px 4px 0; margin-bottom: 24px; }
  .orl-quiz .why-this-works p { font-size: 14px; color: var(--pale); line-height: 1.6; margin: 0; }
  .orl-quiz .cta-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
  .orl-quiz .cta-primary { background: linear-gradient(135deg, var(--rust), var(--ember)); color: white !important; font-family: 'Oswald', sans-serif; font-size: 15px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; padding: 13px 26px; border: none; border-radius: 5px; cursor: pointer; transition: all 0.2s; flex: 1; min-width: 160px; text-decoration: none !important; display: inline-block; text-align: center; }
  .orl-quiz .cta-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 22px rgba(196,9,9,0.4); color: white !important; }
  .orl-quiz .cta-secondary { background: transparent; color: var(--sand) !important; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; padding: 13px 22px; border: 1.5px solid var(--clay); border-radius: 5px; cursor: pointer; transition: all 0.2s; flex: 1; min-width: 140px; }
  .orl-quiz .cta-secondary:hover { border-color: var(--sand); color: var(--white) !important; }
  .orl-quiz .also-consider { margin-top: 28px; padding-top: 22px; border-top: 1px solid rgba(92,61,30,0.4); }
  .orl-quiz .alt-bundle { background: rgba(0,0,0,0.2); border: 1px solid rgba(92,61,30,0.4); border-radius: 6px; padding: 12px 16px; cursor: pointer; transition: all 0.2s; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; }
  .orl-quiz .alt-bundle:hover { border-color: var(--clay); background: rgba(92,61,30,0.15); }
  .orl-quiz .alt-bundle-name { font-family: 'Oswald', sans-serif; font-size: 14px; color: var(--pale); }
  .orl-quiz .alt-bundle-why { font-size: 13px; color: var(--sand); margin-top: 2px; }
  .orl-quiz .alt-arrow { color: var(--clay); font-size: 18px; flex-shrink: 0; margin-left: 12px; }
  .orl-quiz .quiz-disclaimer { text-align: center; font-size: 12px; color: var(--clay); margin-top: 28px; line-height: 1.5; }
</style>

<div class="orl-quiz">
  <div class="q-header">
    <div class="logo-bar">
      <div class="logo-bolt"></div>
      <span class="logo-text">AllSpark Power &middot; Easter Sale</span>
    </div>
    <h1>Find Your<br><span>Perfect Bundle</span></h1>
    <div class="header-divider"></div>
    <p>Answer 3 quick questions and we'll match you with the right Easter bundle for your setup &mdash; no jargon, no guesswork.</p>
  </div>
  <div id="orl-quiz-area"></div>
  <p class="quiz-disclaimer">Not sure? <strong style="color:#D4B483">Chat to the ORL team</strong> &mdash; we're happy to help you get it right.</p>
</div>

<script src="https://cdn.jsdelivr.net/gh/offroadliving/orl-assets@main/bundle-finder.js"></script>
