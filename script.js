/* Wanderfolio — story data + interactions */
const M='JFMAMJJASOND';
const CH=[
{id:'bali',n:'Bali',co:'Indonesia',c:'#2f7a4f',img:'images/bali.jpg',cap:'Pura Ulun Danu, mirrored in the lake',ll:[819,273],
 tag:'The Island of Gods – Where Nature Meets Spirituality',
 story:"My journey began where the air smells of incense and frangipani. Bali greeted me with temples rising from still water, rice terraces stacked like green staircases, and a calm I didn't know I'd been missing. From volcanic mountains to peaceful jungle retreats, every day blended adventure, culture and rest — and the ceremonies, the colour, the dance made me understand this is so much more than a beach.",
 facts:['Known as the Island of the Gods — thousands of temples and a deeply spiritual culture.','On Nyepi, the Day of Silence, the whole island is silent for 24 hours.','Rice is grown with Subak, an ancient cooperative irrigation system.','Active volcanoes watch over it: Mount Batur and Mount Agung.'],
 months:'qqqgggppggqq',when:[['Apr–Jun','Pleasant weather, lush greenery, fewer crowds.'],['Jul–Aug','Peak season — ideal for beaches and outdoor adventure.'],['Sep–Oct','Great weather, comparatively fewer tourists.'],['Nov–Mar','Rainy season — quieter holidays and wellness retreats.']],
 places:[['Uluwatu Temple','Dramatic ocean views and traditional sunset performances.'],['Tegallalang Rice Terraces','Stunning layered green rice fields.'],['Nusa Penida','Dramatic cliffs and crystal-clear waters.'],['Tanah Lot Temple','An iconic sea temple surrounded by ocean waves.'],['Ubud','The cultural heart — art, nature and tradition.'],['Mount Batur','A spectacular volcano famous for sunrise views.']],
 mus:[['Agung Rai Museum of Art (ARMA)','Traditional and contemporary Balinese art.'],['Museum Puri Lukisan','Historic Balinese paintings and wood carvings.'],['Bali Museum, Denpasar','Balinese history, culture and traditional artefacts.'],['Neka Art Museum','Indonesian and Balinese paintings.']],
 todo:['Watch a traditional Kecak fire dance at Uluwatu','Trek up Mount Batur for sunrise','Try surfing at Kuta or Canggu Beach','Explore waterfalls and jungle trails','Take a Balinese cooking class','Enjoy a traditional spa and flower bath','Snorkel or scuba dive around Nusa Penida'],
 food:['Nasi Goreng','Mie Goreng','Sate Lilit','Ayam Betutu'],fe:'🍜'},
{id:'tokyo',n:'Tokyo',co:'Japan',c:'#d9577a',img:'images/tokyo.jpg',cap:'Cherry blossoms & Mount Fuji',ll:[887,151],
 tag:'The City of the Future – Where Tradition Meets Technology',
 story:"Then came Tokyo — a place where every neighbourhood feels like a different world. I stood beneath cherry blossoms with Mount Fuji glowing at sunset, then dove into neon streets, anime shops and futuristic restaurants. Centuries-old temples and robot-inspired experiences live side by side here, and somehow it all makes perfect sense.",
 facts:['Tokyo was once called Edo, before becoming Japan\'s capital.','Shinkansen bullet trains reach up to 320 km/h.','Shibuya Crossing is among the busiest pedestrian crossings on Earth.','Sakura season turns the city into a pink landscape.','Vending machines sell everything from hot drinks to unusual snacks.'],
 months:'qqgggpppnggq',when:[['Mar–Apr','Cherry blossoms, pleasant spring weather, beautiful parks.'],['May','Comfortable sightseeing, greenery, cultural festivals.'],['Jun–Aug','Festivals and fireworks — hot and humid.'],['Oct–Nov','Autumn foliage and comfortable weather.'],['Dec–Feb','Winter illuminations, seasonal food, fewer crowds.']],
 places:[['Shibuya Crossing','One of the world\'s busiest pedestrian crossings.'],['Tokyo Skytree','Spectacular panoramic views of the city.'],['Senso-ji Temple','Tokyo\'s oldest famous Buddhist temple.'],['Shinjuku','Skyscrapers, nightlife and vibrant entertainment streets.'],['Akihabara','Anime, manga, gaming and electronics.'],['Meiji Jingu','A peaceful Shinto shrine inside a beautiful forest.'],['Mount Fuji','A memorable day trip to Japan\'s iconic mountain.']],
 mus:[['teamLab Planets','Immersive digital art of interactive light and water.'],['Tokyo National Museum','Japanese art, samurai armour and historical treasures.'],['Edo-Tokyo Museum','How Edo grew into a modern metropolis.'],['Ghibli Museum','Step into the world of Studio Ghibli animation.'],['Miraikan','Robotics, space and future technology.']],
 todo:['Get lost in an immersive teamLab exhibition','Wear a kimono and explore Asakusa','Try a sushi-making workshop','Hunt for treasures in Akihabara\'s arcades','Experience a Japanese tea ceremony','Sing karaoke in a private room','Go-kart-style sightseeing (where legal and licensed)','Visit Tokyo Disneyland or DisneySea','Watch a sumo tournament'],
 food:['Sushi','Ramen','Tempura','Takoyaki','Mochi','Japanese Wagyu'],fe:'🍜'},
{id:'paris',n:'Paris',co:'France',c:'#8c6bb1',img:'images/paris.jpg',cap:'Rooftops & the Eiffel Tower at dusk',ll:[506,114],
 tag:'The City of Love – A World of Art, Fashion and Romance',
 story:"In Paris the evenings turn peach and lavender, and the Eiffel Tower stands over a sea of rooftops like a promise. I sipped coffee in tiny cafés, wandered beside the Seine and lost whole afternoons in galleries. Elegance, history and creativity are in everything here — even the bread.",
 facts:['The Eiffel Tower was built for the 1889 World\'s Fair.','Paris has 200+ museums and thousands of historic monuments.','The Louvre began life as a royal palace.','Called the City of Light for its culture, learning and illuminated streets.','The River Seine flows through the heart of the city.'],
 months:'qqggggppggqq',when:[['Mar–Apr','Spring flowers, beautiful gardens, mild weather.'],['May–Jun','Pleasant temperatures, outdoor cafés, longer days.'],['Jul–Aug','Summer festivals and lively streets — larger crowds.'],['Sep–Oct','Golden autumn colours and cultural events.'],['Nov–Feb','Christmas decorations, winter markets, a quieter city.']],
 places:[['Eiffel Tower','The ultimate symbol of Paris, with breathtaking views.'],['Louvre Museum','Home to the Mona Lisa and countless masterpieces.'],['Notre-Dame Cathedral','A magnificent example of French Gothic architecture.'],['Arc de Triomphe','Spectacular views of the Champs-Élysées.'],['Montmartre','Artistic streets of cafés, painters and cobblestones.'],['Palace of Versailles','Luxurious interiors and gardens.'],['Luxembourg Gardens','A place to relax and live Parisian outdoor life.'],['Sainte-Chapelle','Magnificent stained-glass windows.']],
 mus:[['Musée du Louvre','Mona Lisa, Venus de Milo and more.'],['Musée d\'Orsay','Impressionists: Monet, Renoir and Van Gogh.'],['Musée de l\'Orangerie','Monet\'s enormous Water Lilies.'],['Centre Pompidou','Modern & contemporary art — check current visitor arrangements.'],['Musée Rodin','Sculptures and gardens featuring The Thinker.'],['Cité des Sciences et de l\'Industrie','Interactive science exhibitions.']],
 todo:['Take a romantic evening Seine cruise','Enjoy a pastry and coffee in a Parisian café','See a live cabaret at the Moulin Rouge','Join a French cooking or pastry class','Meet the painters of Montmartre','Picnic near the Eiffel Tower','Cycle through historic Paris','Visit Disneyland Paris','Browse luxury boutiques and local markets'],
 food:['Croissants','Macarons','Crêpes','French Onion Soup','Baguettes','Éclairs','Boeuf Bourguignon'],fe:'🥐'},
{id:'newyork',n:'New York',co:'USA',c:'#1f4e8c',img:'images/nyc.jpg',cap:'Lower Manhattan after sunset',ll:[294,137],
 tag:'The City That Never Sleeps – Where Dreams Meet Opportunity',
 story:"New York hit me like a drumbeat. Towers lit up the blue hour, the harbour shimmered, and every street seemed to hold a thousand stories. From the glow of Times Square to the hush of Central Park, this city proved that endless energy and quiet pockets of peace can share one skyline.",
 facts:['Home to the Statue of Liberty, a symbol of freedom and hope.','Five boroughs: Manhattan, Brooklyn, Queens, the Bronx and Staten Island.','Birthplace of many cultural movements, including hip-hop.','Central Park is larger than the principality of Monaco.'],
 months:'qqngggnngggg',when:[['Apr–Jun','Pleasant weather and spring flowers.'],['Sep–Oct','Autumn colours and comfortable weather.'],['Nov–Dec','Famous holiday decorations and festive atmosphere.'],['Jan–Feb','Quieter sightseeing and winter experiences.']],
 places:[['Times Square','Bright lights, giant screens and entertainment.'],['Statue of Liberty','An iconic symbol of American freedom.'],['Central Park','Gardens, lakes and walking trails.'],['Empire State Building','Spectacular skyline views.'],['Brooklyn Bridge','Famous architecture and scenic walks.'],['Rockefeller Center','Shopping, observation decks and seasonal ice skating.'],['Fifth Avenue','Luxury shopping and famous boutiques.']],
 mus:[['The Met','Art and history from around the world.'],['MoMA','Famous modern and contemporary artworks.'],['American Museum of Natural History','Dinosaurs, space and science.'],['9/11 Memorial & Museum','A moving historical experience.'],['Intrepid Museum','Aircraft, naval history and space exploration.']],
 todo:['Watch a Broadway musical','Take a helicopter tour over Manhattan','Sail a sunset cruise around the Statue of Liberty','Dine on a rooftop with skyline views','Explore Chinatown and Little Italy','Ice skate at Rockefeller Center in winter','Walk the High Line'],
 food:['NY-style Pizza','Bagels','Cheesecake','Hot Dogs','Pastrami Sandwiches'],fe:'🍕'},
{id:'rome',n:'Rome',co:'Italy',c:'#c2693a',img:'images/rome.jpg',cap:'St. Peter\'s Square from above',ll:[535,134],
 tag:'The Eternal City – Where History Comes Alive',
 story:"My final chapter was Rome, and it felt like walking through time. From above, St. Peter's Square opened like a stone embrace around a sea of terracotta rooftops. Every street whispered of emperors, Renaissance masters and centuries of history — and then a scoop of gelato reminded me that life, too, is meant to be savoured.",
 facts:['Called the Eternal City for its extraordinary historical legacy.','The world\'s smallest country, Vatican City, lies within Rome.','The Colosseum once hosted gladiator battles and public spectacles.','Hundreds of historic fountains, including the Trevi Fountain.'],
 months:'qqgggpppggqq',when:[['Mar–May','Pleasant spring weather and beautiful gardens.'],['Jun–Aug','Summer atmosphere — very hot and crowded.'],['Sep–Oct','Comfortable weather for exploring historical sites.'],['Nov–Feb','Fewer tourists and a quieter experience.']],
 places:[['Colosseum','The legendary ancient Roman amphitheatre.'],['Trevi Fountain','Toss a coin and make a wish.'],['Vatican City','Magnificent religious architecture and art.'],['Pantheon','An extraordinary ancient Roman temple.'],['Roman Forum','Ruins of ancient Roman public life.'],['Spanish Steps','A historic staircase and meeting place.'],['Trastevere','Charming streets, cafés and traditional restaurants.']],
 mus:[['Vatican Museums','Extraordinary Renaissance masterpieces.'],['Capitoline Museums','Ancient Roman sculptures and collections.'],['Borghese Gallery','Sculptures and paintings by Bernini and Caravaggio.'],['National Roman Museum','Ancient Roman artefacts and treasures.']],
 todo:['Take a guided tour of the Colosseum','Join an Italian pasta-making class','Ride a Vespa sightseeing tour','Taste your way through a gelato tour','Watch the sunset from a rooftop','Explore the underground catacombs','Take a day trip to the nearby countryside'],
 food:['Carbonara','Cacio e Pepe','Margherita Pizza','Supplì','Gelato','Tiramisu'],fe:'🍝'}
];
/* coarse world silhouettes (equirectangular, 1000x500) */
const LAND=['33,67 111,56 236,50 278,61 328,83 347,111 314,128 289,153 275,181 250,169 231,178 267,222 283,228 264,211 236,200 208,189 175,161 156,139 153,114 125,89 78,83 42,83','320,25 400,20 380,50 340,60','283,228 333,222 361,250 403,267 389,311 339,356 311,403 294,389 300,333 278,264 283,244','472,150 475,131 489,117 514,106 528,89 556,56 667,50 778,36 889,50 972,67 944,89 889,125 856,153 839,167 833,189 800,217 789,244 772,228 756,189 722,228 700,194 661,183 639,167 600,153 578,139 556,139 539,125 522,128 497,144','453,192 483,150 528,147 589,164 619,217 642,219 611,278 597,319 556,347 533,300 525,239 478,239 453,211','817,311 861,283 894,281 925,322 905,358 861,339 819,344','780,262 840,270 840,278 780,270','880,160 892,140 900,130 896,150 886,170','495,100 505,95 508,108 498,112'];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const L=a=>a.map(x=>`<li>${x}</li>`).join(''),P=a=>a.map(([n,d])=>`<li><b>${n}</b><span>${d}</span></li>`).join('');

