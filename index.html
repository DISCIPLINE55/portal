<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AL KHULAFAU 2025 - Student Search & Enrollment (PWA)</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
  <style>
    :root{--bg1:#74ABE2;--bg2:#5563DE;--card:#ffffff}
    *{box-sizing:border-box}
    body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial; margin:0; min-height:100vh; background:linear-gradient(135deg,var(--bg1),var(--bg2)); display:flex; align-items:center; justify-content:center; padding:24px}
    .app{width:100%;max-width:1000px;background:var(--card);border-radius:16px;padding:20px;box-shadow:0 10px 40px rgba(12,20,40,0.2)}
    .header{display:flex;align-items:center;justify-content:space-between;gap:12px}
    h1{margin:0;font-size:20px}
    .tabs{display:flex;gap:8px;margin-top:14px}
    .tab{padding:8px 12px;border-radius:10px;border:1px solid #e6e9ef;background:#f7f8fb;cursor:pointer}
    .tab.active{background:linear-gradient(90deg,var(--bg2),#3b49b7);color:#fff;border:none}
    .content{margin-top:18px}
    .row{display:flex;gap:12px}
    .col{flex:1}
    input[type=text],select,input[type=file],input[type=date],input[type=password]{width:100%;padding:10px;border-radius:8px;border:1px solid #e3e6ee}
    label{display:block;margin-bottom:6px;font-size:13px}
    .btn{display:inline-block;padding:10px 14px;border-radius:10px;border:none;background:var(--bg2);color:#fff;cursor:pointer}
    .btn.secondary{background:#2ecc71}
    .panel{margin-top:12px;padding:14px;border-radius:10px;background:#f8f9fc;border:1px solid #eef2ff}
    table{width:100%;border-collapse:collapse;margin-top:8px}
    th,td{padding:8px;border-bottom:1px solid #eee;text-align:left;font-size:13px}
    .small{font-size:12px;color:#666}
    .result-card{padding:10px;border-radius:8px;background:#fff;border:1px solid #eef2ff}
    @media(max-width:720px){.row{flex-direction:column}}
    .note{font-size:13px;color:#444;margin-top:8px}
    /* Modal */
    .modal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5)}
    .modal-card{background:#fff;padding:20px;border-radius:12px;width:360px;max-width:90%}
    .muted{color:#666;font-size:13px}
    .role-badge{padding:6px 8px;border-radius:8px;background:#f1f3ff;color:#2b3bfb;font-weight:600}
    .disabled{opacity:0.45;pointer-events:none}
  </style>
</head>
<body>
  <div class="app" role="application">
    <div class="header">
      <div>
        <h1>AL KHULAFAU 2025 — Student Search & Enrollment</h1>
        <div class="small">PWA-capable · Offline enrollment support (localStorage) · Exports to Excel</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <div id="currentUser" class="muted">Not signed in</div>
        <button class="btn" id="installBtn" style="display:none">Install</button>
        <button class="btn secondary" id="signBtn">Sign In</button>
      </div>
    </div>

    <div class="tabs" role="tablist">
      <div class="tab active" data-tab="search">🔍 Search Placed</div>
      <div class="tab" data-tab="enroll">📝 Enrollment</div>
      <div class="tab" data-tab="manage">⚙️ Manage Data</div>
    </div>

    <div class="content">

      <!-- SEARCH TAB -->
      <div id="search" class="tab-content">
        <div class="panel">
          <div class="row">
            <div class="col">
              <label>Load Placed Candidates Excel (Placed sheet)</label>
              <input type="file" id="placedFile" accept=".xlsx" />
            </div>
            <div class="col">
              <label>Search by Index number or Name</label>
              <input type="text" id="placedQuery" placeholder="e.g. 0801061023 or 'ABDUL'" />
            </div>
            <div style="display:flex;align-items:flex-end;gap:8px">
              <button class="btn" id="placedSearchBtn">Search</button>
            </div>
          </div>

          <div id="placedResults" style="margin-top:12px"></div>
        </div>
      </div>

      <!-- ENROLLMENT TAB -->
      <div id="enroll" class="tab-content" style="display:none">
        <div class="panel">
          <div class="row">
            <div class="col">
              <label>Load Enrollment Excel (optional - will append to this sheet)</label>
              <input type="file" id="enrollFile" accept=".xlsx" />
            </div>
            <div class="col">
              <label>Current Enrollment Count</label>
              <div id="enrollCount" class="result-card">0</div>
            </div>
          </div>

          <hr style="margin:12px 0" />

          <div style="margin-top:8px">
            <h3 style="margin:0 0 8px 0">New Student Enrollment</h3>
            <div class="row">
              <div class="col">
                <label>Index Number</label>
                <input type="text" id="e_index" />
              </div>
              <div class="col">
                <label>Name</label>
                <input type="text" id="e_name" />
              </div>
            </div>
            <div class="row" style="margin-top:8px">
              <div class="col">
                <label>Gender</label>
                <select id="e_gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="col">
                <label>Phone Number</label>
                <input type="text" id="e_phone" />
              </div>
            </div>

            <div class="row" style="margin-top:8px">
              <div class="col">
                <label>Residence Type</label>
                <select id="e_res">
                  <option>Day</option>
                  <option>Boarding</option>
                </select>
              </div>
              <div class="col">
                <label>Program</label>
                <input type="text" id="e_prog" placeholder="e.g. Gen. Arts / Agric / Bus" />
              </div>
            </div>

            <div class="row" style="margin-top:8px">
              <div class="col">
                <label>Class / Form</label>
                <input type="text" id="e_class" placeholder="e.g. Form 1" />
              </div>
              <div class="col">
                <label>Date Enrolled</label>
                <input type="date" id="e_date" />
              </div>
            </div>

            <div style="margin-top:12px; display:flex; gap:8px">
              <button class="btn" id="addEnrollBtn">Add to Enrollment (offline-safe)</button>
              <button class="btn secondary" id="exportEnrollBtn">Export Enrollment Excel</button>
            </div>

            <div id="enrollList" style="margin-top:12px"></div>
          </div>
        </div>
      </div>

      <!-- MANAGE TAB -->
      <div id="manage" class="tab-content" style="display:none">
        <div class="panel">
          <h3 style="margin-top:0">Manage Data</h3>
          <div class="row">
            <div class="col">
              <label>Clear in-memory enrollment (careful)</label>
              <button class="btn" id="clearEnrollBtn">Clear Local Enrollment</button>
            </div>
            <div class="col">
              <label>Download sample templates</label>
              <div style="display:flex;gap:8px">
                <button class="btn" id="downloadPlacedTemplate">Placed Template</button>
                <button class="btn" id="downloadEnrollTemplate">Enrollment Template</button>
              </div>
            </div>
          </div>

          <div class="note">
            <strong>Service Worker:</strong> Service worker registration is <em>disabled</em> in this single-file sandboxed environment because many browsers disallow registering service workers from blob URLs.
            To enable offline caching via a service worker when you host the app yourself, create a separate <code>sw.js</code> file on the same origin and register it with <code>navigator.serviceWorker.register('/sw.js')</code>. Use the "Download service worker" button below to get a starter file you can host.
          </div>

          <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
            <button class="btn" id="downloadSwBtn">Download service worker (sw.js)</button>
            <div class="muted">&nbsp;</div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <!-- Sign-in modal -->
  <div id="signinModal" class="modal" style="display:none">
    <div class="modal-card">
      <h3 style="margin-top:0">Sign In</h3>
      <div style="margin-bottom:8px" class="muted">Use default accounts to test: <strong>admin/admin</strong> (Admin), <strong>staff/staff</strong> (Staff), <strong>viewer/viewer</strong> (Viewer)</div>
      <label>Username</label>
      <input type="text" id="signin_user" />
      <label style="margin-top:8px">Password</label>
      <input type="password" id="signin_pass" />
      <div style="margin-top:10px;display:flex;gap:8px;justify-content:flex-end">
        <button class="btn" id="signinSubmit">Sign In</button>
        <button class="btn secondary" id="signinCancel">Cancel</button>
      </div>
      <div style="margin-top:8px" class="muted">Role-based permissions: Admin (add/edit/clear/export), Staff (add/export), Viewer (search only).</div>
    </div>
  </div>

  <script>
    // --- state ---
    let placedData = [];
    let enrollmentData = JSON.parse(localStorage.getItem('enrollmentData') || '[]');
    let currentUser = JSON.parse(localStorage.getItem('ak_current_user') || 'null');

    // --- default users (local only) ---
    const defaultUsers = [
      {username:'admin', password:'admin', role:'Admin'},
      {username:'staff', password:'staff', role:'Staff'},
      {username:'viewer', password:'viewer', role:'Viewer'}
    ];
    // merge with saved users
    let users = JSON.parse(localStorage.getItem('ak_users') || 'null');
    if(!users){ users = defaultUsers; localStorage.setItem('ak_users', JSON.stringify(users)); }

    // --- UI helpers ---
    function updateUserUI(){
      const el = document.getElementById('currentUser');
      const signBtn = document.getElementById('signBtn');
      if(currentUser){ el.innerHTML = `${currentUser.username} <span class="role-badge">${currentUser.role}</span>`; signBtn.textContent='Sign Out'; }
      else { el.innerText = 'Not signed in'; signBtn.textContent='Sign In'; }
      applyPermissions();
    }

    function applyPermissions(){
      const role = currentUser ? currentUser.role : 'Viewer';
      const addBtn = document.getElementById('addEnrollBtn');
      const exportBtn = document.getElementById('exportEnrollBtn');
      const clearBtn = document.getElementById('clearEnrollBtn');
      // Admin: add, export, clear
      // Staff: add, export
      // Viewer: none of add/export/clear
      if(role==='Admin') { addBtn.classList.remove('disabled'); exportBtn.classList.remove('disabled'); clearBtn.classList.remove('disabled'); }
      else if(role==='Staff'){ addBtn.classList.remove('disabled'); exportBtn.classList.remove('disabled'); clearBtn.classList.add('disabled'); }
      else { addBtn.classList.add('disabled'); exportBtn.classList.add('disabled'); clearBtn.classList.add('disabled'); }
    }

    // --- render functions ---
    function renderPlacedResults(rows){
      const out = document.getElementById('placedResults');
      if(!rows || rows.length===0){ out.innerHTML = '<div class="result-card">No results.</div>'; return; }
      let html = '<table><thead><tr><th>Index</th><th>Name</th><th>Gender</th><th>Phone</th><th>Res</th></tr></thead><tbody>';
      rows.slice(0,200).forEach(r=>{
        html += `<tr><td>${escapeHtml(r['INDEX NUMBER']||'')}</td><td>${escapeHtml(r['NAME']||'')}</td><td>${escapeHtml(r['GENDER']||'')}</td><td>${escapeHtml(r['PHONE NUMBER']||'')}</td><td>${escapeHtml(r['RESIDENCE TYPE']||'')}</td></tr>`;
      });
      html += '</tbody></table>';
      if(rows.length>200) html += `<div class="small">Showing first 200 of ${rows.length} matches</div>`;
      out.innerHTML = html;
    }

    function renderEnrollmentList(){
      document.getElementById('enrollCount').innerText = enrollmentData.length;
      const el = document.getElementById('enrollList');
      if(enrollmentData.length===0){ el.innerHTML = '<div class="result-card small">No enrollment records stored locally.</div>'; return; }
      let html = '<table><thead><tr><th>Index</th><th>Name</th><th>Gender</th><th>Phone</th><th>Program</th><th>Date</th></tr></thead><tbody>';
      enrollmentData.forEach(r=>{
        html += `<tr><td>${escapeHtml(r['INDEX NUMBER']||'')}</td><td>${escapeHtml(r['NAME']||'')}</td><td>${escapeHtml(r['GENDER']||'')}</td><td>${escapeHtml(r['PHONE NUMBER']||'')}</td><td>${escapeHtml(r['PROGRAM']||'')}</td><td>${escapeHtml(r['DATE ENROLLED']||'')}</td></tr>`;
      });
      html += '</tbody></table>';
      el.innerHTML = html;
    }

    function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    // --- file loaders ---
    document.getElementById('placedFile').addEventListener('change', async (e)=>{
      const f = e.target.files[0]; if(!f) return;
      const data = await f.arrayBuffer();
      const wb = XLSX.read(data,{type:'array'});
      const sheet = wb.Sheets[wb.SheetNames[0]];
      placedData = XLSX.utils.sheet_to_json(sheet);
      alert('Placed candidates loaded: ' + placedData.length);
    });

    document.getElementById('enrollFile').addEventListener('change', async (e)=>{
      const f = e.target.files[0]; if(!f) return;
      const data = await f.arrayBuffer();
      const wb = XLSX.read(data,{type:'array'});
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const loaded = XLSX.utils.sheet_to_json(sheet);
      // merge: append loaded into local enrollment data but avoid duplicates by INDEX NUMBER
      let added = 0;
      loaded.forEach(rec=>{
        const idx = String(rec['INDEX NUMBER']||'').trim();
        if(!idx) return;
        const dup = enrollmentData.find(x=>String(x['INDEX NUMBER']||'').trim()===idx);
        if(!dup){ enrollmentData.push(rec); added++; }
      });
      localStorage.setItem('enrollmentData', JSON.stringify(enrollmentData));
      renderEnrollmentList();
      alert('Enrollment sheet loaded and appended (new records): ' + added + ' records');
    });

    // --- search placed ---
    document.getElementById('placedSearchBtn').addEventListener('click', ()=>{
      const q = document.getElementById('placedQuery').value.trim().toLowerCase();
      if(!q){ alert('Enter query'); return; }
      const results = placedData.filter(r => (String(r['INDEX NUMBER']||'').toLowerCase().includes(q) || String(r['NAME']||'').toLowerCase().includes(q)) );
      renderPlacedResults(results);
    });

    // --- enrollment validation helpers ---
    function isValidPhone(phone){
      if(!phone) return false;
      const digits = phone.replace(/\D/g,'');
      return digits.length >= 8 && digits.length <= 12;
    }

    function isDuplicateIndex(idx){
      if(!idx) return false;
      idx = String(idx).trim();
      return enrollmentData.some(e => String(e['INDEX NUMBER']||'').trim()===idx) || placedData.some(p => String(p['INDEX NUMBER']||'').trim()===idx);
    }

    // --- enrollment add ---
    document.getElementById('addEnrollBtn').addEventListener('click', ()=>{
      // permission
      if(!currentUser || (currentUser.role!=='Admin' && currentUser.role!=='Staff')){ alert('You do not have permission to add enrollment (sign in as Admin or Staff).'); return; }

      const entry = {
        'INDEX NUMBER': document.getElementById('e_index').value.trim(),
        'NAME': document.getElementById('e_name').value.trim(),
        'GENDER': document.getElementById('e_gender').value,
        'PHONE NUMBER': document.getElementById('e_phone').value.trim(),
        'RESIDENCE TYPE': document.getElementById('e_res').value,
        'PROGRAM': document.getElementById('e_prog').value.trim(),
        'CLASS': document.getElementById('e_class').value.trim(),
        'DATE ENROLLED': document.getElementById('e_date').value || new Date().toISOString().slice(0,10)
      };
      // validations
      if(!entry['INDEX NUMBER'] || !entry['NAME']){ alert('Index and Name are required'); return; }
      if(entry['PHONE NUMBER'] && !isValidPhone(entry['PHONE NUMBER'])){ alert('Phone number looks invalid. Enter 8-12 digits (or leave empty).'); return; }
      if(isDuplicateIndex(entry['INDEX NUMBER'])){ if(!confirm('A record with this index already exists in placed or enrollment. Do you still want to add?')) return; }

      enrollmentData.push(entry);
      localStorage.setItem('enrollmentData', JSON.stringify(enrollmentData));
      renderEnrollmentList();
      // clear form
      document.getElementById('e_index').value=''; document.getElementById('e_name').value=''; document.getElementById('e_phone').value='';
      alert('Student added locally — offline-safe ✅');
    });

    // --- export enrollment ---
    document.getElementById('exportEnrollBtn').addEventListener('click', ()=>{
      if(!currentUser || (currentUser.role!=='Admin' && currentUser.role!=='Staff')){ alert('You do not have permission to export enrollment (sign in as Admin or Staff).'); return; }
      if(enrollmentData.length===0){ alert('No enrollment records to export'); return; }
      const ws = XLSX.utils.json_to_sheet(enrollmentData);
      const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Enrollment');
      XLSX.writeFile(wb, 'enrollment_export.xlsx');
    });

    // --- manage ---
    document.getElementById('clearEnrollBtn').addEventListener('click', ()=>{
      if(!currentUser || currentUser.role!=='Admin'){ alert('Only Admin can clear local enrollment.'); return; }
      if(!confirm('Clear local enrollment data? This cannot be undone locally.')) return;
      enrollmentData = []; localStorage.removeItem('enrollmentData'); renderEnrollmentList();
    });

    document.getElementById('downloadPlacedTemplate').addEventListener('click', ()=>{
      const sample = [{ 'INDEX NUMBER':'0801061023','NAME':'JOHN DOE','GENDER':'Male','PHONE NUMBER':'0240000000','RESIDENCE TYPE':'Day' }];
      const ws = XLSX.utils.json_to_sheet(sample); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'Placed'); XLSX.writeFile(wb,'placed_template.xlsx');
    });
    document.getElementById('downloadEnrollTemplate').addEventListener('click', ()=>{
      const sample = [{ 'INDEX NUMBER':'ENR0001','NAME':'JANE DOE','GENDER':'Female','PHONE NUMBER':'0240000000','RESIDENCE TYPE':'Day','PROGRAM':'Gen. Arts','CLASS':'Form 1','DATE ENROLLED':'2025-10-18' }];
      const ws = XLSX.utils.json_to_sheet(sample); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'Enrollment'); XLSX.writeFile(wb,'enrollment_template.xlsx');
    });

    // --- tabs ---
    document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click', ()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c=>c.style.display='none');
      document.getElementById(t.dataset.tab).style.display='block';
    }));

    // render initial
    renderEnrollmentList(); updateUserUI();

    // --- Sign-in flow ---
    document.getElementById('signBtn').addEventListener('click', ()=>{
      if(currentUser){ if(confirm('Sign out?')){ currentUser=null; localStorage.removeItem('ak_current_user'); updateUserUI(); } return; }
      document.getElementById('signinModal').style.display='flex';
      document.getElementById('signin_user').focus();
    });
    document.getElementById('signinCancel').addEventListener('click', ()=>{ document.getElementById('signinModal').style.display='none'; });
    document.getElementById('signinSubmit').addEventListener('click', ()=>{
      const u=document.getElementById('signin_user').value.trim(); const p=document.getElementById('signin_pass').value;
      if(!u || !p){ alert('Enter username and password'); return; }
      const found = users.find(x=>x.username===u && x.password===p);
      if(!found){ alert('Invalid credentials'); return; }
      currentUser = { username: found.username, role: found.role };
      localStorage.setItem('ak_current_user', JSON.stringify(currentUser));
      document.getElementById('signinModal').style.display='none';
      updateUserUI();
      alert('Signed in as ' + currentUser.username + ' ('+currentUser.role+')');
    });

    // --- PWA install prompt handling ---
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e)=>{
      e.preventDefault();
      deferredPrompt = e;
      document.getElementById('installBtn').style.display='inline-block';
    });
    document.getElementById('installBtn').addEventListener('click', async ()=>{
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      document.getElementById('installBtn').style.display='none';
    });

    // --- Manifest setup (dynamic blob) ---
    const manifest = { name: 'AL KHULAFAU Student Tool', short_name: 'AK Student', start_url: '.', display: 'standalone', background_color:'#ffffff', theme_color:'#5563DE', icons: [{src:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192"><rect width="100%" height="100%" fill="%235563DE"/><text x="50%" y="55%" font-size="72" text-anchor="middle" fill="white">AK</text></svg>', sizes:'192x192', type:'image/svg+xml'}] };
    const manifestBlob = new Blob([JSON.stringify(manifest)], {type:'application/json'});
    const manifestURL = URL.createObjectURL(manifestBlob);
    const link = document.createElement('link'); link.rel='manifest'; link.href = manifestURL; document.head.appendChild(link);

    // --- Service worker starter download (no blob registration) ---
    const swStarter = `// Simple service worker starter for offline caching
const CACHE_NAME = 'ak-student-cache-v1';
const ASSETS = [ '/', './' ];
self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; event.respondWith(caches.match(event.request).then(r => r || fetch(event.request).then(f => { if (event.request.url.startsWith('http')) caches.open(CACHE_NAME).then(c => c.put(event.request, f.clone())); return f; })).catch(() => caches.match('/'))); });`;

    document.getElementById('downloadSwBtn').addEventListener('click', ()=>{
      const blob = new Blob([swStarter], {type: 'text/javascript'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'sw.js'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      alert('sw.js downloaded. Host it on the same origin as the app and register via navigator.serviceWorker.register(`/sw.js`)');
    });

    // --- guidance ---
    console.log('App ready. Use default accounts admin/admin, staff/staff, viewer/viewer. Service worker registration disabled in sandbox.');

  </script>
</body>
</html>