/* build chapters */
$('#chapters').innerHTML=CH.map((h,i)=>`
<article class="chapter" id="${h.id}" style="--c:${h.c}">
 <div class="ch-hero"><div class="bg" data-p=".08" style="background-image:url(${h.img})"></div>
  <div class="ch-grid"><div class="rv"><div class="num">0${i+1}</div><p class="country">Chapter ${['One','Two','Three','Four','Five'][i]} · ${h.co}</p><h2>${h.n}</h2><p class="tagline" data-t="${h.tag}"></p></div>
  <figure class="polaroid rv"><img src="${h.img}" alt="${h.n}, ${h.co}" loading="lazy"><figcaption>${h.cap}</figcaption></figure></div></div>
 <div class="ch-body">
  <p class="story rv">${h.story}</p>
  <div class="blk rv"><h3><span class="hand">scribbled in my notebook…</span>Fascinating facts</h3><div class="notes">${h.facts.map(f=>`<div class="note">${f}</div>`).join('')}</div></div>
  <div class="blk rv"><h3><span class="hand">when the place feels its best</span>Best time to visit</h3>
   <div class="months">${[...h.months].map((m,k)=>`<i class="${m}" style="--i:${k}">${M[k]}</i>`).join('')}</div>
   <p class="legend"><span><b style="background:var(--c)"></b>Lovely</span><span><b style="background:#e9a23b"></b>Peak / hot / busy</span><span><b style="background:#7fa5c9"></b>Quiet</span></p>
   <ul class="when">${h.when.map(([a,b])=>`<li><b>${a}</b> — ${b}</li>`).join('')}</ul></div>
  <div class="two"><div class="blk rv"><h3><span class="hand">the stops along my path</span>Places I stood</h3><ol class="stops">${P(h.places)}</ol></div>
  <div class="blk rv"><h3><span class="hand">where stories hang on walls</span>Museums & culture</h3><ul class="mus">${P(h.mus)}</ul></div></div>
  <div class="two"><div class="blk rv"><h3><span class="hand">days I'll never forget</span>What I did</h3><ul class="todo">${L(h.todo)}</ul></div>
  <div class="blk rv"><h3><span class="hand">${h.fe} oh, the flavours</span>What I tasted</h3><div class="food">${h.food.map(f=>`<span>${f}</span>`).join('')}</div></div></div>
  ${CH[i+1]?`<div class="ticket rv">BOARDING PASS · ${h.n.toUpperCase()} ✈ ${CH[i+1].n.toUpperCase()} · NEXT CHAPTER</div>`:`<div class="ticket rv">FINAL STOP · ${h.n.toUpperCase()} ✈ THE WORLD MAP</div>`}
 </div></article>`).join('');
$('#navlinks').innerHTML=CH.map(h=>`<a href="#${h.id}" data-id="${h.id}" style="--c:${h.c}">${h.n}</a>`).join('')+'<a href="#map" data-id="map" style="--c:#1d2b3a">Map</a>';
$('#yr').textContent=new Date().getFullYear();

/* map */
const pts=CH.map(h=>h.ll);
const d=pts.map((p,i)=>{if(!i)return`M${p}`;const q=pts[i-1],mx=(q[0]+p[0])/2,my=Math.min(q[1],p[1])-70;return`Q${mx},${my} ${p}`}).join(' ');
$('#worldmap').innerHTML=`<defs><pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.6" fill="#ffd98a" opacity=".55"/></pattern></defs>
${LAND.map(p=>`<polygon class="land" points="${p}"/>`).join('')}<path class="route" d="${d}"/>
${CH.map(h=>`<g class="pin" data-id="${h.id}" style="--c:${h.c}" tabindex="0" role="button" aria-label="${h.n}"><circle class="pulse" cx="${h.ll[0]}" cy="${h.ll[1]}" r="5"/><circle class="dot" cx="${h.ll[0]}" cy="${h.ll[1]}" r="7"/><text x="${h.ll[0]+12}" y="${h.ll[1]+4}">${h.n}</text></g>`).join('')}`;
const pop=$('#pop');
function showPin(g){const h=CH.find(x=>x.id===g.dataset.id);$$('.pin').forEach(p=>p.classList.toggle('on',p===g));pop.style.setProperty('--c',h.c);pop.innerHTML=`<h3>${h.n}, ${h.co}</h3><p>${h.tag}</p><a href="#${h.id}">Read this chapter →</a>`;pop.classList.add('show')}
$$('.pin').forEach(g=>{g.onclick=()=>showPin(g);g.onkeydown=e=>(e.key==='Enter'||e.key===' ')&&showPin(g)});

/* reveal, typewriter, active nav */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');const t=e.target.querySelector?.('.tagline');if(t&&!t.dataset.on){t.dataset.on=1;let i=0;const s=t.dataset.t,id=setInterval(()=>{t.textContent=s.slice(0,++i);if(i>=s.length){clearInterval(id);t.classList.add('done')}},38)}io.unobserve(e.target)}),{threshold:.2});
$$('.rv').forEach(el=>io.observe(el));
const spy=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&$$('#navlinks a').forEach(a=>a.classList.toggle('on',a.dataset.id===e.target.id))),{rootMargin:'-45% 0px -50% 0px'});
$$('.chapter,#map').forEach(s=>spy.observe(s));

/* scroll: progress bar, plane, parallax */
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight,p=h?y/h:0;
 $('#bar').style.width=p*100+'%';$('#plane').style.top=`calc(${p*100}% - ${p*20}px)`;
 $$('[data-p]').forEach(el=>{const r=el.parentElement.getBoundingClientRect();el.style.translate=`0 ${(r.top+r.height/2-innerHeight/2)*el.dataset.p}px`})}
addEventListener('scroll',()=>requestAnimationFrame(onScroll),{passive:true});onScroll();